import './App.css';
import Meme from './Meme';
import {useEffect, useState} from 'react'
import Navigation from './Navigation';

function App() {
  const [memeIndex, setMemeIndex] = useState(false)
  const [memes, setMemes] = useState([])
  const [page, setPage] = useState(0)
  const pageSize = 10
  const [lastPage, setLastPage] = useState(0)

  async function loadMemePicIUrls() {
    const response = await fetch( "https://api.imgflip.com/get_memes" )
    const result = await response.json()
    console.log(result.data)
    //const randomIndex = Math.floor(Math.random() * result.data.memes.length)
    const randomIndex = 0
    console.log(result.data.memes[randomIndex])
    setMemeIndex(randomIndex)
    setMemes(result.data.memes)
    setLastPage(Math.floor((memes.length-1) / pageSize))
  }

  useEffect(() => {
    loadMemePicIUrls()
  }, []) 

  function navigatePrevious() {
    if (memeIndex > 0)  {
      setMemeIndex(memeIndex - 1)
    }
  }
  
  function navigateNext() {
    if (memeIndex < memes.length -1)  {
      setMemeIndex(memeIndex + 1)
    }
  }

  return (
    <div className="App">
      <h1>Create a Meme</h1>
      <div className="container">
        <div className="leftPane">
          <div className='pageNavigation'>
          <div
            onClick={() => {
              if (page > 0) {
                setPage(page - 1)
              }
            }}
          >
            {'<<'}
          </div>
          <div>
            {page + 1} / {lastPage + 1}
          </div>
          <div onClick={() => {
            // last index is memes.length - 1
            if ( page < lastPage )
            setPage(page + 1)
          }}
          >
            &gt;&gt;
          </div>
          </div>
          <Navigation 
            memes={memes} 
            page={page}
            pageSize={pageSize}
          />
        </div>
        <div className="content">
          <Meme meme={memes[memeIndex]} />
          <button onClick={navigatePrevious}>Previous</button>
          <button onClick={navigateNext}>Next</button>
        </div>
      </div>

      
    </div>

  );
}

export default App;
