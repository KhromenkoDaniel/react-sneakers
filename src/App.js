import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

import Bascket from './components/Bascket';
import Header from './components/Header';

import Favourites from './pages/Favourites';
import Home from './pages/Home';
import Orders from './pages/Orders';

import AppContext from './context';

function App() {
 const [items, setItems] = React.useState([]);
 const [cartItems, setCartItems] = React.useState([]);
 const [favourites, setFavourites] = React.useState([]);
 const [seachValue, setSeachValue] = React.useState('');
 const [cartOpened, setCartOpened] = React.useState(false);
 const [isLoading, setIsLoading] = React.useState(true);

 React.useEffect(() => {
  async function fetchData() {
   try {
    const [cartResponse, favouriteResponse, itemsResponse] = await Promise.all([
     await axios.get('https://62f7b7df73b79d01535d3408.mockapi.io/cart'),
     await axios.get('https://62f7b7df73b79d01535d3408.mockapi.io/favourite'),
     await axios.get('https://62f7b7df73b79d01535d3408.mockapi.io/items'),
    ]);
    setIsLoading(false);

    setItems(itemsResponse.data);
    setCartItems(cartResponse.data);
    setFavourites(favouriteResponse.data);
   } catch (error) {
    alert('Помилка при надсиланні запиту');
   }
  }
  fetchData();
 }, []);

 const onChangeSearchInput = (event) => {
  setSeachValue(event.target.value);
 };
 const onAddToCart = async (obj) => {
  try {
   const findItem = cartItems.find(
    (item) => Number(item.parentId) === Number(obj.id)
   );
   if (findItem) {
    setCartItems((prev) =>
     prev.filter((item) => Number(item.parentId) !== Number(obj.id))
    );
    await axios.delete(
     `https://62f7b7df73b79d01535d3408.mockapi.io/cart/${findItem.id}`
    );
   } else {
    setCartItems((prev) => [...prev, obj]);
    const { data } = await axios.post(
     'https://62f7b7df73b79d01535d3408.mockapi.io/cart',
     obj
    );
    setCartItems((prev) =>
     prev.map((item) => {
      if (item.parentId === data.parentId) {
       return {
        ...item,
        id: data.id,
       };
      }
      return item;
     })
    );
   }
  } catch (error) {
   alert('Помилка при додаванні в корзину');
   console.error(error);
  }
 };
 const onRemoveItem = (id, obj) => {
  try {
   axios.delete(`https://62f7b7df73b79d01535d3408.mockapi.io/cart/${id}`, obj);
   setCartItems((prev) =>
    prev.filter((item) => Number(item.id) !== Number(id))
   );
  } catch (error) {
   alert('Помилка при видаленні з корзини');
   console.error(error);
  }
 };

 const onAddToFavourite = async (obj) => {
  try {
   if (favourites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
    axios.delete(
     `https://62f7b7df73b79d01535d3408.mockapi.io/favourite/${obj.id}`
    );
    setFavourites((prev) =>
     prev.filter((item) => Number(item.id) !== Number(obj.id))
    );
   } else {
    const { data } = await axios.post(
     'https://62f7b7df73b79d01535d3408.mockapi.io/favourite',
     obj
    );
    setFavourites((prev) => [...prev, data]);
   }
  } catch (error) {
   alert('Не вдалося додати в закладки');
  }
 };

 const isItemAdded = (id) => {
  return cartItems.some((obj) => Number(obj.parentId) === Number(id));
 };

 return (
  <AppContext.Provider
   value={{
    items,
    cartItems,
    favourites,
    isItemAdded,
    onAddToFavourite,
    onAddToCart,
    setCartOpened,
    setCartItems,
   }}
  >
   <div className='wrapper clear'>
    <Bascket
     items={cartItems}
     onClose={() => setCartOpened(false)}
     onRemove={onRemoveItem}
     opened={cartOpened}
    />

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
        cartItems={cartItems}
        onAddToCart={onAddToCart}
        onAddToFavourite={onAddToFavourite}
        isLoading={isLoading}
       />
      }
     />
     <Route exact path='/favourites' element={<Favourites />}></Route>
     <Route exact path='/orders' element={<Orders />}></Route>
    </Routes>
   </div>
  </AppContext.Provider>
 );
}

export default App;
