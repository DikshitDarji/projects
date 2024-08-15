import React from 'react'
import Background from './components/Background'
import Fground from './components/Fground'
export default function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background/>
      <Fground/>
    </div>

  )
}
