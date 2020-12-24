import React from 'react';


import './style.css'

export default function PostModalForm() {
    return (
        <div>
            <h1 style={{textAlign: "center", marginBottom: "15px"}}>Create Post</h1>
            <input className="post-title" placeholder="Title"></input>
            <hr />
            <textarea className="post-body" placeholder="Text (optional)"></textarea>
            <br />
            <button class="button button-rounded-hover">Post</button>
        </div>
    )
}
