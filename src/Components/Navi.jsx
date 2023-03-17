import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navi() {
    const[isShown,setIsShown] = useState(false)
    const[shown,setShown] = useState(false)
  return (
         <header>
            <nav class="flex">
                <NavLink to="" class="block px-4 py-2 border"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>Categories</NavLink>
                 {isShown && (
                <ul>
                    <li>Udemy Tech</li>
                    <li>Udemy Tech</li>
                    <li>Udemy Tech</li>
                    <li>Udemy Tech</li>
                    <li>Udemy Tech</li>
                </ul>
                 )}

               <NavLink to="" class="block px-4 py-2 border ml-4"
                onMouseEnter={() => setShown(true)}
                onMouseLeave={() => setShown(false)}>Udemy Tech</NavLink>
                 {shown && (
                <ul class="bg-black text-white"> 
                    <li>Class tech</li>
                    <li>Class tech</li>
                    <li>Class tech</li>
                    <li>Class tech</li>
                    
                </ul>
                 )}
            </nav>
         </header>
    
  )
}
