import { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCardButton.module.css";
import CartIcon from "./CartIcon";


const HeaderCardButton = (props) => {

    const cartCtx = useContext(CartContext);
    const numOfItems= cartCtx.items.reduce((curNum, item)=> { return (curNum + item.amount)}, 0)
    return (
        <button className = {styles.button} onClick={props.onClick}>
            <span className={styles.icon}> <CartIcon /> </span>
            <span>Button</span>
            <span className={styles.badge}>{numOfItems}</span>
        </button>
    );
}

export default HeaderCardButton;