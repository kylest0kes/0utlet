import React from 'react';

import './style.css';

export default function Post() {
    return (
        <div className="wide-article-link">
            <div className="row">
                <div className="small-12 medium-9 columns">
                    <h3 className="article-title">Post Title</h3>
                    <p className="article-elipsis">Post body</p>
                    <p className="article-author"><em>by <a href="#">Author Username</a></em></p>
                    <div className="likes-area">
                        <button className="likes"><i class="far fa-thumbs-up"></i></button>
                        <p className="likes-tally" id="likes">4</p>
                        <button className="dislikes"><i class="far fa-thumbs-down"></i></button>
                        <p className="likes-tally" id="dislikes">2</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
