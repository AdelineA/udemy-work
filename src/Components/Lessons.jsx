import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import python from "../imgs/python.jpg";
import star from "../imgs/star.jpg";
import js from "../imgs/js.jpg";
import IOS from "../imgs/IOS.jpg";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Body.css";

export default function Lessons() {
  return (
    <section class="bg-white px-2">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swip">
          <div className="lesson">
            <div class="flex-col border ml-2 mt-6">
              <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
                <NavLink to="#">
                  <img class="rounded-t-lg" src={python} alt="" />
                </NavLink>
              </div>
              <div>
                <h2 class="text-lg text-gray-900 font-semibold">
                  The comple python Bootcamp
                  <br />
                  From zero to hero
                </h2>
                <p class="text-xs text-gray-400 font-sans">Jose Portilla</p>
                <div class="flex w-1/5">
                  <p class="font-bold text-base text-red-900">4.6</p>
                  <img src={star} class="w-16 h-1/6 ml-1 mr-1 mt-2" alt="" />
                  <p class="text-sm text-gray-400 mt-1">(465,799)</p>
                </div>
                <div class="mt-1 flex flex-wrap">
                  <h6 class="font-bold text-base ">$19.99 </h6>
                  <h6 class="text-base line-through ml-1">$99.99</h6>
                </div>
              </div>
            </div>
            <div class="flex-col border ml-2 mt-6">
              <div class="w-max bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <NavLink to="#">
                  <img class="rounded-t-lg" src={js} alt="" />
                </NavLink>
              </div>
              <div>
                <h2 class="text-lg text-gray-900 font-semibold">
                  The comple python Bootcamp
                  <br />
                  From zero to hero
                </h2>
                <p class="text-xs text-gray-400 font-sans">Jose Portilla</p>
                <div class="flex w-1/5">
                  <p class="font-bold text-base text-red-900">4.6</p>
                  <img src={star} class="w-16 h-1/6 ml-1 mr-1 mt-2" alt="" />
                  <p class="text-sm text-gray-400 mt-1">(465,799)</p>
                </div>
                <div class="mt-1 flex flex-wrap">
                  <h6 class="font-bold text-base ">$19.99 </h6>
                  <h6 class="text-base line-through ml-1">$99.99</h6>
                </div>
              </div>
            </div>
            <div class="flex-col border ml-2 mt-6 ">
              <div class="w-max bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <NavLink to="#">
                  <img class="rounded-t-lg" src={IOS} alt="" />
                </NavLink>
              </div>
              <div>
                <h2 class="text-lg text-gray-900 font-semibold">
                  The comple python Bootcamp
                  <br />
                  From zero to hero
                </h2>
                <p class="text-xs text-gray-400 font-sans">Jose Portilla</p>
                <div class="flex w-1/5">
                  <p class="font-bold text-base text-red-900">4.6</p>
                  <img src={star} class="w-16 h-1/6 ml-1 mr-1 mt-2" alt="" />
                  <p class="text-sm text-gray-400 mt-1">(465,799)</p>
                </div>
                <div class="mt-1 flex flex-wrap">
                  <h6 class="font-bold text-base ">$19.99 </h6>
                  <h6 class="text-base line-through ml-1">$99.99</h6>
                </div>
              </div>
            </div>
            <div class="flex-col border ml-2 mt-6 ">
              <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <NavLink to="#">
                  <img class="rounded-t-lg" src={python} alt="" />
                </NavLink>
              </div>
              <div>
                <h2 class="text-lg text-gray-900 font-semibold">
                  The comple python Bootcamp
                  <br />
                  From zero to hero
                </h2>
                <p class="text-xs text-gray-400 font-sans">Jose Portilla</p>
                <div class="flex w-1/5">
                  <p class="font-bold text-base text-red-900">4.6</p>
                  <img src={star} class="w-16 h-1/6 ml-1 mr-1 mt-2" alt="" />
                  <p class="text-sm text-gray-400 mt-1">(465,799)</p>
                </div>
                <div class="mt-1 flex flex-wrap">
                  <h6 class="font-bold text-base ">$19.99 </h6>
                  <h6 class="text-base line-through ml-1">$99.99</h6>
                </div>
              </div>
            </div>
            <div class="flex-col border ml-2 mt-6 ">
              <div class="w-max bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <NavLink to="#">
                  <img class="rounded-t-lg" src={IOS} alt="" />
                </NavLink>
              </div>
              <div>
                <h2 class="text-lg text-gray-900 font-semibold">
                  The comple python Bootcamp
                  <br />
                  From zero to hero
                </h2>
                <p class="text-xs text-gray-400 font-sans">Jose Portilla</p>
                <div class="flex w-1/5">
                  <p class="font-bold text-base text-red-900">4.6</p>
                  <img src={star} class="w-16 h-1/6 ml-1 mr-1 mt-2" alt="" />
                  <p class="text-sm text-gray-400 mt-1">(465,799)</p>
                </div>
                <div class="mt-1 flex flex-wrap">
                  <h6 class="font-bold text-base ">$19.99 </h6>
                  <h6 class="text-base line-through ml-1">$99.99</h6>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lesson">
            <div class="flex-col border ml-2 mt-6">
              <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
                <NavLink to="#">
                  <img class="rounded-t-lg" src={python} alt="" />
                </NavLink>
              </div>
              <div>
                <h2 class="text-lg text-gray-900 font-semibold">
                  The comple python Bootcamp
                  <br />
                  From zero to hero
                </h2>
                <p class="text-xs text-gray-400 font-sans">Jose Portilla</p>
                <div class="flex w-1/5">
                  <p class="font-bold text-base text-red-900">4.6</p>
                  <img src={star} class="w-16 h-1/6 ml-1 mr-1 mt-2" alt="" />
                  <p class="text-sm text-gray-400 mt-1">(465,799)</p>
                </div>
                <div class="mt-1 flex flex-wrap">
                  <h6 class="font-bold text-base ">$19.99 </h6>
                  <h6 class="text-base line-through ml-1">$99.99</h6>
                </div>
              </div>
            </div>
            <div class="flex-col border ml-2 mt-6">
              <div class="w-max bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <NavLink to="#">
                  <img class="rounded-t-lg" src={js} alt="" />
                </NavLink>
              </div>
              <div>
                <h2 class="text-lg text-gray-900 font-semibold">
                  The comple python Bootcamp
                  <br />
                  From zero to hero
                </h2>
                <p class="text-xs text-gray-400 font-sans">Jose Portilla</p>
                <div class="flex w-1/5">
                  <p class="font-bold text-base text-red-900">4.6</p>
                  <img src={star} class="w-16 h-1/6 ml-1 mr-1 mt-2" alt="" />
                  <p class="text-sm text-gray-400 mt-1">(465,799)</p>
                </div>
                <div class="mt-1 flex flex-wrap">
                  <h6 class="font-bold text-base ">$19.99 </h6>
                  <h6 class="text-base line-through ml-1">$99.99</h6>
                </div>
              </div>
            </div>
            <div class="flex-col border ml-2 mt-6 ">
              <div class="w-max bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <NavLink to="#">
                  <img class="rounded-t-lg" src={IOS} alt="" />
                </NavLink>
              </div>
              <div>
                <h2 class="text-lg text-gray-900 font-semibold">
                  The comple python Bootcamp
                  <br />
                  From zero to hero
                </h2>
                <p class="text-xs text-gray-400 font-sans">Jose Portilla</p>
                <div class="flex w-1/5">
                  <p class="font-bold text-base text-red-900">4.6</p>
                  <img src={star} class="w-16 h-1/6 ml-1 mr-1 mt-2" alt="" />
                  <p class="text-sm text-gray-400 mt-1">(465,799)</p>
                </div>
                <div class="mt-1 flex flex-wrap">
                  <h6 class="font-bold text-base ">$19.99 </h6>
                  <h6 class="text-base line-through ml-1">$99.99</h6>
                </div>
              </div>
            </div>
            <div class="flex-col border ml-2 mt-6 ">
              <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <NavLink to="#">
                  <img class="rounded-t-lg" src={python} alt="" />
                </NavLink>
              </div>
              <div>
                <h2 class="text-lg text-gray-900 font-semibold">
                  The comple python Bootcamp
                  <br />
                  From zero to hero
                </h2>
                <p class="text-xs text-gray-400 font-sans">Jose Portilla</p>
                <div class="flex w-1/5">
                  <p class="font-bold text-base text-red-900">4.6</p>
                  <img src={star} class="w-16 h-1/6 ml-1 mr-1 mt-2" alt="" />
                  <p class="text-sm text-gray-400 mt-1">(465,799)</p>
                </div>
                <div class="mt-1 flex flex-wrap">
                  <h6 class="font-bold text-base ">$19.99 </h6>
                  <h6 class="text-base line-through ml-1">$99.99</h6>
                </div>
              </div>
            </div>
            <div class="flex-col border ml-2 mt-6 ">
              <div class="w-max bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <NavLink to="#">
                  <img class="rounded-t-lg" src={IOS} alt="" />
                </NavLink>
              </div>
              <div>
                <h2 class="text-lg text-gray-900 font-semibold">
                  The comple python Bootcamp
                  <br />
                  From zero to hero
                </h2>
                <p class="text-xs text-gray-400 font-sans">Jose Portilla</p>
                <div class="flex w-1/5">
                  <p class="font-bold text-base text-red-900">4.6</p>
                  <img src={star} class="w-16 h-1/6 ml-1 mr-1 mt-2" alt="" />
                  <p class="text-sm text-gray-400 mt-1">(465,799)</p>
                </div>
                <div class="mt-1 flex flex-wrap">
                  <h6 class="font-bold text-base ">$19.99 </h6>
                  <h6 class="text-base line-through ml-1">$99.99</h6>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <h3 class="text-2xl font-bold text-gray-900 mt-20 mb-5 ml-8">
          Recommended for you
        </h3>
        <div className="lesson">
          <div class="flex-col border ml-2 mt-6">
            <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
              <NavLink to="#">
                <img class="rounded-t-lg" src={python} alt="" />
              </NavLink>
            </div>
            <div>
              <h2 class="text-lg text-gray-900 font-semibold">
                The comple python Bootcamp
                <br />
                From zero to hero
              </h2>
              <p class="text-xs text-gray-400 font-sans">Jose Portilla</p>
              <div class="flex w-1/5">
                <p class="font-bold text-base text-red-900">4.6</p>
                <img src={star} class="w-16 h-1/6 ml-1 mr-1 mt-2" alt="" />
                <p class="text-sm text-gray-400 mt-1">(465,799)</p>
              </div>
              <div class="mt-1 flex flex-wrap">
                <h6 class="font-bold text-base ">$19.99 </h6>
                <h6 class="text-base line-through ml-1">$99.99</h6>
              </div>
            </div>
          </div>
          <div class="flex-col border ml-2 mt-6">
            <div class="w-max bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
              <NavLink to="#">
                <img class="rounded-t-lg" src={js} alt="" />
              </NavLink>
            </div>
            <div>
              <h2 class="text-lg text-gray-900 font-semibold">
                The comple python Bootcamp
                <br />
                From zero to hero
              </h2>
              <p class="text-xs text-gray-400 font-sans">Jose Portilla</p>
              <div class="flex w-1/5">
                <p class="font-bold text-base text-red-900">4.6</p>
                <img src={star} class="w-16 h-1/6 ml-1 mr-1 mt-2" alt="" />
                <p class="text-sm text-gray-400 mt-1">(465,799)</p>
              </div>
              <div class="mt-1 flex flex-wrap">
                <h6 class="font-bold text-base ">$19.99 </h6>
                <h6 class="text-base line-through ml-1">$99.99</h6>
              </div>
            </div>
          </div>
          <div class="flex-col border ml-2 mt-6 ">
            <div class="w-max bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <NavLink to="#">
                <img class="rounded-t-lg" src={IOS} alt="" />
              </NavLink>
            </div>
            <div>
              <h2 class="text-lg text-gray-900 font-semibold">
                The comple python Bootcamp
                <br />
                From zero to hero
              </h2>
              <p class="text-xs text-gray-400 font-sans">Jose Portilla</p>
              <div class="flex w-1/5">
                <p class="font-bold text-base text-red-900">4.6</p>
                <img src={star} class="w-16 h-1/6 ml-1 mr-1 mt-2" alt="" />
                <p class="text-sm text-gray-400 mt-1">(465,799)</p>
              </div>
              <div class="mt-1 flex flex-wrap">
                <h6 class="font-bold text-base ">$19.99 </h6>
                <h6 class="text-base line-through ml-1">$99.99</h6>
              </div>
            </div>
          </div>
          <div class="flex-col border ml-2 mt-6 ">
            <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
              <NavLink to="#">
                <img class="rounded-t-lg" src={python} alt="" />
              </NavLink>
            </div>
            <div>
              <h2 class="text-lg text-gray-900 font-semibold">
                The comple python Bootcamp
                <br />
                From zero to hero
              </h2>
              <p class="text-xs text-gray-400 font-sans">Jose Portilla</p>
              <div class="flex w-1/5">
                <p class="font-bold text-base text-red-900">4.6</p>
                <img src={star} class="w-16 h-1/6 ml-1 mr-1 mt-2" alt="" />
                <p class="text-sm text-gray-400 mt-1">(465,799)</p>
              </div>
              <div class="mt-1 flex flex-wrap">
                <h6 class="font-bold text-base ">$19.99 </h6>
                <h6 class="text-base line-through ml-1">$99.99</h6>
              </div>
            </div>
          </div>
          <div class="flex-col border ml-2 mt-6 ">
            <div class="w-max bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
              <NavLink to="#">
                <img class="rounded-t-lg" src={IOS} alt="" />
              </NavLink>
            </div>
            <div>
              <h2 class="text-lg text-gray-900 font-semibold">
                The comple python Bootcamp
                <br />
                From zero to hero
              </h2>
              <p class="text-xs text-gray-400 font-sans">Jose Portilla</p>
              <div class="flex w-1/5">
                <p class="font-bold text-base text-red-900">4.6</p>
                <img src={star} class="w-16 h-1/6 ml-1 mr-1 mt-2" alt="" />
                <p class="text-sm text-gray-400 mt-1">(465,799)</p>
              </div>
              <div class="mt-1 flex flex-wrap">
                <h6 class="font-bold text-base ">$19.99 </h6>
                <h6 class="text-base line-through ml-1">$99.99</h6>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
