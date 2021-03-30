import React from 'react';
import './Event.css';

const Event = (props) => {
    const { name, imageURL } = props.event;
    return (
        <div className="card event-style" style={{maxWidth: '20rem'}}>
            <img src={imageURL} className="card-img-top" alt="" />
                <div className="card-body">
                    <h4>{name}</h4>
                </div>
        </div>
    );
};

export default Event;