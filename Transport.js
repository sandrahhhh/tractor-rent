import React from 'react';
import "./Home.css";
import Product from './Product';
import { Link } from 'react-router-dom'

function Transport() {
  return (
    <div className='home'>

    <div className='home_container'>
      
      <div className='slider'>

      <div className='but'>
        <Link to ="./"><button className= "category_button" type= "button">plow & Tillage</button></Link>
        <Link to ="./Harvest"><button className= "category_button" type= "button">Harvesting</button></Link>
        <Link to ="./Transport"><button className= "category_button" type= "button">Transport</button></Link>
        <Link to ="./Production"><button className= "category_button1" type= "button">Food Processing</button></Link>
        </div>
      </div>

      <div className='row'>
        <div className= "home_row">
          <Product title= "Suzuku red motorcycle"
          price= {400}
          image= "https://www.sarozambia.com/wp-content/uploads/2021/11/SUZUKI.jpg"
          rating={5}
          id= "1"
          />

          <Product title= "Utility Trailer"
          price= {150}
          image= "https://www.sarozambia.com/wp-content/uploads/2021/11/1Tn-Utility-Trailer.jpg"
          rating={5}
          id="2"
          />

          <Product title= "6-foot refrigerated truck"
         price= {300}
         image= "https://deliveryconcepts.com/wp-content/uploads/2018/01/6-series-category-1010x590.png"
         rating={5}
         id="3"
         />

         <Product title= "Iced refridgerated truck"
         price= {1600}
         image= "https://th.bing.com/th?id=OP.vuP%2bvGEo%2bjj0vw474C474&w=300&h=300&o=5&dpr=1.5&pid=21.1"
         rating={5}
         id="4"
         />
        
         <Product title= "KING Refridgerated unit"
         price= {2500}
         image= "https://th.bing.com/th?id=OP.17%2fBwqvLD7IVmg474C474&w=300&h=300&o=5&dpr=1.5&pid=21.1"
         rating={5}
         id="5"
         />
        
        </div>

        <div className= "home_row">
        <Product title= "Enclosed Trailer 7X16  "
        price= {700}
        image= "https://th.bing.com/th?id=OP.MeuiG15xRvWzBg474C474&w=236&h=236&dpr=1.5&pid=21.1"
        rating={3}
        id="6"
        />

        <Product title= "Carry On Trailer"
        price= {190}
        image= "https://th.bing.com/th?id=OP.Hwvd%2fFUAR5Jlrw474C474&w=236&h=236&dpr=1.5&pid=21.1"
        rating={5}
        id="7"
        />

       <Product title= "Reese portable Tow power"
        price= {900.40}
        image= "https://th.bing.com/th?id=OP.Av5QnV8egXDCog474C474&w=236&h=247&dpr=1.5&pid=21.1"
        rating={5}
        id="8"
        />
        

        <Product title= "black 10 ton tipper"
        price= {500}
        image= "https://th.bing.com/th?id=OP.8O6wkfZZy8CBJQ474C474&w=248&h=248&o=5&pid=21.1"
        rating={5}
        id="9"
        />

        <Product title= "Tipper Trailer"
        price= {689.90}
        image= "https://th.bing.com/th?id=OP.8WgLFUX3n5ZMNg474C474&w=248&h=248&o=5&pid=21.1"
        rating={5}
        id="10"
        />
        </div>

        <div className= "home_row">
       <Product title= "Farm Pick up truck"
        price= {300}
        image= "https://th.bing.com/th?id=OP.nFHuzB%2fTUNlEOg474C474&w=248&h=248&o=5&pid=21.1"
        rating={5}
        id="11"
        />

        <Product title= "Cattle transportation Truck"
        price= {1250}
        image= "https://m.media-amazon.com/images/I/71L7CbR6prL._AC_UL320_.jpg"
        rating={4}
        id="12"
        />

        <Product title= "FlatBed Farm Truck"
        price= {900}
        image= "https://m.media-amazon.com/images/I/81gw2yU350L._AC_UL320_.jpg"
        rating={4}
        id="10"
        />

        <Product title= "Cooler Box"
        price= {250}
        image= "https://th.bing.com/th?id=OP.sDzcP7Yt00033A474C474&w=248&h=248&o=5&pid=21.1"
        rating={5}
        id="10"
        />

        <Product title= "Red pick up truck"
        price= {250}
        image= "https://th.bing.com/th?id=OP.AcUZXFjWjC5tAQ474C474&w=248&h=248&o=5&pid=21.1"
        rating={5}
        id="10"
        />
        </div>
        <div className= "home_row">
      
        </div>
        <div className= "home_row">
        </div>
        <div className='slider2'>
          <Link to ="./Login"><button className= "home_signupBtn"type= "button">sign up</button></Link>
          <span>Sandra Masiwa:</span>
          <span>+260771647266 </span>
          <span>sandramasiwa1@gmail.com</span>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Transport;