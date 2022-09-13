import Card from '../components/Card';

function Home({
 seachValue,
 setSeachValue,
 onChangeSearchInput,
 items,
 onAddToCart,
 onAddFavourite,
}) {
 return (
  <div className='content p-40'>
   <div className='d-flex align-center justify-between mb-40'>
    <h1>{seachValue ? `Пошук по запиту : "${seachValue}"` : 'Всі кросівки'}</h1>
    <div className='search-block d-flex mr-30'>
     <img className='btnSearch' src='\img\search.svg' alt='Search' />
     {seachValue && (
      <img
       onClick={() => setSeachValue('')}
       className='cu-p clear btnRemove'
       src='/img/btn-remove-hovered.svg'
       alt='Close'
      />
     )}
     <input
      onChange={onChangeSearchInput}
      value={seachValue}
      placeholder='Пошук...'
     />
    </div>
   </div>
   <div className='sneakers d-flex flex-wrap'>
    {items
     .filter((item) =>
      item.title.toLowerCase().includes(seachValue.toLowerCase())
     )
     .map((obj, index) => (
      <Card
       key={index}
       title={obj.title}
       price={obj.price}
       imageUrl={obj.imageUrl}
       onPlus={(obj) => onAddToCart(obj)}
       onFavourite={(obj) => onAddFavourite(obj)}
      />
     ))}
   </div>
  </div>
 );
}

export default Home;
