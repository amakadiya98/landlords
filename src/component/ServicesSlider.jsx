import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../styles/services.css"; // Import custom styles

export default function ServicesSlider() {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop= {true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className="slide-item">
            <div className="row">
                <div className="col-lg-6">
                    <div className="content-part">
                       <h4 className="section-heading">Property Sales Success</h4>
                       <h6 >Achieved Multiple Offers in Under a Week</h6>
                       <ul>
                        <li><strong>Sold Price: </strong>$950,000</li>
                        <li><strong>Details:</strong> Modern 2-bedroom loft with industrial charm in the heart of Minneapolis.</li>
                        <li><strong>Sold in:</strong> 30 days, 15% above asking price.</li>
                        <li><strong>Key Features: </strong>Exposed brick walls, stainless steel appliances, rooftop access.</li>
                       </ul>
                       <div className="number-text"><span>01</span> / 02 / 03 / 04</div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="img-part d-flex justify-content-end">
                        <img src="/images/services/slider-img.png" alt="slider-img"/>
                    </div>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-item">
            <div className="row">
                <div className="col-lg-6">
                    <div className="content-part">
                       <h4 className="section-heading">Property Sales Success</h4>
                       <h6 >Achieved Multiple Offers in Under a Week</h6>
                       <ul>
                        <li><strong>Sold Price: </strong>$950,000</li>
                        <li><strong>Details:</strong> Modern 2-bedroom loft with industrial charm in the heart of Minneapolis.</li>
                        <li><strong>Sold in:</strong> 30 days, 15% above asking price.</li>
                        <li><strong>Key Features: </strong>Exposed brick walls, stainless steel appliances, rooftop access.</li>
                       </ul>
                       <div className="number-text"> 01 / <span>02</span> / 03 / 04</div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="img-part d-flex justify-content-end">
                        <img src="/images/services/slider-img.png" alt="slider-img"/>
                    </div>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-item">
            <div className="row">
                <div className="col-lg-6">
                    <div className="content-part">
                       <h4 className="section-heading">Property Sales Success</h4>
                       <h6 >Achieved Multiple Offers in Under a Week</h6>
                       <ul>
                        <li><strong>Sold Price: </strong>$950,000</li>
                        <li><strong>Details:</strong> Modern 2-bedroom loft with industrial charm in the heart of Minneapolis.</li>
                        <li><strong>Sold in:</strong> 30 days, 15% above asking price.</li>
                        <li><strong>Key Features: </strong>Exposed brick walls, stainless steel appliances, rooftop access.</li>
                       </ul>
                       <div className="number-text">01 / 02 / <span>03</span> / 04</div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="img-part d-flex justify-content-end">
                        <img src="/images/services/slider-img.png" alt="slider-img"/>
                    </div>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-item">
            <div className="row">
                <div className="col-lg-6">
                    <div className="content-part">
                       <h4 className="section-heading">Property Sales Success</h4>
                       <h6 >Achieved Multiple Offers in Under a Week</h6>
                       <ul>
                        <li><strong>Sold Price: </strong>$950,000</li>
                        <li><strong>Details:</strong> Modern 2-bedroom loft with industrial charm in the heart of Minneapolis.</li>
                        <li><strong>Sold in:</strong> 30 days, 15% above asking price.</li>
                        <li><strong>Key Features: </strong>Exposed brick walls, stainless steel appliances, rooftop access.</li>
                       </ul>
                       <div className="number-text">01 / 02 / 03 / <span>04</span></div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="img-part d-flex justify-content-end">
                        <img src="/images/services/slider-img.png" alt="slider-img"/>
                    </div>
                </div>
            </div>
          </div>
        </SwiperSlide>
      
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-navigation">
        <button className="swiper-button-prev">‹</button>
        <button className="swiper-button-next">›</button>
      </div>
    </div>
  );
}
