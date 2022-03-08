
import tractor from './photos/tractor.png';
import { Link } from 'react-router-dom';
import SearchIcon  from '@material-ui/icons/Search';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import './Header.css';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"

function Header() {
  const [{ basket, user }]= useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (  
    <nav className='header'>
      <Link to ="./">
        <img className= "header_logo" src= {tractor} alt= "Tractor Rent"/>
        <h5 className='log'>Tractor Rent</h5>
      </Link>
      
        
      <div className='header_search'>
        <input type= "text" className='header_searchInput'/>
        <SearchIcon className= "header_searchIcon"/>
      </div>

      <div className='header_nav'>

        <Link to= {!user && "/Login"}>
          <div onClick={handleAuthentication} className='header_option'>
            <span><b>{user ? "Sign Out" : "Sign In"}</b></span>
          </div>
        </Link>
        
        <div className='header_option'>
          <span><b>Sell on Hire</b></span>
        </div>

        <Link to= "/Account">
        <div className='header_option'>
          <span><b>My Account</b></span>
        </div>
        </Link>

        <Link to="/Checkout">
          <div className='header_optionBasket'>
            <LocalGroceryStoreIcon/>
            <span><b>Cart</b></span>
            <span className='header_basketCount'> {basket?.length} </span>
          </div> 
        </Link>
      </div>
    </nav>
    
  )
}
 
export default Header;