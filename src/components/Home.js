import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../components/components.css'

function Home() {
    const url = "http://localhost:1337/events";
    const [event, setEvent] = useState(null);

    useEffect(() => {
        axios.get(url)
        .then(response => {
            JSON.stringify(response);
            setEvent(response.data);
        });
    }, []);

    if (event) {
        console.log("event found");
        return(
            <div>
                <h1>This event is: {event[0].slug}</h1>
            </div>
        );
    }

    return (
        <div></div>
    )
}

export default Home