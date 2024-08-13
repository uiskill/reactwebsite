import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  return (
    <div>
      <div className="slider-1 bg-gray">
        <img className="quotes-decoration" src="images/quotes.svg" alt="alternative" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="slider-container">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={50}
                  slidesPerView={1}
                  className="swiper-container card-slider "
                >
                  <SwiperSlide>
                    <img className="testimonial-image" src="images/testimonial-1.jpg" alt="alternative" />
                    <p className="testimonial-text">“Expense bed any sister depend changer off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it how about some words here done”</p>
                    <div className="testimonial-author">Marlene Visconte</div>
                    <div className="testimonial-position">General Manager - Scouter</div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="testimonial-image" src="images/testimonial-2.jpg" alt="alternative" />
                    <p className="testimonial-text">“Expense bed any sister depend changer off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it how about some words here done”</p>
                    <div className="testimonial-author">John Spiker</div>
                    <div className="testimonial-position">Team Leader - Vanquish</div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="testimonial-image" src="images/testimonial-3.jpg" alt="alternative" />
                    <p className="testimonial-text">“Expense bed any sister depend changer off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it how about some words here done”</p>
                    <div className="testimonial-author">Stella Virtuoso</div>
                    <div className="testimonial-position">Design Chief - Bikegirl</div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
