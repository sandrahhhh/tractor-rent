import React, {useState} from 'react'
import "./Home.css"
import Product from './Product';
import { Link } from 'react-router-dom';
import truck from './photos/trac.jpg';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";
import Search from './Search';
import PeopleIcon from '@material-ui/icons/People';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';



function Home() {

  const  [showSearch, setShowSearch] =  useState(false);
  const [{ user }, dispatch]= useStateValue();

  const handleAuthentication = () => {
    if (user) { 
      auth.signOut();
    }
  }

  return (
    <div className='home'>

      <div className='home_container'>
        
        <header className='slider'>
          <div className='but'>
           <Link to ="./"><button className= "category_button" type= "button">plow & Tillage</button></Link>
           <Link to ="./Harvest"><button className= "category_button" type= "button">Harvesting</button></Link>
           <Link to ="./Transport"><button className= "category_button" type= "button">Transport</button></Link>
           <Link to ="./Production"><button className= "category_button1" type= "button">Food Processing</button></Link>
          </div>
        </header>
          
        <div className='row'>
       
       
       
       
       {showSearch && <Search />}
        <button onClick={() => setShowSearch(!showSearch)} className='date'> Select a Date </button>
        
          <div className= "home_row">
            <Product title= "AF Disc Plough"
            price= {800}
            image= "https://www.sarozambia.com/wp-content/uploads/2021/12/AF-Disc-Plough.jpg"
            rating={5}
            id= "1"
            />

            <Product title= "Farm tractor"
            price= {250}
            image= {truck}
            rating={5}
            id="2"
            />

            <Product title= "TACR Disc Plough "
           price= {500}
           image= "https://www.sarozambia.com/wp-content/uploads/2021/12/TACR-Disc-Plough-1.jpg"
           rating={5}
           id="3"
           />

           <Product title= "ASTH Plough Chisel"
           price= {250}
           image= "https://www.sarozambia.com/wp-content/uploads/2021/12/ASTH-Plough-Chisel.jpg"
           rating={2}
           id="4"
           />
          
           <Product title= "ARH Disc Plough"
           price= {250}
           image= "https://www.sarozambia.com/wp-content/uploads/2021/12/ARH-Disc-Plough.jpg"
           rating={5}
           id="5"
           />
          
          </div>

          <div className= "home_row">
          <Product title= "Farm tractor"
          price= {250}
          image= "https://media.gettyimages.com/photos/tractor-with-open-door-picture-id136630549?s=2048x2048"
          rating={5}
          id="6"
          />

          <Product title= "leaf blower"
          price= {250}
          image= "https://media.gettyimages.com/photos/snowblower-side-view-picture-id157308736?k=20&m=157308736&s=612x612&w=0&h=Y-FVlJGI65xZAB-vbBEsxXy6FQQjUIDhp9pJtaarWQA="
          rating={5}
          id="7"
          />

         <Product title= "Farm tractor"
          price= {50}
          image= "https://media.gettyimages.com/photos/tractor-picture-id171225232?k=20&m=171225232&s=612x612&w=0&h=PmiU5_LeMXAxC21Tx58wToOMfdlrXuRdmwfif0brwa0="
          rating={5}
          id="8"
          />
          

          <Product title= "Farm tractor"
          price= {5050}
          image= "https://media.gettyimages.com/photos/tractor-picture-id91922494?k=20&m=91922494&s=612x612&w=0&h=f0ZFoHQid2H-yUC3p1OGaLgnseZtd_omUsh1XXzx0-4="
          rating={5}
          id="9"
          />

          <Product title= "Farm tractor"
          price= {150}
          image= "https://media.gettyimages.com/photos/grain-farm-tractor-picture-id184385519?k=20&m=184385519&s=612x612&w=0&h=row2NsD6wSpH6AAxLWFJeddReT9wjyp193RYfIuwOWI="
          rating={5}
          id="10"
          />
          </div>

          <div className= "home_row">
         <Product title= "Escavator"
          price= {2850}
          image= "https://media.gettyimages.com/photos/plastic-front-loader-tractor-picture-id170024680?k=20&m=170024680&s=612x612&w=0&h=gw5bIrBRJnVKbT4LPYDwne17zsSIXPkkSoYD0ARMcTk="
          rating={5}
          id="11"
          />

          <Product title= "Escatator"
          price= {3050}
          image= "https://media.gettyimages.com/photos/loader-picture-id182714247?k=20&m=182714247&s=612x612&w=0&h=8MPPRpXOsq82chruVS47MV6lrlqOSrEiQDu4D_9CbpY="
          rating={5}
          id="12"
          />

          <Product title= "Farm tractor"
          price= {450}
          image= "https://media.gettyimages.com/photos/tractor-with-clipping-path-picture-id172182612?k=20&m=172182612&s=612x612&w=0&h=9fHsysKt16tlOrmZitcZ9ysnO8HmSMnnXqVDKICY92g="
          rating={5}
          id="10"
          />

          <Product title= "Farm farrower"
          price= {650}
          image= "https://www.sarozambia.com/wp-content/uploads/2021/11/Furrower.jpg"
          rating={5}
          id="10"
          />

          <Product title= "Farm tractor"
          price= {700}
          image= "https://th.bing.com/th/id/OIP.cZwLwToO94aBr6BKcrCgKgHaEJ?w=296&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          rating={5}
          id="10"
          />
          </div>
          <div className= "home_row">
        
          </div>
          <div className= "home_row">
          </div>
          <div className='slider2'>
            <Link to= {!user && "/Login"}><button onClick={handleAuthentication} className= "home_signupBtn"type= "button">{user ? "Sign Out" : "Sign In"}</button></Link>
            <span> <PeopleIcon className=' email'/>Sandra Masiwa:</span>
            <span> <CallIcon className=' email'/>+260771647266 </span>
            <span> <EmailIcon className='email'/>sandramasiwa1@gmail.com</span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home;


