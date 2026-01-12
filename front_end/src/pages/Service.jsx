import React from "react";
import { Link } from "react-router-dom";
import ServiceData from "../data/Service.json";
import "./style/Service.css"; 


const Service = () => {
  return (
    <div className="service-page-container">
      {/* Banner */}
    
      <div className="service-content">
        {/* COMBO SECTION */}
        <section>
          <button className="combo-title">
            <Link
              to="/booking"
              state={{ selectedService: "Combo (Cut + Shampoo + Trim)" }}
              style={{
                color: " black",
                textDecoration: "none",
                display: "block",
                width: "100%",
              }}
            >
              <h2>Royal Combo 150VND</h2>
            </Link>
          </button>
          <div className="combo-grid-1">
            {ServiceData?.["Combo (Cut + Shampoo + Trim)"]?.map((item) => (
              <div key={item.id} className="combo-card-item">
                <img src={item.image} alt={item.name} />
                <div className="card-text">
                  <h3>{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HAIR CUT SECTION */}
        <section>
          <h2 className="combo-title p-5 pb-2">Haircut Services</h2>
          <div className="combo-grid">
            {ServiceData?.['Cut Hair']?.map((item) => (
              <div key={item.id} className="service-card-v2">
                <div className="card-image-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="card-footer-info">
                  <div className="footer-left">
                    <h3 className="service-title-main">{item.name}</h3>
                    <p className="service-price-text">
                      From: <span>{item.price}VND</span>
                    </p>
                  </div>
                  <div className="footer-right">
                    <Link
                      to="/booking"
                      state={{ selectedService: "Cut Hair" }}
                      className="btn-booking-gold"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HAIR CURL SECTION */}
        <section>
          <h2 className="combo-title p-5 pb-2">Hair Curling Services</h2>
          <div className="combo-grid">
            {ServiceData?.["Hair Curl"]?.map((item) => (
              <div key={item.id} className="service-card-v2">
                <div className="card-image-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="card-footer-info">
                  <div className="footer-left">
                    <h3 className="service-title-main">{item.name}</h3>
                    <p className="service-price-text">
                      From: <span>{item.price}VND</span>
                    </p>
                  </div>
                  <div className="footer-right">
                    <Link
                      to="/booking"
                      state={{ selectedService: "Hair Curl" }}
                      className="btn-booking-gold"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HAIR DYE SECTION */}
        <section>
          <h2 className="combo-title p-5 pb-2">Hair Dyeing Services</h2>
          <div className="combo-grid">
            {ServiceData?.["Hair Dye"]?.map((item) => (
              <div key={item.id} className="service-card-v2">
                <div className="card-image-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="card-footer-info">
                  <div className="footer-left">
                    <h3 className="service-title-main">{item.name}</h3>
                    <p className="service-price-text">
                      From: <span>{item.price}VND</span>
                    </p>
                  </div>
                  <div className="footer-right">
                    <Link
                      to="/booking"
                      state={{ selectedService: "Hair Dye" }}
                      className="btn-booking-gold"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Service;