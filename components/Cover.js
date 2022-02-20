import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.css'

export default function Cover({ info }) {
    const IMAGES_PATH = process.env.APP_DOMAIN;
    const {title, slug, image_url, identifier} = info;
    return (
        <div>
            <div className={styles.cover}>
                <Image
                    src={"/../public/Images/" + chooseCover(identifier)}
                    alt={title + " cover"}
                    layout={"fill"}
                />
            </div>
            <i className="rightArrow"/>
            <p>{title}</p>
        </div>
    );
}

function chooseCover(id) {
    const covers = ['batmanYearOne.jpg', 'batmanCourtOfOwls.jpg', 'batmanZeroYear.jpg'];
    return covers[id];
}