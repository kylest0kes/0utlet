import React from 'react';
// import logo from '../../images/logo.png';
import './style.css'

export default function PostModal(props) {
    const modalStyle = {
        display: props.displayModal ? 'block' : 'none'
    }

    function closeModal(e) {
        e.stopPropagation()
        props.closeModal()
     }

    return (
        <div className="post-modal">
            <div className="post-modal-content" onClick={ e => e.stopPropagation() } style={modalStyle}>
                <span className="close" onClick={ closeModal }>&times;</span>
            </div>
        </div>
    )
}
