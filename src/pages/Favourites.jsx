import Card from '../components/Card';

function Favourites({ items, onAddToFavourite, onAddToCart }) {
 return (
  <div className='content p-40'>
   <div className='d-flex align-center justify-between mb-40'>
    <h1>Збереженне</h1>
   </div>
   <div className='sneakers d-flex flex-wrap'>
    {items.map((item) => (
     <Card
      key={item.id}
      favourited={true}
      onFavourite={onAddToFavourite}
      {...item}
      onPlus={onAddToCart}
     />
    ))}
   </div>
  </div>
 );
}

export default Favourites;
