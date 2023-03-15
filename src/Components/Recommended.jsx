import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Recommended() {
  return (
    <section>
        <h2 class="font-bold text-xl ml-10 mt-4 ">Topics recommended for you</h2>
        <div class="flex justify-between px-11 py-1 mt-10"> 
        <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
            <NavLink to="#"> AWS certified cloud <br/>partitioner </NavLink>
        </div>
        <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
            <NavLink to="#">AWS certification</NavLink>
        </div>
        <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
            <NavLink to="#">AWS certified solution<br/> architecture solution</NavLink>
        </div>
        <div class="border border-gray-100 bg-white text-lg text-center font-bold pl-3 pr-3 py-1">
            <NavLink to="#">AWS certified developer-<br/>Associate</NavLink>
        </div>
        <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
            <NavLink to="#">AWS certified solution<br/> professdional-architect</NavLink>
        </div>
        
    </div>
    <div class="flex justify-between px-11 py-1"> 
        <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
            <NavLink to="#"> AWS certified cloud <br/>partitioner </NavLink>
        </div>
        <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-7 py-1">
            <NavLink to="#" class="text-center justify-center ml-3 ">Amazon  AWS</NavLink>
        </div>
        <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
            <NavLink to="#">AWS certified solution<br/> architecture solution</NavLink>
        </div>
        <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
            <NavLink to="#">AWS certified developer-<br/>Associate</NavLink>
        </div>
        <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
            <NavLink to="#">Gloge cloud certification</NavLink>
        </div>
        
    </div>

    </section>
  )
}
