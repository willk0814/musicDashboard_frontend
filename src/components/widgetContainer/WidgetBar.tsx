import '../../index.css'
import ListeningStatsWidget from './widgets/ListeningStatsWidget'
import TopAlbumWidget from './widgets/TopAlbumWidget'
import TopArtistWidget from './widgets/TopArtistWidget'
import TopSongWidget from './widgets/TopSongWidget'

export default function WidgetBar() {
    return (
        <div className="max-w-[95vw] widgetGridContainer">
            <TopSongWidget />
            <TopAlbumWidget />
            <TopArtistWidget />
            <ListeningStatsWidget />
        </div>
    )
}
