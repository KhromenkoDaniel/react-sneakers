import React from 'react';
import Bascket from './components/Bascket';
import Card from './components/Card';
import Header from './components/Header';

const arr = [
 {
  title: 'Чоловічі Кросівки Nike Blazer Mid Suede',
  price: 3750,
  imageUrl: '/img/sneakers-collection/1.jpg',
 },
 {
  title: 'Чоловічі Кросівки Nike Air Max 270',
  price: 3500,
  imageUrl: '/img/sneakers-collection/2.jpg',
 },
 {
  title: 'Мужские Кроссовки Nike Blazer Mid Suede',
  price: 3300,
  imageUrl: '/img/sneakers-collection/3.jpg',
 },
 {
  title: 'Чоловічі Кросівки Puma X Aka Boku Future Rider',
  price: 4000,
  imageUrl: '/img/sneakers-collection/4.jpg',
 },
];

function App() {
 const [cardOpened, setCartOpened] = React.useState(false);
 return (
  <div className='wrapper clear'>
   {cardOpened && <Bascket onClose={() => setCartOpened(false)} />}
   <Header onClickCart={() => setCartOpened(true)} />
   <div className='content p-40'>
    <div className='d-flex align-center justify-between mb-40'>
     <h1>Всі кросівки</h1>
     <div className='search-block d-flex mr-30'>
      <img src='\img\search.svg' alt='Search' />
      <input placeholder='Пошук...' />
     </div>
    </div>
    <div className='sneakers d-flex'>
     {arr.map((obj, index) => (
      <Card
       key={index}
       title={obj.title}
       price={obj.price}
       imageUrl={obj.imageUrl}
       onPlus={() => console.log('Жмякнули на плюс')}
       onFavourite={() => console.log('Додали в закладки')}
      />
     ))}
    </div>
   </div>
  </div>
 );
}

export default App;
