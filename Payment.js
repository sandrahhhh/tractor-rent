import React, { useState} from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { CardElement} from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import confirm from "./confirm";




function Payment() {
   const [{ basket, user }] = useStateValue();
   


   const [succeeded, ] = useState(false);
   const [processing, setProcessing] = useState("");
   const [error, setError] = useState(null);
   const [disabled, setDisabled] = useState(true);


   const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);
}


   const handleChange = event => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
}


    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        {basket?.length} items
                        )
                </h1>


                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
            
                </div>
                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* bank magic will go */}

                        <form onSubmit={handleSubmit} className ='space'>
                            <h2>Bank</h2>
                            <CardElement onChange={handleChange} />
                            <img className= "logo1" src='https://th.bing.com/th/id/OIP.p1-rKyJr9gmFsYl0wE9DHQHaCz?w=350&h=132&c=7&r=0&o=5&pid=1.7 ' alt= ""/>
                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>

                           
                        <form className="space1">
                        <h2>Airtel Money</h2>
                        <Link to= "/ApiPage">
                        <img className='logo2' src='https://th.bing.com/th/id/OIP.KJPMi5JzpbmEUHAlLDqxzwHaGS?w=201&h=180&c=7&r=0&o=5&pid=1.7' alt=""/>
                        </Link>
                        </form>
                              
                        <form className="space2">
                        <h2>MTN Money</h2>
                        <Link to= "/ApiPage">
                        <img className='logo3' src='https://th.bing.com/th/id/OIP.oTAttpM4vMfZGHFI27YWdAAAAA?pid=ImgDet&w=300&h=128&rs=1' alt=""/>
                        </Link>
                        </form>
                             
                        <form className="space2">
                        <h2>Zoona</h2>
                        <Link to= "/ApiPage">
                        <img className='logo3' src='https://th.bing.com/th/id/OIP.klGJw79aaGWKCEAlmO1OuQAAAA?w=251&h=90&c=7&r=0&o=5&pid=1.7' alt=""/>
                        </Link>
                        </form>
                </div>
            </div>

            <footer className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => (
                  <h3>Order Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"ZMK"}
                />

                <Link to= "/confirm">
                    <button className="btn" disabled={processing || disabled || succeeded}>
                        <span>{processing ? <p>Processing</p> :"Buy Now"  }</span>
                    </button>
                </Link> 
               
            </footer>
        </div>
    )
}

export default Payment;