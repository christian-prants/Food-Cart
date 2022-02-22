import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import CartContext from '../../../Store/cart-context';

import classes from "./MealItem.module.css";

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `R$ ${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    } 

    return (
        <li className={classes.meal}>
           
                {/* <img src={require(`${props.src}`).default} alt={props.id} /> */}
                <img src={require('../../Assets/food_img/burrito.jpg').default} alt={props.id} />
       
            <div>
                <h3>{props.name}</h3>
                <div className={classes.desc}>{props.desc}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem
