import './App.css';
import Meme from './Meme';
import {useEffect, useState} from 'react'

function App() {
  const [memeIndex, setMemeIndex] = useState(false)
  const [memes, setMemes] = useState([])

  async function loadMemePicIUrls() {
    const response = await fetch( "https://api.imgflip.com/get_memes" )
    const result = await response.json()
    console.log(result.data)
    const randomIndex = Math.floor(Math.random() * result.data.memes.length)
    console.log(result.data.memes[randomIndex])
    setMemeIndex(randomIndex)
    setMemes(result.data.memes)
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
      <Meme meme={memes[memeIndex]} />
      <button onClick={navigatePrevious}>Previous</button>
      <button onClick={navigateNext}>Next</button>
    </div>

  );
}

export default App;
