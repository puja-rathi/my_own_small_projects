// import './App.css';
//import bootstrap.css, custom css and other components
import 'bootstrap/dist/css/bootstrap.min.css';
import './customcss/store_css.css';
import {Routes,Route} from 'react-router-dom';
import {useState} from 'react';
import Header from './components/header';
import Home from './components/home';
import Products from './components/products';
import About from './components/aboutus';
import TotalPrice from './components/totalprice';

// App function to render Header in all pages and in Routes component, render all other component based on url
function App() {

  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalPrice = (price) => {
        setTotalPrice(prevPrice => prevPrice + price);
    };


  return (
    <div>
      <Header />
      <TotalPrice totalPrice={totalPrice} />

      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products updateTotalPrice={updateTotalPrice}/>}></Route>
        <Route path='/aboutus' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
