import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Banner.css";
import videobanner from "../../../public/video/Videobanner.mp4"
import "./Banner.css";

const HeroBanner = () => {
  return (
    <section className="hero">
  <video className="hero-video" autoPlay muted loop playsInline>
    <source src={videobanner} type="video/mp4" />
  </video>

  <div className="hero-overlay"></div>

  <div className="hero-content">
    
    <div className="actions">
      <button className="btn btn-danger">ĐẶT LỊCH</button>
      <button className="btn btn-outline-light">MUA SẮM</button>
    </div>
  </div>
  <h1 className="hero-title">WELCOME TO BARBER SHOP</h1>
</section>

  );
};

export default HeroBanner;
