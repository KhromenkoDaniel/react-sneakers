import React from 'react';
import Info from './Info';
import AppContext from '../context';
import axios from 'axios';

function Bascket({ onClose, onRemove, items = [] }) {
 const [isOrderComlete, setIsOrderComlete] = React.useState(false);
 const [OrderID, setOrderID] = React.useState(null);
 const [isLoading, setIsLoading] = React.useState(false);

 const { setCartItems, cartItems } = React.useContext(AppContext);

 const onClickOrder = async () => {
  try {
   const { data } = await axios.post(
    'https://62f7b7df73b79d01535d3408.mockapi.io/orders',
    {
     items: cartItems,
    }
   );
   await axios.put('https://62f7b7df73b79d01535d3408.mockapi.io/cart', []);
   setOrderID(data.id);
   setIsOrderComlete(true);
   setCartItems([]);
  } catch (error) {
   alert('Не вдалось сформувати замовлення :(');
  }
  setIsLoading(false);
 };

 return (
  <div className='overlay'>
   <div className='shopping-bascket'>
    <h2 className='d-flex justify-between'>
     Кошик
     <img
      onClick={onClose}
      className='removeBtn cu-p'
      src='\img\btn-remove-hovered.svg'
      alt='Button'
     />
    </h2>

    {items.length > 0 ? (
     <div className='d-flex flex-column flex'>
      <div className='items'>
       {items.map((obj, id) => (
        <div key={id} className='cartItem d-flex align-center mb-20'>
         <div
          style={{ backgroundImage: `url(${obj.imageUrl})` }}
          className='cartItem-img'
         ></div>
         <div className='mr-20 flex'>
          <p className='mb-5'>{obj.title}</p>
          <b>{obj.price} грн.</b>
         </div>
         <img
          onClick={() => onRemove(obj.id)}
          className='removeBtn'
          src='\img\btn-remove-hovered.svg'
          alt='Button'
         />
        </div>
       ))}
      </div>

      <div className='cartTotalBlock'>
       <ul>
        <li>
         <span>Всього:</span>
         <div></div>
         <b>14 136 грн.</b>
        </li>
        <li>
         <span>ПДВ 20%:</span>
         <div></div>
         <b>2761 грн</b>
        </li>
       </ul>
       <button
        disabled={isLoading}
        onClick={onClickOrder}
        className='greenButton'
       >
        Оформити замовлення <img src='/img/arrow-right.svg' alt='arrow' />
       </button>
      </div>
     </div>
    ) : (
     <Info
      title={isOrderComlete ? 'Замовлення сформовано!' : 'Кошик пустий'}
      description={
       isOrderComlete
        ? `Ваше замовлення #${OrderID} скоро буде передано кур\`єру для доставки`
        : 'Додайте хоча б одну пару кросівок, щоб зробити замовлення'
      }
      image={isOrderComlete ? '/img/order-done.jpg' : '/img/empty-cart.jpg'}
     />
    )}
   </div>
  </div>
 );
}
export default Bascket;
