import React from 'react';
import "./Home.css";
import Product from './Product';
import { Link } from 'react-router-dom'

function Production() {
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
          <Product title= "Drosky Hammermill"
          price= {677}
          image= "https://www.sarozambia.com/wp-content/uploads/2021/11/HAMMERMILL-COMPLETE-DROTSKY-M16A-22KW-WITH-STARTER.jpg"
          rating={5}
          id= "1"
          />

          <Product title= "Oil Mill/Filter"
          price= {500}
          image= "http://ayokos.com/vs/saro/wp-content/uploads/2021/09/OIL-MILL-6YL-68-WITH-DIESEL-ENGINE-S195WP.jpg"
          rating={5}
          id="2"
          />

          <Product title= "Dehullers Rice"
         price= {270}
         image= "http://ayokos.com/vs/saro/wp-content/uploads/2021/09/DEHULLER-RICEMILL-COMBINE-SB30-C-W-TV2-DIESEL-ENGINE-Landing.jpg"
         rating={5}
         id="3"
         />

         <Product title= "peanut machine"
         price= {230}
         image= "http://ayokos.com/vs/saro/wp-content/uploads/2021/09/PEANUT-BUTTER-MAKING-MACHINE-ELECTRIC.jpg"
         rating={5}
         id="4"
         />
        
         <Product title= "Dehullers Maize"
         price= {852}
         image= "http://ayokos.com/vs/saro/wp-content/uploads/2021/09/DEHULLER-NAVIN-WITH-BLOWER-FAN-WITH-DIESEL-ENGINE-TV2-Landing.jpg"
         rating={5}
         id="5"
         />
        
        </div>

        <div className= "home_row">
        <Product title= "Hammermills Complete Gravity (25 HP - Electric)"
        price= {3000}
        image= "https://www.sarozambia.com/wp-content/uploads/2021/11/HAMMERMILL-COMPLETE-GRAVITY-TV2-ENGINE.jpg"
        rating={5}
        id="6"
        />

        <Product title= "Hammermill Mini 9FC21 - 170F Engine"
        price= {1900}
        image= "https://www.sarozambia.com/wp-content/uploads/2021/11/Engine-Hammer-Mill-Domestic-.jpg"
        rating={5}
        id="7"
        />

       <Product title= "Feed Mixer"
        price= {1000}
        image= "https://www.sarozambia.com/wp-content/uploads/2021/11/LIVESTOCK.jpg"
        rating={5}
        id="8"
        />
        

        <Product title= "Chaff/Forages"
        price= {2500}
        image= "https://www.sarozambia.com/wp-content/uploads/2021/11/CHAFF-CUTTER-AMAR-POWER-SLIDING-SHEET-TYPE.jpg"
        rating={5}
        id="9"
        />

        <Product title= "Pelleting Machines"
        price= {250}
        image= "https://www.sarozambia.com/wp-content/uploads/2021/11/Feed-Pellet-Machine-1.jpg"
        rating={5}
        id="10"
        />
        </div>

        <div className= "home_row">
       <Product title= "Blue generator"
        price= {800}
        image= "https://www.sarozambia.com/wp-content/uploads/2021/11/ENSETS.jpg"
        rating={5}
        id="11"
        />

        <Product title= "Sausage Stuffer"
        price= {780}
        image= "https://th.bing.com/th?id=OP.AR6TVrM8RMtI%2bw474C474&w=248&h=248&o=5&pid=21.1"
        rating={5}
        id="12"
        />

        <Product title= "Electronoc Sausage Stuffer"
        price= {2500}
        image= "https://th.bing.com/th?id=OP.Trddo1Y54J%2fLWg474C474&w=248&h=248&o=5&pid=21.1"
        rating={5}
        id="10"
        />

        <Product title= "meat sclicer"
        price= {840}
        image= "https://th.bing.com/th?id=OP.DPcd4vZms3uldw474C474&w=248&h=248&o=5&pid=21.1"
        rating={5}
        id="10"
        />

        <Product title= "Hot dog roller"
        price= {250}
        image= "https://th.bing.com/th?id=OP.B1hJcvSSBSbY2Q474C474&w=248&h=248&o=5&pid=21.1"
        rating={5}
        id="10"
        />
        </div>
        <div className= "home_row">
      
        </div>
        <div className= "home_row">
        </div>
        <footer className='slider2'>
          <Link to ="./Login"><button className= "home_signupBtn"type= "button">sign up</button></Link>
          <span>Sandra Masiwa:</span>
          <span>+260771647266 </span>
          <span>sandramasiwa1@gmail.com</span>
        </footer>
        
      </div>
    </div>
  </div>
  )
}

export default Production;