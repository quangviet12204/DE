import "./Banner.css";
import MovieSlider from "./MovieSlider";

const HeroBanner = () => {
  return (
    <>
      {/* VIDEO HERO */}
      <div className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/video/Videobanner.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="actions">
            <button className="btn btn-danger">BOOKING</button>
            <button className="btn btn-outline-light">SHOP</button>
          </div>
        </div>
      </div>

      {/* TITLE */}
      <h1 className="hero-title text-center mt-4 mb-4">
        WELCOME TO BARBERs SHOP
      </h1>

      {/* ⭐ NETFLIX SLIDER */}
      <MovieSlider />
    </>
  );
};

export default HeroBanner;
