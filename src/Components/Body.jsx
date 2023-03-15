import React from "react";
import Photo from "../imgs/Photo.jpg";
import "./Body.css";

export default function Body() {
  return (
    <div class="">
      <img src={Photo} class="w-screen h-max" alt="" />
      <div class="ml-12 py-2 border bg-white w-max h-1/4 design">
        <h1 class="text-lg font-extrabold mt-4">Learning that gets you</h1>
        <p class="text-base font-medium mt-6">
          Skills for your present (and your future). Get <br />
          started with us.
        </p>
      </div>
      <h1 class=" px-4 mt-12 ml-8 text-3xl font-extrabold text-gray-700 mb-0 ">
        Let's Starts learning,Adeline{" "}
      </h1>
      <div class="px-4 py-2 border border-gray-500 w-1/3 h-1/4 bg-white text-gray-800 mt-6 text-center items-center card1">
        <h3 class="text-2xl font-bold mt-0">Schedule time to learn</h3>
        <p class="text-xl font-medium my-6 ">
          {" "}
          A little each day adds up. Get <br />
          reminders from your calendar.
        </p>
        <p class="text-violet-700 ml-11 text-base">Get started</p>
      </div>
      <div class="px-4 mt-6 ml-8">
        <h1 class="text-gray-900 text-3xl font-bold">What to learn next</h1>
        <h2 class="text-gray-900 text-2xl font-bold mt-3">
          Recommended for you
        </h2>
      </div>
      
    </div>
  );
}
