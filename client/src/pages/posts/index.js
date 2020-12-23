import React, { Component } from 'react';
import NavBar from '../../components/navbar';
import PostModal from '../../components/postmodal';
import Post from '../../components/post';
import logo from '../../images/logo.png';
import './style.css'

class Posts extends Component {
    state = {
        modal: false
    }

    selectModal = (info) => {
        this.setState({modal: !this.state.modal}) // true/false toggle
    }

    render() {
        return (
            <div className="posts-page">
                <NavBar />
                <button className="post-modal-btn" onClick={ this.selectModal }><img src={logo} alt="postbtn" /></button>
                <PostModal displayModal={this.state.modal} closeModal={this.selectModal} />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        )
    }
    
}

export default Posts