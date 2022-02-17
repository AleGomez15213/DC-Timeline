import Link from 'next/link';
import Image from 'next/image';

export default function Cover({ info }) {
    const API_URL = process.env.API_URL;
    const {name, id, cover} = info;
    /* Set up .env.local in project folder with this info:
    
    API_URL=http://localhost:1337/
    IMAGES_DOMAIN=localhost
    
    */
    return (
        <div>
            <div>
                <a>{name}</a>
                    <Image // API_URL not working when passed as prop but regular string works fine
                        src={API_URL + "uploads/batman_year_One_6fc218bc44.jpg"}
                        alt={name + " cover"}
                        width={500}
                        height={500}
                    />
            </div>
        </div>
    );
}