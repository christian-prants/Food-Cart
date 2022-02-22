import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/cart-context';

import classes from './HeaderCart.module.css'

const HeaderButton = (props) => {
    const [btnBump, setBtnBump] = useState(false);

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const {items} = cartCtx;
    const btnClasses = `${classes.badge} ${btnBump ? classes.bump  : ''}`;

    useEffect(() => {
        if (items.length ===0) {
            return;
        }
        setBtnBump(true);

        const timer = setTimeout(() => {
            setBtnBump(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Seu Carrinho</span>
        <span className={btnClasses}>{numberOfCartItems}</span>
    </button>
}

export default HeaderButton;
