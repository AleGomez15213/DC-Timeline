import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.css'

export default function Cover({ info }) {
    const IMAGES_PATH = process.env.IMAGES_PATH;
    const {name, id, cover} = info;

    return (
        <div>
            <div className={styles.cover}>
                <Image
                    src={IMAGES_PATH + cover.url}
                    alt={name + " cover"}
                    layout={"fill"}
                />
            </div>
            <i className='rightArrow'/>
            <p>{name}</p>
        </div>
    );
}
