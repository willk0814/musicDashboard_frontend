import { useState, useEffect } from 'react'
import axios from 'axios'
import RecentSong from './RecentSong';

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
                const response = await axios.get('https://api.willkoenig.info/api/recent-tracks');
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
                <div className='flex flex-col justify-start space-y-1 max-h-[400px] overflow-y-scroll'>
                    {recentSongs.map((song, indx) => (
                        <div>
                            <RecentSong key={indx} song={song} />
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}
