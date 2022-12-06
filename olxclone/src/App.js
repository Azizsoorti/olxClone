import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import Category from './components/Category/Category';
import Footer from './components/Footer/Footer';

function App() {
  return (

    <div className='mt-0'>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Category />} />


        </Route>
      </Routes>


      <Footer />
    </div>

  );
}

export default App;
