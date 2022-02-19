import Header from './Header'
import styles from '../styles/Home.module.css'

export default function Layout({ children }) {
    return (
        <div>
            <Header/>
            <div>{children}</div>
        </div>
    );
}