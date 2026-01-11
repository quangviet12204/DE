import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const movieImages = Array.from(
  { length: 5 },
  (_, i) => `/moviess/movie${i + 1}.jpg`
);

// nhân ảnh để loop
const loopImages = [...movieImages, ...movieImages, ...movieImages];

const Movies = () => {
  return (
    <div className="netflix-slider">
      <Swiper
        modules={[Autoplay]}
        loop
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        spaceBetween={16}
        slidesPerView={5}     // 👈 FIX CỨNG
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {loopImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="movie-card">
              <img src={img} alt={`movie-${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Movies;
