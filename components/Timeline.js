import styles from '../styles/Home.module.css';
import Cover from './Cover';

export default function Timeline({ events }) {
    return(
        <div className={styles.timeline}>
        {events.map((event, id) =>
            <div key={id}>
                <a href={`/timeline/${id + 1}`}>
                    <Cover info={event}/>
                </a>
            </div>
        )}
        </div>
    );
}