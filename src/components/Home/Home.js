import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import './Home.css';

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://rocky-fortress-55251.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, []);
    return (
        <div className="container home-style">
                {
                    events.map(event => <Event key={event._id} event={event}></Event>)
                }
        </div>
    );
};

export default Home;