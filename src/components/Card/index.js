import React from 'react';
import styles from './Card.module.scss';
import ContentLoader from 'react-content-loader';
function Card({
 id,
 onFavourite,
 imageUrl,
 price,
 title,
 onPlus,
 favourited = false,
 added = false,
 loading = false,
}) {
 const [isAdded, setIsAdded] = React.useState(added);
 const [isFavourite, setIsFavourite] = React.useState(favourited);

 const onClickPlus = () => {
  onPlus({ id, imageUrl, price, title });
  setIsAdded(!isAdded);
 };

 React.useEffect(() => {}, [isAdded]);

 const onCLickFavourite = () => {
  onFavourite({ id, imageUrl, price, title });
  setIsFavourite(!isFavourite);
 };

 return (
  <div className={styles.card}>
   {loading ? (
    <ContentLoader
     speed={2}
     width={150}
     height={218}
     viewBox='0 0 150 218'
     backgroundColor='#f3f3f3'
     foregroundColor='#ecebeb'
    >
     <rect x='5' y='38' rx='10' ry='10' width='145' height='90' />
     <rect x='5' y='138' rx='3' ry='3' width='145' height='15' />
     <rect x='5' y='192' rx='8' ry='8' width='80' height='24' />
     <rect x='114' y='184' rx='8' ry='8' width='32' height='32' />
     <rect x='5' y='160' rx='3' ry='3' width='93' height='15' />
     <rect x='5' y='0' rx='8' ry='8' width='32' height='32' />
    </ContentLoader>
   ) : (
    <>
     <div className={styles.favourite} onClick={onCLickFavourite}>
      <img
       src={isFavourite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
       alt='Unliked'
      />
     </div>
     <img className={styles.cardPicture} src={imageUrl} alt='Sneakers' />
     <h5>{title}</h5>
     <div className='cardPrice d-flex justify-between'>
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
    </>
   )}
  </div>
 );
}

export default Card;
