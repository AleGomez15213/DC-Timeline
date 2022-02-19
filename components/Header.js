import { useEffect } from "react";
import anime from "animejs";
import Image from 'next/image'
import logo from '../public/logo-white.svg' 
import styles from '../styles/Home.module.css'

export default function Header(props) {
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
        <div className={styles.header}>
            <Image src={logo} alt="Logo" width={150} height={100} />
            <h1 className="currentPage">DC Timeline</h1>
        </div>
    );
}
