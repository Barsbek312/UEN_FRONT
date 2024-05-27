import React, { Component } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper/modules';
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination"
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";
import img7 from "../assets/img7.webp";
import img8 from "../assets/img8.webp";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <Swiper
          className="uen-slider"
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".button-prev-slide",
            prevEl: ".button-next-slide"
          }}
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          allowTouchMove={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          speed={300}
          effect="fade"
          pagination={{
            clickable: true,
            type: "bullets"
          }}
        >
          <SwiperSlide>
            <div className="slider-image">
              <img src={img1} alt="Image1" />
              <div className="title-content">
                <h3 className="first-row">Welcome to</h3>
                <h3 className="middle-row">United Eco Nations</h3>
                <p className="last-row">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src={img2} alt="Image1" />
              <div className="title-content">
                <h3 className="first-row">Welcome to</h3>
                <h3 className="middle-row">United Eco Nations</h3>
                <p className="last-row">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src={img3} alt="Image1" />
              <div className="title-content">
                <h3 className="first-row">Welcome to</h3>
                <h3 className="middle-row">United Eco Nations</h3>
                <p className="last-row">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src={img4} alt="Image1" />
              <div className="title-content">
                <h3 className="first-row">Welcome to</h3>
                <h3 className="middle-row">United Eco Nations</h3>
                <p className="last-row">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src={img5} alt="Image1" />
              <div className="title-content">
                <h3 className="first-row">Welcome to</h3>
                <h3 className="middle-row">United Eco Nations</h3>
                <p className="last-row">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src={img6} alt="Image1" />
              <div className="title-content">
                <h3 className="first-row">Welcome to</h3>
                <h3 className="middle-row">United Eco Nations</h3>
                <p className="last-row">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src={img7} alt="Image1" />
              <div className="title-content">
                <h3 className="first-row">Welcome to</h3>
                <h3 className="middle-row">United Eco Nations</h3>
                <p className="last-row">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src={img8} alt="Image1" />
              <div className="title-content">
                <h3 className="first-row">Welcome to</h3>
                <h3 className="middle-row">United Eco Nations</h3>
                <p className="last-row">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </SwiperSlide>
          <div className="button-next-slide">
            <IoIosArrowDropleft />
          </div>
          <div className="button-prev-slide">
            <IoIosArrowDropright />
          </div>
        </Swiper>
      </div>
    )
  }
}
