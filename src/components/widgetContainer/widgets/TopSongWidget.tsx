import { useState, useEffect } from 'react';
import { CiMusicNote1 } from "react-icons/ci";


interface Song {
    song: string;
    trackId: string;
    listens: number;
    imgURL: string;
};

export default function TopSongWidget() {

    const [data, setData] = useState<Song | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.willkoenig.info/api/top-song');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const results: Song = await response.json();
                setData(results)
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
    }, [])

    return (
        <div className='bg-green-900 rounded-lg m-2 p-2 flex flex-col'>
            <div className='w-full flex flex-row space-x-1 justify-end items-center'>
                <h1>Song</h1>
                <CiMusicNote1 size={35} />
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
                        {data !== null && data.song}
                    </h1>
                </div>
            </div>
        </div>
    )
}
