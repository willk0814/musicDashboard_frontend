import { useState, useEffect } from 'react'
import { RiAlbumFill } from "react-icons/ri";


interface Album {
    album: string;
    albumId: string;
    listens: number;
    imgURL: string;
};

export default function TopAlbumWidget() {

    const [data, setData] = useState<Album | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

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
                    setError(err.message);
                } else {
                    setError('An unexpected error occurred');
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='bg-green-900 rounded-lg m-2 p-2 flex flex-col'>
            <div className='w-full flex flex-row space-x-1 justify-end items-center'>
                <h1>Album</h1>
                <RiAlbumFill size={35} />
            </div>
            <div className='flex flex-row space-x-1'>
                <img
                    className='w-[65px] h-[65px] rounded-lg'
                    src={data?.imgURL} />

                <div className='flex items-center overflow-hidden'>
                    <h1
                        className='line-clamp-2 text-sm'>
                        {loading && 'Loading...'}
                        {error && 'Error'}
                        {data !== null && data.album}
                    </h1>
                </div>
            </div>

        </div>
    )
}
