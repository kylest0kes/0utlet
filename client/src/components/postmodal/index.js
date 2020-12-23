import React from 'react';
// import logo from '../../images/logo.png';
import './style.css'

export default function PostModal(props) {
    const modalStyle = {
        display: props.displayModal ? 'block' : 'none'
    }

    let postModal = (
        <div className="post-modal">
            <div className="post-modal-content" onClick={ e => e.stopPropagation() } style={modalStyle}>
                <span className="close" onClick={ closeModal }>&times;</span>
            </div>
        </div>
    )

    function closeModal(e) {
        e.stopPropagation()
        props.closeModal()
     }

    return (
        props.displayModal ? postModal : null 
    )
}
