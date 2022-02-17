import Header from './Header'
import styles from '../styles/Home.module.css'

export default function Layout({ children }) {
    return (
        <div>
            <Header/>
            <div>{children}</div>
            <footer className={styles.footer}>Copyright © 2021 | Made by Alejandro Gomez</footer>
        </div>
    );
}