import { Component, useState } from "react";
import React from 'react';
import '../stylesheets/Btn.css';

export const Modal = ({showModal, setShowModal}) =>{
    return(
        <>{showModal? (<div></div>) : null}
        </>
        
    )
}






function ModalBtn (){
    
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }
    return(
        <div className = 'container'>
            <button id = 'ModalHelp' onClick = {openModal}>What is this?</button>
            <Modal showModal = {showModal}setShowModal={setShowModal} />
        </div>
    )   

}



export default ModalBtn;