import { useState, useEffect } from 'react'

interface Artist {
    artist: string;
    artistId: string;
    listens: number;
    imgURL: string;
};

export default function TopArtistWidget() {

    const [data, setData] = useState<Artist | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.willkoenig.info/api/top-artist');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const results: Artist = await response.json();
                setData(results);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unexpected error has occurred');
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [])

    return (
        <div className='bg-green-900 rounded-lg m-2 p-2 flex flex-row space-x-1'>
            <img
                className='w-[65px] h-[65px] rounded-full'
                src={data?.imgURL} />

            <div className='flex items-center overflow-hidden'>
                <h1
                    className='line-clamp-2 text-sm'>
                    {loading && 'Loading...'}
                    {error && 'Error'}
                    {data !== null && data.artist}
                </h1>
            </div>
        </div>
    )
}
