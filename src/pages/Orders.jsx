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
   <div className='d-flex justify-between mb-40 flex-column'>
    <h1 className='ml-10'>Мої замовлення</h1>
    <span className='horizontalLine'></span>
   </div>
   <div className='sneakers d-flex flex-wrap'>
    {(isLoading ? [...Array(8)] : orders).map((el, index) => (
     <div className='flex-column'>
      {/* <h2 className='ml-10'>Замовлення #{OrderID}</h2>
      <span className='horizontalLine'></span> */}
      <Card
       key={index + '1' + index}
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
