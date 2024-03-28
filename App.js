import React, { lazy, useEffect, useState } from 'react'
import Background from './Components/Background/Background'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

function App() {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passion" },
    { text1: "Give in to ", text2: "your passion" }
  ]

  const [heroCount, setHeroCount] = useState(0)  // change no. with (0,1 nd 2)
  const [playStatus, setPlayStatus] = useState(false) // set useState(true) to play the video 

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => { return count === 2 ? 0 : count + 1 })
    }, 5000)
  }, [])

  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]}
        setPlayStatus={setPlayStatus}
        playStatus={playStatus}
        setHeroCount={setHeroCount}
        heroCount={heroCount}
      />
    </div>
  )
}

export default App
