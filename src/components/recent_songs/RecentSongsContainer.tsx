import { useState, useEffect } from 'react'
import axios from 'axios'

// Define the shape of the song data
interface Song {
    id: string;
    name: string;
    artists: string[];
    album: string;
    listened_at: string;
}

export default function RecentSongsContainer() {

    const [recentSongs, setRecentSongs] = useState<Song[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchRecentSongs = async () => {
            try {
                const response = await axios.get('http://18.215.149.105:3000/api/recent-tracks');
                console.log('Response data: ', response.data)
                setRecentSongs(response.data);
                setLoading(false);
            } catch (err) {
                setError(err as Error);
                setLoading(false);
            }
        }
        fetchRecentSongs();
    }, []);

    if (error) {
        return (
            <>
                <h1>Error</h1>
            </>
        )
    }

    return (
        <div className='flex w-[95vw] max-w-[800px] flex-col items-ceneter justify-start border-2 border-white rounded-md p-1'>

            <h1 className='text-3xl text-white'>Recent Songs</h1>
            {loading ? (
                <div>

                </div>
            ) : (
                <div className='flex flex-col justify-center space-y-1'>
                    {recentSongs.map((song, indx) => (
                        <div
                            key={indx}
                            className='flex flex-row bg-gray-800 rounded-md'>
                            <div className='flex-1'>
                                <h1>{song.name}</h1>
                            </div>
                            <div className='flex-1 flex flex-row space-x-2'>
                                {song.artists.map((artist, indx) => <h1 key={indx}>{artist}</h1>)}
                            </div>
                            <div className='flex-1'>
                                <h1>{song.album}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}
