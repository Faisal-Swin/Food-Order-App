import styles from "./Input.module.css";

const Input = (props, ref) => {
    return (
        <div className={styles.input}>
            <label htmlFor="props.input.id">{props.label}</label>
            <input {...props.input} ref = {ref}/>
        </div>
    );
};

export default Input;