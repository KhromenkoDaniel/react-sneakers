import axios from 'axios';
import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';
function Orders() {
 const { onAddToFavourite } = React.useContext(AppContext);
 const [orders, setOrders] = React.useState([]);
 const [isLoading, setIsLoading] = React.useState(true);
 const [OrderID, setOrderID] = React.useState(null);
 React.useEffect(() => {
  (async () => {
   try {
    const { data } = await axios.get(
     'https://62f7b7df73b79d01535d3408.mockapi.io/orders'
    );
    setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
    setIsLoading(false);
    setOrderID(data.id);
   } catch (error) {
    alert('Ошибка при запросе заказов');
    console.error(error);
   }
  })();
 }, []);
 return (
  <div className='content p-40'>
   <div className='d-flex align-center justify-between mb-40'>
    <h1>Мої замовлення</h1>
    <span className='w100p'></span>
   </div>
   <div className='sneakers d-flex flex-wrap'>
    {(isLoading ? [...Array(8)] : orders).map((el, _) => (
     <div className='flex-column'>
      <h2>Замовлення #{OrderID}</h2>
      <Card
       key={_}
       loading={isLoading}
       onFavourite={(el) => onAddToFavourite(el)}
       {...el}
      />
     </div>
    ))}
   </div>
  </div>
 );
}

export default Orders;
