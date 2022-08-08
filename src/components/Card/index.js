import styles from './Card.module.scss';

function Card(props) {
 return (
  <div className={styles.card}>
   <div className={styles.favourite}>
    <img src='/img/heart-unliked.svg' alt='Unliked' />
   </div>
   <img className='card-picture' src={props.imageUrl} alt='Sneakers' />
   <h5>{props.title}</h5>
   <div className='d-flex justify-between align-center'>
    <div className='d-flex flex-column'>
     <span>Ціна:</span>
     <b>{props.price} грн.</b>
    </div>
    <button className='card__btn-plus' onClick={props.onClick}>
     <img className='card__plus-img' src='/img/Plus on card.svg' alt='plus' />
    </button>
   </div>
  </div>
 );
}

export default Card;
