import React, { Component } from 'react';
import NavBar from '../../components/navbar';
import PostModal from '../../components/postmodal';
import Post from '../../components/post';

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
                <button>Test</button>
                {/* <PostModal /> */}
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