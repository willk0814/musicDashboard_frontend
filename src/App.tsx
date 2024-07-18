import './App.css'
import TitleContainer from './components/title/TitleContainer';
import RecentSongsContainer from './components/recent_songs/RecentSongsContainer';
import WidgetBar from './components/widgetBar/WidgetBar';


function App() {

  return (
    <div className='flex flex-col w-[100vw] h-[100vh] items-center justify-start bg-[#121212] space-y-2 py-2'>

      {/* Title Container */}
      <TitleContainer />

      {/* Widget grid */}
      <WidgetBar />

      {/* Recent Songs */}
      <RecentSongsContainer />


    </div>
  )
}

export default App;
