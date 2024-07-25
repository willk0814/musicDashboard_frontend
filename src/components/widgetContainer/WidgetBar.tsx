import FavoriteAlbum from "./widgets/FavoriteAlbum";
import FavoriteArtist from "./widgets/FavoriteArtist";
import FavoriteSong from "./widgets/FavoriteSong";
import ListeningStats from "./widgets/ListeningStats";

export default function WidgetBar() {
    return (
        <div className="flex flex-row w-[95vw] justify-center border-2 rounded-md border-green-900 p-2">
            <FavoriteArtist />
            <FavoriteAlbum />
            <FavoriteSong />
            <ListeningStats />
        </div>
    )
}
