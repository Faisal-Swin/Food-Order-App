import { Fragment } from "react";
import mealImg from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCardButton from "../UI/HeaderCardButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCardButton onClick={props.onClick}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealImg} alt="Meals" />
      </div>
    </Fragment>
  );
};

export default Header;
