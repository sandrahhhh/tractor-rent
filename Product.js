import React from 'react';
import "./Product.css"
import star from "./photos/star.png";
import {useStateValue} from "./StateProvider";


function Product({id, title, rating, price, image}) {
  const [ {basket}, dispatch] = useStateValue();

  console.log("this is the basket", basket );

  const addToBasket = () => {
    //THIS DISPACHES AN ITEM INTO THE DATA LAYER AFTER CLICKING ADD TO BASKET
    dispatch({
      type: "ADD_TO_BASKET",
        item: {
         id: id,
         title: title,
         image: image,
         rating: rating,
         price: price,

        },
    });
  };

  return (
    <div className='product'>
        <img src= {image} alt='' />
        <div className='product_info'>
            <strong> {title} </strong>
            <p className= "product_price">
                <strong> ZMK </strong>
                <strong>{price }/day</strong>
                <div className='product_rating'>
                  {Array(rating).fill().map((_, i) => (<img className='star' src={star } alt= "" /> ))}
                </div>
            </p>
            <button className= "product_button" onClick={addToBasket}>Purchase on Hire</button>
             
        </div>
    </div>
    
  )
}


export default Product;