import styles from '../../styles/Home.module.css'
import EventCover from '../../components//Cover'
import Timeline from '../../components/Timeline'

const url = process.env.API_URL;

// maps data to a list of IDs
export const getStaticPaths = async () => {
    const res = await fetch(url);
    const data = await res.json();

    const paths = data.map(event => {
        return {
            params: { id: event.id.toString()},
        }
    });

    return {
        paths,
        fallback: false,
        
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(url + '/'+ id);
    const data = await res.json();

    // gets full repsonse
    const repsonse = await fetch(url);
    const fullData = await repsonse.json();


    return {
        props: { event: data, eventList: fullData}
    }
  } 

export default function EventDetails({ event, eventList }) {
    return (
        <Timeline events={eventList}/>
    );
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{event.name}</h1>
                <p>{event.content}</p>
            </div>
            <div className={styles.timeline}>
                <Timeline events={eventList}/>
            </div>
        </div>
    );
}