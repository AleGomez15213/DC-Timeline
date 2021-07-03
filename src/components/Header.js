import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import "./header.css"
import logo from '../images/logo-white.svg'
import anime from 'animejs/lib/anime.es.js'

function Header(props) {
    useEffect(() => {
        var textWrapper = document.querySelector(".currentPage");
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        var pageText = anime.timeline();
        pageText
        .add({
            targets: '.currentPage .letter',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 500 + 30 * i
          })

    }, []);

    return(
        <div className="header">
            <Link to="/">
                <img src={logo} className="logo" alt="Logo"/>
            </Link>
            <div className="verticalLine"/>
            <h1 className="currentPage">{props.page}</h1>
        </div>
    );
}



export default Header