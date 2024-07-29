import { useState, useEffect } from 'react';

// Define interface for listening stats
interface ListeningStats {
    totalListeningTime: {
        minutes: number;
    }
};

export default function ListeningStats() {

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
                const result: ListeningStats = await response.json();
                // console.log(result.totalListeningTime.minutes)
                setData(result.totalListeningTime.minutes)
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

        // call above defined function
        fetchData();
    }, [])
    return (
        <div className="w-[200px] h-[200px] rounded-md bg-green-900 m-1 p-1 flex flex-col justify-between">
            <h1>Stats</h1>

            <div className='flex flex-col'>
                {loading && <p>Loading...</p>}
                {error && <p>Error</p>}
                {data != null &&
                    <>
                        <h1 className='text-4xl'>{data}</h1>
                        <h1>minutes</h1>
                    </>}
            </div>
        </div>
    )
}
