import React from 'react'
import Photo from '../imgs/Photo.jpg'
import './Body.css'

export default function Body() {
  return (
    <div class="relative">
        <img src={Photo} class="w-screen h-max" alt="" />
        <div class="ml-12 py-2 border bg-white w-max h-1/4 design">
          <h1 class="text-lg font-extrabold mt-4">Learning that gets you</h1>
          <p class="text-base font-medium mt-6">Skills for your present (and your future). Get <br/>started with us.</p>
        </div>

        <div class="px-4 py-2 border border-gray-500 w-1/3 h-1/4 bg-white text-gray-800 mt-12 text-center items-center card1">
          <h3 class="text-2xl font-bold mt-4">Schedule time to learn</h3>
          <p class="text-xl font-medium my-6 "> A little each day adds up. Get <br/>reminders from your calendar.</p>

        </div>
        <div>
          <h1>
            
          </h1>
        </div>
    </div>
    
  )
}
