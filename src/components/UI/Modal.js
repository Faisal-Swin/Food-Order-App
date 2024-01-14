import { Fragment } from "react";
import styles from "./Modal.module.css";
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClick}></div>

};

const ModalOverlays = props =>{
    return <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>

};

const portalElement = document.getElementById("overlays");

const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop  onClick={props.onClick}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElement )}
        </Fragment>

    );

};

export default Modal;