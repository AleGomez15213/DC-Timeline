import Link from 'next/link';
import Image from 'next/image';

export default function Cover({ info }) {
    const {name, id, cover} = info;
    return (
        <div>
            <div>
                <a>{name}</a>
                    <Image
                        src={cover.url}
                        alt={name + " cover"}
                        width={500}
                        height={500}
                    />
            </div>
        </div>
    );
}