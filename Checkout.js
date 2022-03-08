import React from 'react';
import "./Checkout.css"; 
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
  const [ {basket}, dispatch] = useStateValue();

  return (
    <div ClassName= "checkout">
        <div className='title'>
            <h1>Your Shopping Basket</h1>
            {basket.map(item => (
              <CheckoutProduct 
                id= {item.id}
                title= {item.title}
                image= {item.image}
                price= {item.price}
                rating= {item.rating}
              />
            ))}
        </div>
        
          <Subtotal />
        
    </div>
  )
}

export default Checkout;