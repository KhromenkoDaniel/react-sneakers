import Card from '../components/Card';

function Favourites({ items }) {
 return (
  <div className='content p-40'>
   <div className='d-flex align-center justify-between mb-40'>
    <h1>Збереженне</h1>
   </div>
   <div className='sneakers d-flex flex-wrap'>
    {items.map((obj, index) => (
     <Card
      key={index}
      title={obj.title}
      price={obj.price}
      imageUrl={obj.imageUrl}
     />
    ))}
   </div>
  </div>
 );
}

export default Favourites;
