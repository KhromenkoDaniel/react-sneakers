import React from 'react';
import Bascket from './components/Bascket';
import Card from './components/Card';
import Header from './components/Header';

function App() {
 const [items, setItems] = React.useState([]);
 const [cartItems, setCartItems] = React.useState([]);
 const [cardOpened, setCartOpened] = React.useState(false);

 React.useEffect(() => {
  fetch('https://62f7b7df73b79d01535d3408.mockapi.io/items')
   .then((res) => {
    return res.json();
   })
   .then((json) => {
    setItems(json);
   });
 }, []);

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
     <h1>Всі кросівки</h1>
     <div className='search-block d-flex mr-30'>
      <img src='\img\search.svg' alt='Search' />
      <input placeholder='Пошук...' />
     </div>
    </div>
    <div className='sneakers d-flex flex-wrap'>
     {items.map((obj, index) => (
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
