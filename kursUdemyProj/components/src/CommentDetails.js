import React from 'react';
import faker from 'faker';
import RandomTime from "./RandomTime";


const CommentDetails = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={props.img} alt="avatar" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author};
                </a>
                <div className="metadata">
                    <span className="date">
                        <RandomTime />
                    </span>
                </div>
                <div className="text">
                    {props.comment}
                </div>
            </div>
        </div>
    )
}

export default CommentDetails;