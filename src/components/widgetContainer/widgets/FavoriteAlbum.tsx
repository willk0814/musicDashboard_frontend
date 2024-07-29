import { useState, useEffect } from 'react';

interface Album {
    album: string;
    albumId: string;
    listens: number;
    imgURL: string;
}

export default function FavoriteAlbum() {

    const [data, setData] = useState<Album | null>(null);
    const [loading, setLoading] = useState<boolean>();
    const [error, setError] = useState<string | null>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.willkoenig.info/api/top-album');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const results: Album = await response.json();
                setData(results);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message)
                } else {
                    setError('An unexpected error ocurred');
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [])

    return (
        <div className="w-[200px] h-[200px] rounded-md bg-green-900 m-1 p-1">
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error encountered</h1>}
            {data !== null &&
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex w-full justify-end'>
                        <img
                            className='rounded-md h-[100px] w-[100px]'
                            src={data.imgURL} />
                    </div>
                    <div>
                        <h1 className='text-md flex-nowrap'>{data.album}</h1>
                        <h1>{data.listens} Listens</h1>
                    </div>
                </div>}
        </div>
    )
}
