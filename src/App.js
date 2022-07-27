import './App.css';
import Meme from './Meme';
import {useEffect, useState} from 'react'

function App() {
  const [memeObj, setmemeObj] = useState()

  async function loadMemePicIUrls() {
    const response = await fetch( "https://api.imgflip.com/get_memes" )
    const result = await response.json()
    console.log(result.data)
    const randomIndex = Math.floor(Math.random() * result.data.memes.length)
    console.log(result.data.memes[randomIndex])
    setmemeObj(result.data.memes[randomIndex])
  }

  useEffect(() => {
    loadMemePicIUrls()
  }, []) 

  return (
    <div className="App">
      <h1>Create a Meme</h1>
      <Meme url={memeObj} />
    </div>
  );
}

export default App;
