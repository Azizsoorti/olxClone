import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import AllProducts from './components/AllProducts/AllProducts';
import DetailsProduct from './components/DetailsProduct/DetailsProduct';
import SellProduct from './components/SellProduct/SellProduct';

function App() {
  return (

    <div className='mt-0'>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<AllProducts />} />
          <Route path='detailsProduct' element={<DetailsProduct />} />
        </Route>
        <Route path='sellProduct' element={<SellProduct />}/>
      </Routes>


      <Footer />
    </div>

  );
}

export default App;
