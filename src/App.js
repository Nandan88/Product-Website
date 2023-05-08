import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import About from './components/About';
import ContactUs from './components/ContactUs';
import './App.css';
import { useState } from 'react';
import lp from './img/laptopimg.png';
import lp2 from './img/desktopimg.jpg';
import lp3 from './img/keymouimg.jpg';
import lp4 from './img/mac.jpg';
import lp5 from './img/speakerimg.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {

  const [product, setProduct]=useState([
    {
      url: lp,
      name: 'Dell G20',
      category: 'Laptop',
      seller: 'Dell Indore',
      price: 89000
  
    },
    {
      url: lp2,
      name: 'Assembled Dell CPU',
      category: 'Desktop',
      seller: 'Dell Indore',
      price: 35000
  
    },
    {
      url: lp3,
      name: 'Keyboard Mouse',
      category: 'Peripheral',
      seller: 'FM',
      price: 5000
  
    },
    {
      url: lp4,
      name: 'Mac',
      category: 'PC',
      seller: 'Apple',
      price: 75000
  
    },
    {
      url: lp5,
      name: 'HM50',
      category: 'Speaker',
      seller: 'Harman Kardon',
      price: 22000
  
    }
  ])
  const [cart,setCart]=useState([])
  const [showCart,setShowCart]= useState(false)

  const addToCart=(data)=>{
    
    // ... ka meaning hai puarane object toh already hai hi comma laga ke new object daal diya
    setCart([...cart,{ ...data, quantity : 1}]) 
  }


  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Router>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>
        <Switch>
        <Route exact path="/" render={() => {
            return (
            <>
              {showCart ?
              <CartList cart={cart}></CartList> :
              <ProductList product={product} addToCart={addToCart}></ProductList>
        }
            </>);
          }} >
      
      </Route>
     
      <Route exact path='/about'>
      <About/>
       </Route>  
        
      <Route exact path="/contact">
        <ContactUs/>
      </Route>
      </Switch>

    </Router>
    </div>
  );
}

export default App;
