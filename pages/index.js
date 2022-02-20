import Link from 'next/link'
import clientPromise from '../lib/mongodb'
import styles from '../styles/Home.module.css'

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db("strapi-atlas");

  const data = await db.collection("events").find({}).toArray();
  const events = JSON.parse(JSON.stringify(data));

  return {
    props: { events },
  };
}
export default function Home({ events }) {
  const defaultEvent = events[0].slug;
  return (
    <div className={styles.main}>
      <h1 className={styles.text}>
          <q>Yes, Father.<br/>I Shall Become A Bat</q>
      </h1>
      <div className={styles.alignEndBox}>
        <p className={styles.thin}>- Bruce Wayne</p>
      </div>  
      <Link href={`/timeline/${defaultEvent}`}>
        <a className={styles.button}>Enter Timeline</a>
      </Link>
    </div>
  )
}
