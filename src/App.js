import React from 'react';
import axios from 'axios';
import Bascket from './components/Bascket';
import Home from './pages/Home';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Favourites from './pages/Favourites';

// [
//   {
//    "id": "1",
//    "imageUrl":"/img/sneakers-collection/1.jpg",
//    "price":  4300,
//    "title": "Чоловічі Кросівки Nike Blazer Mid Suede"
//   },
//   {
//    "id": "2",
//    "imageUrl":"/img/sneakers-collection/2.jpg",
//    "price":  4000,
//    "title": "Чоловічі Кросівки Nike Air Max 270"
//   },
//   {
//    "id": "3",
//    "imageUrl":"/img/sneakers-collection/3.jpg",
//    "price":  4430,
//    "title": "Чоловічі Кросівки Nike Blazer Mid Suede"
//   },
//   {
//    "id": "4",
//    "imageUrl":"/img/sneakers-collection/4.jpg",
//    "price":  4230,
//    "title": "Чоловічі Кросівки Puma X Aka Boku Future Rider"
//   },
//   {
//    "id": "5",
//    "imageUrl":"/img/sneakers-collection/5.jpg",
//    "price":  3030,
//    "title": "Чоловічі Кросівки Under Armour Curry 8"
//   },
//   {
//    "id": "6",
//    "imageUrl":"/img/sneakers-collection/6.jpg",
//    "price":  2030,
//    "title": "Чоловічі Кросівки Nike Kyrie 7"
//   },
//   {
//    "id": "7",
//    "imageUrl":"/img/sneakers-collection/7.jpg",
//    "price":  5030,
//    "title": "Чоловічі Кросівки Jordan Air Jordan 11"
//   },
//   {
//    "id": "8",
//    "imageUrl":"/img/sneakers-collection/8.jpg",
//    "price":  3500,
//    "title": "Чоловічі Кросівки Nike LeBron XVIII"
//   },
//   {
//    "id": "9",
//    "imageUrl":"/img/sneakers-collection/9.jpg",
//    "price":  4730,
//    "title": "Чоловічі Кросівки Nike Lebron XVIII Low"
//   },
//   {
//    "id": "10",
//    "imageUrl":"/img/sneakers-collection/10.jpg",
//    "price":  4230,
//    "title": "Чоловічі Кросівки Nike Blazer Mid Suede"
//   },
//   {
//    "id": "11",
//    "imageUrl":"/img/sneakers-collection/11.jpg",
//    "price":  3630,
//    "title": "Чоловічі Кросівки Puma X Aka Boku Future Rider"
//   },
//   {
//    "id": "12",
//    "imageUrl":"/img/sneakers-collection/12.jpg",
//    "price":  3830,
//    "title": "Чоловічі Кросівки Nike Kyrie Flytrap IV"
//   }
//  ]

function App() {
 const [items, setItems] = React.useState([]);
 const [cartItems, setCartItems] = React.useState([]);
 const [favourites, setFavourites] = React.useState([]);
 const [seachValue, setSeachValue] = React.useState('');
 const [cardOpened, setCartOpened] = React.useState(false);

 React.useEffect(() => {
  axios.get('https://62f7b7df73b79d01535d3408.mockapi.io/items').then((res) => {
   setItems(res.data);
  });
  axios.get('https://62f7b7df73b79d01535d3408.mockapi.io/cart').then((res) => {
   setCartItems(res.data);
  });
 }, []);

 const onChangeSearchInput = (event) => {
  setSeachValue(event.target.value);
 };
 const onAddToCart = (obj) => {
  axios.post('https://62f7b7df73b79d01535d3408.mockapi.io/cart', obj);
  setCartItems((prev) => [...prev, obj]);
 };

 const onAddFavourite = (obj) => {
  axios.post('https://62f7b7df73b79d01535d3408.mockapi.io/favourite', obj);
  setFavourites((prev) => [...prev, obj]);
 };

 const onRemoveItem = (id, obj) => {
  axios.delete(`https://62f7b7df73b79d01535d3408.mockapi.io/cart/${id}`, obj);
  setCartItems((prev) => prev.filter((item) => item.id !== id));
 };

 return (
  <div className='wrapper clear'>
   {cardOpened && (
    <Bascket
     items={cartItems}
     disableScroll={cardOpened}
     onClose={() => setCartOpened(false)}
     onRemove={onRemoveItem}
    />
   )}
   <Header onClickCart={() => setCartOpened(true)} />
   <Routes>
    <Route
     exact
     path='/'
     element={
      <Home
       seachValue={seachValue}
       setSeachValue={setSeachValue}
       onChangeSearchInput={onChangeSearchInput}
       items={items}
       onAddToCart={onAddToCart}
       onAddFavourite={onAddFavourite}
      />
     }
    />
    <Route
     exact
     path='/favourites'
     element={<Favourites items={favourites} />}
    ></Route>
   </Routes>
  </div>
 );
}

export default App;
