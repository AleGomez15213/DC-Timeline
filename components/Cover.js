import Link from 'next/link';

export default function Cover({ covers }) {
    const {name, id, content, cover} = events;
    return (
        <div>This is a test</div>
    );
    return (
        <div>
            {covers[id].name}
            <Link href={'/timeline/' + id}>
                <a>Post</a>
            </Link>
        </div>
    );
}