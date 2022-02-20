import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.css'

export default function Cover({ info }) {
    const {title, identifier} = info;
    return (
        <div>
            <div className={styles.cover}>
                <Image
                    src={"/../public/Images/" + chooseCover(identifier)}
                    alt={title + " cover"}
                    layout={"fill"}
                />
            </div>
            <p>{title}</p>
        </div>
    );
}

function chooseCover(id) {
    const covers = ['batmanYearOne.jpg', 'batmanCourtOfOwls.jpg', 'batmanZeroYear.jpg'];
    return covers[id];
}