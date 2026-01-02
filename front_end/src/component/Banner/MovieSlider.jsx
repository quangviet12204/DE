import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const movieImages = Array.from(
  { length: 16 },
  (_, i) => `/movies/movie${i + 1}.webp`
);

const MovieSlider = () => {
  return (
    <div className="netflix-slider">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        centeredSlides
        loop
        speed={800} // tốc độ chuyển mượt
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={5}
        breakpoints={{
          320: { slidesPerView: 1.6 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {movieImages.map((img, index) => (
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

export default MovieSlider;
