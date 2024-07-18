import TopAlbum from "./favoritesWidgets/TopAlbum";
import TopArtist from "./favoritesWidgets/TopArtist";
import TopSong from "./favoritesWidgets/TopSong";
import ListeningStats from "./listeningStats/ListeningStats";

export default function WidgetBar() {
    return (
        <div className="flex flex-row">
            <TopSong />
            <TopArtist />
            <TopAlbum />
            <ListeningStats />
        </div>
    )
}
