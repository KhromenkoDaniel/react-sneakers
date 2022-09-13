import React from 'react';

function Bascket({ onClose, onRemove, items = [] }) {
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
     <div className='d-flex flex-column'>
      <div className='items'>
       {items.map((obj) => (
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
       <button className='greenButton'>
        Оформити замовлення <img src='/img/arrow-right.svg' alt='arrow' />
       </button>
      </div>
     </div>
    ) : (
     <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
      <img
       className='emptyBacket'
       src='/img/empty-cart.jpg'
       alt='Empty Backet'
      />
      <h2>Кошик пустий</h2>
      <p className='opacity-6'>
       Додайте хоча б одну пару кросівок, щоб зробити замовлення
      </p>
      <button onClick={onClose} className='greenButton'>
       <img src='/img/arrow.svg' alt='Arrow' />
       Повернутись назад
      </button>
     </div>
    )}
   </div>
  </div>
 );
}
export default Bascket;
