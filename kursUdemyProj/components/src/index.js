import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from "./ApprovalCard";
import './style/App.css';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetails
                    img={faker.image.image()}
                    author="Marek"
                    comment="Bez sensu"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails
                    img={faker.image.image()}
                    author="Karol"
                    comment="Słabe!!!!1"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails
                    img={faker.image.image()}
                    author="Witek"
                    comment="mi sie podoba"/>
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));