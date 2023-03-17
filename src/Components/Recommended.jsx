import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Body.css";
import { Pagination, Navigation } from "swiper";

export default function Recommended() {
  return (
    <div class="bg-white px-2">
      <h2 class="font-bold text-xl ml-10 mt-20 mb-6 ">
        Topics recommended for you
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div class="flex justify-between px-11 py-1 mt-10">
              <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
                <NavLink to="#">
                  {" "}
                  AWS certified cloud <br />
                  partitioner{" "}
                </NavLink>
              </div>
              <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
                <NavLink to="#">AWS certification</NavLink>
              </div>
              <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
                <NavLink to="#">
                  AWS certified solution
                  <br /> architecture solution
                </NavLink>
              </div>
              <div class="border border-gray-100 bg-white text-lg text-center font-bold pl-3 pr-3 py-1">
                <NavLink to="#">
                  AWS certified developer-
                  <br />
                  Associate
                </NavLink>
              </div>
              <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
                <NavLink to="#">
                  AWS certified solution
                  <br /> professdional-architect
                </NavLink>
              </div>
            </div>
            <div class="flex justify-between px-11 py-1">
              <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
                <NavLink to="#">
                  {" "}
                  AWS certified cloud <br />
                  partitioner{" "}
                </NavLink>
              </div>
              <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-7 py-1">
                <NavLink to="#" class="text-center justify-center ml-3 ">
                  Amazon AWS
                </NavLink>
              </div>
              <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
                <NavLink to="#">
                  AWS certified solution
                  <br /> architecture solution
                </NavLink>
              </div>
              <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
                <NavLink to="#">
                  AWS certified developer-
                  <br />
                  Associate
                </NavLink>
              </div>
              <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
                <NavLink to="#">Gloge cloud certification</NavLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div class="flex justify-between px-11 py-1 mt-10">
              <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
                <NavLink to="#">
                  {" "}
                  AWS certified cloud <br />
                  partitioner{" "}
                </NavLink>
              </div>
              <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
                <NavLink to="#">AWS certification</NavLink>
              </div>
              <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
                <NavLink to="#">
                  AWS certified solution
                  <br /> architecture solution
                </NavLink>
              </div>
              <div class="border border-gray-100 bg-white text-lg text-center font-bold pl-3 pr-3 py-1">
                <NavLink to="#">
                  AWS certified developer-
                  <br />
                  Associate
                </NavLink>
              </div>
              <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
                <NavLink to="#">
                  AWS certified solution
                  <br /> professdional-architect
                </NavLink>
              </div>
            </div>
            <div class="flex justify-between px-11 py-1">
              <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
                <NavLink to="#">
                  {" "}
                  AWS certified cloud <br />
                  partitioner{" "}
                </NavLink>
              </div>
              <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-7 py-1">
                <NavLink to="#" class="text-center justify-center ml-3 ">
                  Amazon AWS
                </NavLink>
              </div>
              <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
                <NavLink to="#">
                  AWS certified solution
                  <br /> architecture solution
                </NavLink>
              </div>
              <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
                <NavLink to="#">
                  AWS certified developer-
                  <br />
                  Associate
                </NavLink>
              </div>
              <div class="border border-gray-100 bg-white text-base text-center font-bold pl-3 pr-3 py-1">
                <NavLink to="#">Gloge cloud certification</NavLink>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>Slide 2</SwiperSlide>s
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
