import Link from 'next/link'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const url = process.env.API_URL;
  const res = await fetch(url);
  const data = await res.json();

  return {
      props: { events: data }
  }
} 

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function Home({ events }) {
  const defaultEvent = events[0].id;

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
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
