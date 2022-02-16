import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router'
import axios from 'axios'
import Header from './Header'

import './components.css'
import Timeline from './Timeline'

function Layout(props) {
    const url = "http://localhost:1337/events";
    const [event, setEvent] = useState(null);
    
    const id = props.match.params.id;

    useEffect(() => {
        axios.get(url)
        .then(response => {
            JSON.stringify(response);
            setEvent(response.data);
        });
    }, []);
    
    if (event) {
        return(
            <div className="layout">
                <Header page="timeline"/>
                <div className="container">
                    <div className="information">
                        {/* Info Box */}
                        <ReactMarkdown className="title">{event[id].name}</ReactMarkdown>
                        <ReactMarkdown className="content">{event[id].content}</ReactMarkdown>
                    </div>   
                    
                </div>
            </div>
        );
    }

    return (
        <div></div>
    )
}

export default Layout