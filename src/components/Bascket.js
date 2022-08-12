function Bascket(props) {
 return (
  <div className='overlay'>
   <div className='shopping-bascket'>
    <h2 className='d-flex justify-between'>
     Корзина
     <img
      onClick={props.onClose}
      className='removeBtn cu-p'
      src='\img\btn-remove-hovered.svg'
      alt='Button'
     />
    </h2>

    <div className='items'>
     <div className='cartItem d-flex align-center mb-20'>
      <div
       style={{ backgroundImage: 'url(img/sneakers-collection/1.jpg)' }}
       className='cartItem-img'
      ></div>
      <div className='mr-20'>
       <p className='mb-5'>Чоловічі Кросівки Nike Air Max 270</p>
       <b>3 500 грн.</b>
      </div>
      <img
       className='removeBtn'
       src='\img\btn-remove-hovered.svg'
       alt='Button'
      />
     </div>
     <div className='cartItem d-flex align-center mb-20'>
      <div
       style={{ backgroundImage: 'url(img/sneakers-collection/1.jpg)' }}
       className='cartItem-img'
      ></div>
      <div className='mr-20'>
       <p className='mb-5'>Чоловічі Кросівки Nike Air Max 270</p>
       <b>3 500 грн.</b>
      </div>
      <img
       className='removeBtn'
       src='\img\btn-remove-hovered.svg'
       alt='Button'
      />
     </div>
     <div className='cartItem d-flex align-center mb-20'>
      <div
       style={{ backgroundImage: 'url(img/sneakers-collection/1.jpg)' }}
       className='cartItem-img'
      ></div>
      <div className='mr-20'>
       <p className='mb-5'>Чоловічі Кросівки Nike Air Max 270</p>
       <b>3 500 грн.</b>
      </div>
      <img
       className='removeBtn'
       src='\img\btn-remove-hovered.svg'
       alt='Button'
      />
     </div>
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
