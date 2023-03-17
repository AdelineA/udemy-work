import React from "react";
import Photo from "../imgs/Photo.jpg";
import Alert from '../imgs/Alert.png'
import "./Body.css";

export default function Body() {
  return (
    <div class="bg-white">
      <img src={Photo} class="w-screen h-max" alt="" />
      <div class="ml-12 py-2 border bg-white w-max h-1/4 design">
        <h1 class="text-lg font-extrabold mt-4">Learning that gets you</h1>
        <p class="text-base font-medium mt-6">
          Skills for your present (and your future). Get <br />
          started with us.
        </p>
      </div>
      <h1 class=" px-4 mt-12 ml-8 text-3xl font-extrabold mb-0 ">
        Let's Starts learning,Adeline{" "}
      </h1>
      <div class="px-4 py-2 border border-gray-500 w-1/3 h-1/4 bg-white mt-6 text-center items-center card1">
        <div class="flex">
          <img src={Alert} class="w-15" alt="" />
          <div class="flex-col">
            <div class="flex ml-4 text-center items-center">
            <h3 class="text-lg font-bold mt-0">Schedule time to learn</h3>
            <svg xmlns="http://www.w3.org/2000/svg"
             fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-12">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
             
          </div>
         <p class="text-base font-medium my-6 ">
          {" "}
          A little each day adds up. Get <br />
          reminders from your calendar.
        </p>
          </div>
         
        </div>
        <p class="text-violet-700 text-base text-center items-center">Get started</p>
      </div>
      <div class="px-4 mt-6 ml-8">
        <h1 class=" text-3xl font-bold">What to learn next</h1>
        <h2 class="text-2xl font-bold mt-3">
          Recommended for you
        </h2>
      </div>
      
    </div>
  );
}
