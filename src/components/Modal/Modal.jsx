import React from "react";
import styles from "./modal.module.css"
import ReactDOM from 'react-dom';


const Content = ({children, onClose}) =>{
    return (
        <div className={styles.backdrop}> 
        <div className={styles.modal}>  
        <div>{children}</div>
        </div>
        </div>
    )
}



function Modal({onClose, children}) {
    return (
        <>
  { ReactDOM.createPortal(<Content onClose={onClose}>{children}</Content>, document.getElementById("modal"))}
  </>
    )
    
  }


  export default Modal