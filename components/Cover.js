import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Image from 'next/image';

export default function Cover({ info }) {
    const IMAGES_PATH = process.env.IMAGES_PATH;
    const {name, id, cover} = info;

    //Figure out how to generate link for each cover
    return (
        <div>
            <div className={styles.cover}>
                <Image // API_URL not working when passed as prop but regular string works fine
                    src={IMAGES_PATH + cover.url}
                    alt={name + " cover"}
                    layout={"fill"}
                    />
            </div>
            <p>{name}</p>
        </div>
    );
}