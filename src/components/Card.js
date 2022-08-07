function Card() {
 return (
  <div className='card'>
   <div className='favourite'>
    <img src='/img/heart-unliked.svg' alt='Unliked' />
   </div>
   <img
    className='card-picture'
    src='/img/sneakers-collection/1.jpg'
    alt='Sneakers'
   />
   <h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
   <div className='d-flex justify-between align-center'>
    <div className='d-flex flex-column'>
     <span>Ціна:</span>
     <b>3 500 грн.</b>
    </div>
    <button className='card__btn-plus'>
     <img className='card__plus-img' src='/img/Plus on card.svg' alt='plus' />
    </button>
   </div>
  </div>
 );
}

export default Card;
