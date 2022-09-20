import React from 'react';
import AppContext from '../context';
const Info = ({ title, image, description }) => {
 const { setCartOpened } = React.useContext(AppContext);

 return (
  <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
   <img
    style={{ zIndex: 1 }}
    className='emptyBacket'
    src={image}
    alt='Empty Backet'
   />
   <h2 style={{ zIndex: 2 }}>{title}</h2>
   <p className='opacity-6'>{description}</p>
   <button onClick={() => setCartOpened(false)} className='greenButton'>
    <img src='/img/arrow.svg' alt='Arrow' />
    Повернутись назад
   </button>
  </div>
 );
};
export default Info;
//Додайте хоча б одну пару кросівок, щоб зробити замовлення
