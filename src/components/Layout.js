import React, { useEffect, useState } from 'react'
import fs from 'fs'
import Header from './Header'

import Markdown from 'react-markdown'
import postList from '../posts.json'

import './components.css'
import Timeline from './Timeline'

function Layout(props) {
    
    const title = postList[props.match.params.id].title
    const content = postList[props.match.params.id].content

    useEffect(() => {
        document.title = title
    });

    return(
        <div className="layout">
            <Header page="timeline"/>
            <div className="container">
                <div className="information">
                    <div className="infoBox">Info</div>
                    <Markdown className="title">{title}</Markdown>
                    <Markdown className="content">{content}</Markdown>
                </div>   
                <Timeline />
            </div>
       </div>
    );
}

export default Layout