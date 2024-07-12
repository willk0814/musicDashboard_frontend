import './App.css'
import RecentSongsContainer from './components/recent_songs/RecentSongsContainer';

function App() {

  return (
    <div className='flex flex-col w-[100vw] h-[100vh] px-[2.5vw] items-center justify-start bg-[#121212] py-4 space-y-2'>

      {/* title container */}
      <div className='border-2 border-white rounded-md w-[95vw] max-w-[500px] flex items-start p-1'>
        <h1 className='text-5xl font-semibold text-[#E8E8E8]'>Will's Music</h1>
      </div>

      {/* info container */}
      <div className='border-2 border-white rounded-md w-[95vw] max-w-[500px] flex p-1'>
        <h1 className='text-wrap text-md'>I wanted a nice way to see all the music that I was listening too so here it is.  Enjoy!  If you want to see any of the code you can use the links below</h1>
      </div>

      {/* links container */}
      <div className='flex flex-row border-white border-2 rounded-md w-[95vw] max-w-[500px] p-1 space-x-1'>
        <a
          className='flex-1 bg-gray-500 flex items-center justify-center rounded-md cursor-pointer'>
          Back End
        </a>
        <a
          className='flex-1 bg-gray-500 flex items-center justify-center rounded-md cursor-pointer'>
          Front End
        </a>
        <a
          className='flex-1 bg-gray-500 flex items-center justify-center rounded-md cursor-pointer'>
          Write Up
        </a>
      </div>

      {/* Recent Songs */}
      <RecentSongsContainer />


    </div>
  )
}

export default App;
