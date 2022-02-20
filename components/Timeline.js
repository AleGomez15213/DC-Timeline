import styles from '../styles/Home.module.css';
import Cover from './Cover';

export default function Timeline({ events }) {
    return (
        <div className={styles.timeline}>
            {events && events.map((event, id) =>
                <div key={id}>
                    <a href={`/timeline/${event.slug}`}>
                        <Cover info={event} />
                    </a>
                </div>
            )}
            <div className={styles.emptySpace} />
        </div>
    );
}