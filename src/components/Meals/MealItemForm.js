import { useRef, useState } from "react";
import Input from "../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = (event)=> {
            event.preventDefault();
            const enteredAmount = amountInputRef.current.value;
            const enteredAmountNumber= +enteredAmount;
            if ( enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmount >5) {
                    setAmountIsValid(false);
                    return;
            }
            props.onAddToCart(enteredAmountNumber);

    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input  ref={amountInputRef} label="Amount" input={{id: 'amount', type:'number', min:'1', step:'1', defaultValue:'1'} }/>
            <button> +Add</button>
            {!setAmountIsValid && <p>Please enter a valid amount</p>}
        </form>

    )
};

export default MealItemForm;