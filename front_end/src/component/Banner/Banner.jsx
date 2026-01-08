import "./Banner.css";
import MovieSlider from "./MovieSlider";
import bestSellers from "../../data/bestSellers.json";
import newunder from "../../data/newunder.json";
import { Link } from "react-router-dom";
import Movies from "./Movies";

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

      <h1 className="hero-title text-center mt-4 mb-4">
        WELCOME TO BARBERs SHOP
      </h1>

      <MovieSlider />

      {/* BEST SELLING - Full Width */}
      <section className="product-section container-fluid mt-5 px-lg-5">
        <h2 className="section-title text-center">BEST SELLING PRODUCTS</h2>
        <p className="text-center text-muted mb-4">
          Premium grooming essentials curated just for you.
        </p>
        <div className="product-grid">
          {bestSellers.map((item) => (
            <div key={item.id} className="product-card">
              <div className="product-img-wrapper">
                <img src={item.image} alt={item.name} />
              </div>
              <h3 className="product-name">{item.name}</h3>
              <p className="product-price">{item.price} VND</p>
            </div>
          ))}
        </div>
      </section>

      {/* UNDERGROUND NEWS - Full Width */}
      <section className="new-section container-fluid mt-5 mb-5 px-lg-5">
        <h2 className="new-title text-center">UNDERGROUND HAIR NEWS</h2>
        <p className="text-center text-muted mb-4 mx-auto" style={{ maxWidth: "900px" }}>
          Stay up-to-date with the latest hair, fashion, and lifestyle trends
          from street youth culture. Follow us to never miss the evolution of urban aesthetics.
        </p>
        <div className="new-grid">
          {newunder.map((item) => (
            <div key={item.id} className="new-card">
              <div className="new-img">
                <img src={item.image} alt={item.title} />
              </div>
              <h3 className="new-title">{item.title}</h3>
              <p className="new-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BRANCH DISCOVERY - Full Width */}
      <section className="branch-discovery-section container-fluid mt-5 pt-5 p">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="branch-info-content">
              <h2 className="brand-title">EXPLORE OUR NATIONWIDE BRANCHES</h2>
              <p className="text-muted mt-3 branch-desc">
                Find your nearest location and experience top-tier barber services 
                wherever you are.
              </p>
              <p className="fw-bold hotline-text">Hotline: 1900 4407</p>
              <Link to="/branch" className="btn btn-dark mt-3 px-4 py-2">
                VIEW BRANCHES
              </Link>
            </div>
          </div>
          <div className="col-md-7">
            <div className="branch-image-grid">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
                <div key={i} className="branch-img-item">
                  <img src={`/branch/${i}.jpg`} alt={`Branch ${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARTWORKS - Full Width */}
      <section className="hair-section container-fluid mt-5 pt-1 pb-5 px-lg-5">
        <h2 className="new-title text-center">ARTWORKS OF THE MONTH</h2>
        <p className="text-center text-muted mb-4 mx-auto" style={{ maxWidth: "800px" }}>
          A collection of the most outstanding and creative men's hairstyles. 
          Keeping up with new trends to bring inspiration for modern and edgy styles.
        </p>
        <div className="hair-image-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div key={i} className="hair-img-item">
              <img src={`/hair/${i}.jpg`} alt={`Hair ${i}`} />
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERSHIP - Full Width */}
      <section className="partnership-section container-fluid mt-5 mb-5 px-lg-5">
        <h1 className="hero-title text-center mb-4">HAIR STYLING PARTNERSHIPS</h1>
        <p className="text-center text-muted mx-auto" style={{ maxWidth: "800px" }}>
          Official hair styling partner for famous game shows and events. 
          For collaboration inquiries, please contact: <strong>4raubarbershop@gmail.com</strong>
        </p>
        <Movies />
      </section>
    </>
  );
};

export default HeroBanner;