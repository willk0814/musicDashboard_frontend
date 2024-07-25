import { useState, useEffect } from 'react';

// individual track component
function Song() {
    return (
        <div className='w-full bg-green-900 rounded-lg p-2 space-x-2 flex flex-row'>
            <div className='w-[50px] h-[50px] bg-[#121212] rounded-md'></div>

            <div className='flex flex-col justify-between'>
                <h1 className='text-lg'>Song Title</h1>
                <div className='flex flex-row space-x-1'>
                    <h1 className='text-xs'>Artist</h1>
                    <h1 className='text-xs'>•</h1>
                    <h1 className='text-xs'>Album</h1>
                </div>
            </div>
        </div>
    )
}

interface Artist {
    name: string;
    id: string;
    _id: string
}

interface Track {
    _id: string;
    trackId: string;
    name: string;
    artists: Artist[];
    album: string;
    albumId: string;
    spotifyLink: string;
    playedAt: string;
    duration: number;
    __v: number;
};

// container functional component
export default function RecentSongsContainer() {

    const [data, setData] = useState<Track[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.willkoenig.info/api/recent-tracks');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result: Track[] = await response.json();
                setData(result)
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unexpected network error has occured')
                }
            } finally {
                setLoading(false);
            }
        };

        // call the above defined function
        fetchData();
    }, [])

    return (
        <div className="w-[95vw] border-2 rounded-md border-green-900 overflow-y-scroll p-2 space-y-1">
            {loading && <h1>Loading ...</h1>}
            {error && <h1>Error encountered</h1>}
            {data !== null &&
                <>
                    {data.map((song, indx) => {

                        return (
                            <Song
                                key={indx} />
                        )
                    })}
                </>}
        </div>
    )
}

