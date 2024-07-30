import { useState, useEffect } from 'react';

interface Stats {
    totalListeningTime: {
        minutes: number;
    }
}

export default function ListeningStatsWidget() {

    const [data, setData] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.willkoenig.info/api/listening-stats');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const results: Stats = await response.json();
                setData(results.totalListeningTime.minutes);
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
        <div className='bg-green-900 rounded-lg m-2 p-2 flex flex-row items-center space-x-2'>
            {loading && 'Loading...'}
            {error && 'Error'}
            {data !== null &&
                <>
                    <h1 className='text-3xl'>{data}</h1>
                    <h1 className='text-lg'>minutes</h1>
                </>}
        </div>
    )
}
