import React from 'react';
import axios from 'axios';
import Bascket from './components/Bascket';
import Card from './components/Card';
import Header from './components/Header';

function App() {
 const [items, setItems] = React.useState([]);
 const [cartItems, setCartItems] = React.useState([]);
 const [seachValue, setSeachValue] = React.useState('');
 const [cardOpened, setCartOpened] = React.useState(false);

 React.useEffect(() => {
  axios.get('https://62f7b7df73b79d01535d3408.mockapi.io/items').then((res) => {
   console.log(res.data);
  });
 }, []);

 const onChangeSearchInput = (event) => {
  setSeachValue(event.target.value);
 };
 const onAddToCart = (obj) => {
  setCartItems(() => {
   return cartItems.find((el) => el.title === obj.title)
    ? cartItems.filter((el) => el.title !== obj.title)
    : [...cartItems, obj];
  });
 };

 function onRemoveFromCart(index) {
  setCartItems(cartItems.filter((_, ind) => ind !== index));
 }

 return (
  <div className='wrapper clear'>
   {cardOpened && (
    <Bascket
     items={cartItems}
     disableScroll={cardOpened}
     onClose={() => setCartOpened(false)}
     onCloseCart={(index) => onRemoveFromCart(index)}
    />
   )}
   <Header onClickCart={() => setCartOpened(true)} />
   <div className='content p-40'>
    <div className='d-flex align-center justify-between mb-40'>
     <h1>
      {seachValue ? `Пошук по запиту : "${seachValue}"` : 'Всі кросівки'}
     </h1>
     <div className='search-block d-flex mr-30'>
      <img className='btnSearch' src='\img\search.svg' alt='Search' />
      {seachValue && (
       <img
        onClick={() => setSeachValue('')}
        className='cu-p clear btnRemove'
        src='/img/btn-remove-hovered.svg'
        alt='Close'
       />
      )}
      <input
       onChange={onChangeSearchInput}
       value={seachValue}
       placeholder='Пошук...'
      />
     </div>
    </div>
    <div className='sneakers d-flex flex-wrap'>
     {items
      .filter((item) =>
       item.title.toLowerCase().includes(seachValue.toLowerCase())
      )
      .map((obj, index) => (
       <Card
        key={index}
        title={obj.title}
        price={obj.price}
        imageUrl={obj.imageUrl}
        onPlus={onAddToCart}
        onFavourite={() => console.log('Додали в закладки')}
       />
      ))}
    </div>
   </div>
  </div>
 );
}

export default App;
