import React from 'react'
import AnimalMatrix from './components/AnimalMatrix'


function App() {

  return (
    <div className='container'>
      <div className='modal'>
        <h1 className='heading'>Jam Word Puzzle Game</h1>
        <div className='flex items-center justify-center mt-5'>
          <AnimalMatrix></AnimalMatrix>
        </div>
      </div>
    </div>
  )
}

export default App
