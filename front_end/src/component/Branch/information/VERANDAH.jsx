import React from "react";
import "./IFMT.css";

export default function CS9() {
  const images = [
    "https://4rau.vn/concungfront/images/chinhanh/binhtan/1.webp?w=768",
    "https://4rau.vn/concungfront/images/chinhanh/binhtan/3.webp?w=768",
    "https://4rau.vn/concungfront/images/chinhanh/binhtan/5.webp?w=768",
    "https://4rau.vn/concungfront/images/chinhanh/binhtan/8.webp?w=768",
  ];

  return (
    <div>
      {/* TOP INFO */}
      <div className="top-info">
        <div className="container d-flex flex-wrap gap-3">
          <span>📍 188A Trần Quang Khải, Tân Định, Quận 1</span>
          <span>📞 Hotline: 1900 4407</span>
          <span>🌐 https://4raueasybook.vn/</span>
        </div>
      </div>

      {/* SLIDER */}
      <div
        id="bannerCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                className="banner"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="banner-overlay">
                  <div className="container banner-content">
                    <div className="row w-100">
                      <div className="col-md-7 text-white">
                        <h1 className="fw-bold title">
                       
                          4Rau Barber Cutclub <br />
                          Tran Quang Khai
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLS */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className="container my-5">
  <div className="row g-4 ">
    
    <div className="col-md-7 align-items-center d-flex   ">
      <div className="map-wrapper">
        <iframe
      title="Google Map 188A1 Tran Quang Khai"
      src="https://www.google.com/maps?q=188A1%20Tr%E1%BA%A7n%20Quang%20Kh%E1%BA%A3i%20Ph%C6%B0%E1%BB%9Dng%20T%C3%A2n%20%C4%90%E1%BB%8Bnh%20Qu%E1%BA%ADn%201%20TP%20H%E1%BB%93%20Ch%C3%AD%20Minh&output=embed"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
      </div>
    </div>
    <div className="col-md-5">
      <div className="booking-box">
        <div className="feature-list">
          <span className="feature-item">
            <i className="bi bi-person-check"></i>
           Choose a barber according to your preference.
          </span>

          <span className="feature-item">
            <i className="bi bi-slash-circle"></i>
            Say no to aggressive sales tactics.
          </span>

          <span className="feature-item">
            <i className="bi bi-shield-check"></i>
            7-day warranty for service and products.
          </span>

          <span className="feature-item">
            <i className="bi bi-calendar-check"></i>
            Booking appointments online is easy.
          </span>

          <span className="feature-item">
            <i className="bi bi-credit-card"></i>
           Card payments and online payment gateways
          </span>

          <span className="feature-item">
            <i className="bi bi-bicycle"></i>
            Free motorbike parking
          </span>
        </div>

        <div className="action-buttons">
          <button className="btn-book">
            <i className="bi bi-calendar2-check"></i>
            BOOK YOUR APPOINTMENT NOW
          </button>

          <button className="btn-call">
            <i className="bi bi-telephone"></i>
           HOTLINE: 1900 4407
          </button>
        </div>
      </div>
    </div>

 
    
  </div>
</div>


      {/* CONTENT */}
      <div className="container py-5">
        <h1 className=" text-black fw-bold ">
          4Rau Barber Cutclub Tran Quang Khai
Tan Dinh
        </h1>

        <h4 className="text-muted mt-3 content-text fw-bold  ">
          Men's haircut – traditional hot/cold towel shave;<br></br> modern perm & dyeing;<br></br> choose your barber; no haggling guaranteed.<br></br> Maximum 7-day warranty for perms/dyes.<br></br> Free parking.

days.
        </h4>
      </div>

    
    </div>
  );
}
