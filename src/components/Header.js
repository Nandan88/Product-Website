import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../App.css';


// function Header({count}) {  //props  liye 2 ways ya toh names aur ya props word direct use karlo
  function Header(props) {
  return (
    <div className='flex shopping-cart'>
        {/* <div> <Link className='headtxt' to="/" > Product Shopping </Link> </div>
        <div> <Link className='headtxt' to="/cart"> Cart   */}
            {/* Numbers ko show krne k liye sup */}
                {/* <sup>{props.count}</sup> 
            </Link>
        </div> */}


        <div onClick={()=>props.handleShow(false)}>Product Shopping</div>
        <div> <a className='headtxt headmid'  href='/'>Home</a>
            <a className='headtxt headmid'  href='/about'> About </a>
         <a className='headtxt'  href='/contact'> Contact Us </a></div>
        <div onClick={()=>props.handleShow(true)}> Cart  
            {/* Numbers ko show krne k liye sup */}
                <sup>{props.count}</sup> 
        </div>
    </div>
  );
}

export default Header;
