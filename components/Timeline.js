import styles from '../styles/Home.module.css';
import Cover from './Cover';

export default function Timeline({ events }) {
    console.log(events);
    return(
        <div className={styles.main}>
            <Cover />
        </div>
    );
}