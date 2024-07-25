import './App.css'
import WidgetBar from './components/widgetContainer/WidgetBar';
import TitleContainer from './components/TitleContainer';
import RecentSongsContainer from './components/recentSongs/RecentSongsContainer';


function App() {

  return (
    <div className='flex flex-col w-[100vw] h-[100vh] items-center justify-start bg-[#121212] space-y-2 py-[5vh]'>

      {/* Title Container */}
      <TitleContainer />

      {/* Widget Bar */}
      <WidgetBar />

      {/* Recent Songs */}
      <RecentSongsContainer />

    </div>
  )
}

export default App;
