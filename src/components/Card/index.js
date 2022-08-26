import React from 'react';
import styles from './Card.module.scss';

function Card({ onFavourite, imageUrl, price, title, onPlus }) {
 const [isAdded, setIsAdded] = React.useState(false);

 const onClickPlus = () => {
  onPlus({ imageUrl, price, title });

  setIsAdded(!isAdded);
 };

 React.useEffect(() => {}, [isAdded]);
 return (
  <div className={styles.card}>
   <div className={styles.favourite} onClick={onFavourite}>
    <img src='/img/heart-unliked.svg' alt='Unliked' />
   </div>
   <img className={styles.cardPicture} src={imageUrl} alt='Sneakers' />
   <h5>{title}</h5>
   <div className='d-flex justify-between align-center'>
    <div className='d-flex flex-column'>
     <span>Ціна:</span>
     <b>{price} грн.</b>
    </div>
    <img
     className={styles.plus}
     onClick={onClickPlus}
     src={isAdded ? '/img/Plus on card checked.svg' : '/img/Plus on card.svg'}
     alt='plus'
    />
   </div>
  </div>
 );
}

export default Card;
