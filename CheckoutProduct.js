import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
import star from "./photos/star.png";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <div className='checkoutProduct__image'>
            <img src={image} />
            </div>

            <div className='checkoutProduct__info'>
                <strong className='checkoutProduct__title'>{title}</strong>
                <p className="checkoutProduct__price">
                    <strong>ZMK</strong>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <img className='star' src={star } alt= "" /> 
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct