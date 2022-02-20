import styles from '../../styles/Home.module.css'
import Timeline from '../../components/Timeline'
import clientPromise from '../../lib/mongodb';

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    };
}

export async function getStaticProps({ params }) {
    let data = null;
    let event = null;
    const domain = process.env.APP_DOMAIN;

    // calls full list
    const client = await clientPromise;
    const db = client.db("strapi-atlas");
    const response = await db.collection("events").find({}).toArray();
    const events = JSON.parse(JSON.stringify(response));

    // passes single event
    try {
        data = await fetch(`${domain}/api/eventDetails?slug=${params.id}`);
        event = await data.json();
    } catch (err) {};
   
    return {
        props: { event, events },
        revalidate: 1,
    };
}

export default function EventDetails({ event, events }) {
    if (event)
    {
        return (
            <div className={styles.eventPage}>
                <div className={styles.container}>
                    <div className={styles.title}><h7>{event.title}</h7></div>
                    <hr />
                    {event && (
                        <>
                        <div className={styles.content}><p>{event.content}</p></div>
                        </>
                    )}
                </div>
                <div className={styles.timeline}>
                        <Timeline events={events}/>
                </div>
            </div>
        );
    }
    else { return <div></div>}
    
}