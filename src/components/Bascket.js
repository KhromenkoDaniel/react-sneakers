import React from 'react';
function Bascket({ onCloseCart, onClose, items = [] }) {
 return (
  <div className='overlay'>
   <div className='shopping-bascket'>
    <h2 className='d-flex justify-between'>
     Корзина
     <img
      onClick={onClose}
      className='removeBtn cu-p'
      src='\img\btn-remove-hovered.svg'
      alt='Button'
     />
    </h2>

    <div className='items'>
     {items.map((obj, index) => (
      <div className='cartItem d-flex align-center mb-20'>
       <div
        style={{ backgroundImage: `url(${obj.imageUrl})` }}
        className='cartItem-img'
       ></div>
       <div className='mr-20'>
        <p className='mb-5'>{obj.title}</p>
        <b>{obj.price} грн.</b>
       </div>
       <img
        onClick={() => onCloseCart(index)}
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
     <button className='greenButton'>
      Оформити замовлення <img src='/img/arrow-right.svg' alt='arrow' />
     </button>
    </div>
   </div>
  </div>
 );
}
export default Bascket;
