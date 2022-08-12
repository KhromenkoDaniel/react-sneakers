import React, { useEffect } from 'react';
import styles from './Card.module.scss';

function Card(props) {
 const [isAdded, setIsAdded] = React.useState();

 const onClickPlus = () => {
  setIsAdded(!isAdded);
 };

 React.useEffect(() => {
  console.log('Змінна змінилась');
 }, [isAdded]);
 return (
  <div className={styles.card}>
   <div className={styles.favourite} onClick={props.onFavourite}>
    <img src='/img/heart-unliked.svg' alt='Unliked' />
   </div>
   <img className={styles.cardPicture} src={props.imageUrl} alt='Sneakers' />
   <h5>{props.title}</h5>
   <div className='d-flex justify-between align-center'>
    <div className='d-flex flex-column'>
     <span>Ціна:</span>
     <b>{props.price} грн.</b>
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
