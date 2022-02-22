import { useRef, useState } from 'react';
import Input from '../../UI/Input';

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        } 

        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}> 
            <Input
                label='Qtde.' 
                ref={amountInputRef} 
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    step: '1',
                    defaultValue: '1'
                }} 
            />
            <button>adicionar</button>
            {!amountIsValid && <p>Por favor, selecione uma quantidade válida.</p>}
        </form>
    )
}

export default MealItemForm
