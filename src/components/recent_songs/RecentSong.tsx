// Define the shape of the song data
interface Song {
    id: string;
    name: string;
    artists: string[];
    album: string;
    listened_at: string;
}

interface RecentSongProps {
    song: Song;
}

export default function RecentSong({ song }: RecentSongProps) {
    return (
        <div className="flex flex-row w-full bg-gray-800 rounded-md items-center space-x-2 p-2">

            {/* Album Cover */}
            <div className="w-[50px] h-[50px] bg-gray-900 rounded-md"></div>

            {/* Name & Artist */}
            <div className="flex flex-col items-start">
                <h1 className="text-md">{song.name}</h1>

                <div className="flex flex-row">
                    {song.artists.map((artist, indx) => (
                        <h1
                            key={indx}
                            className="text-xs">
                            {indx === 0 ? artist : `, ${artist}`}
                        </h1>
                    ))}
                    <h1 className="text-xs mx-1">•</h1>
                    <h1 className="text-xs">{song.album}</h1>
                </div>

            </div>

            {/* Listened At */}
        </div>
    )
}
