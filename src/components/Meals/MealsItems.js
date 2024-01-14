import MealItemForm from "./MealItemForm";
import styles from "./MealsItems.module.css"

const MealsItems = props => {

    const price = `$${props.price.toFixed(2)}`;

    const 
    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div><MealItemForm /></div>
        </li>

    )

};

export default MealsItems;