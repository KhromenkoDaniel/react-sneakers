import Bascket from './components/Bascket';
import Card from './components/Card';
import Header from './components/Header';

function App() {
 return (
  <div className='wrapper clear'>
   <div className='overlay'>
    <Bascket />
   </div>
   <Header />
   <div className='content p-40'>
    <div className='d-flex align-center justify-between mb-40'>
     <h1>Всі кросівки</h1>
     <div className='search-block d-flex mr-30'>
      <img src='\img\search.svg' alt='Search' />
      <input placeholder='Пошук...' />
     </div>
    </div>
    <div className='sneakers d-flex'>
     <Card />
     <Card />
     <Card />
     <Card />
    </div>
   </div>
  </div>
 );
}

export default App;
