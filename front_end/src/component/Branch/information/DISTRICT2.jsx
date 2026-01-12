import React from "react";
import "./IFMT.css";

export default function CS3() {
  const images = [
      "https://4rau.vn/concungfront/images/chinhanh/dienbienphu/1.webp?w=1200",
   "https://4rau.vn/concungfront/images/chinhanh/dienbienphu/2.webp?w=1200",
   "https://4rau.vn/concungfront/images/chinhanh/dienbienphu/3.webp?w=1200",
   "https://4rau.vn/concungfront/images/chinhanh/dienbienphu/4.webp?w=1200",
   "https://4rau.vn/concungfront/images/chinhanh/dienbienphu/5.webp?w=1200",
   "https://4rau.vn/concungfront/images/chinhanh/dienbienphu/6.webp?w=1200",
   "https://4rau.vn/concungfront/images/chinhanh/dienbienphu/7.webp?w=1200",
   "https://4rau.vn/concungfront/images/chinhanh/dienbienphu/8.webp?w=1200",
  ];

  return (
    <div>
      {/* TOP INFO */}
      <div className="top-info">
        <div className="container d-flex flex-wrap gap-3">
          <span>📍 634 Dien Bien Phu Street, Vuon Lai Ward, Ho Chi Minh City</span>
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
                         634 Dien Bien Phu Street, Vuon Lai Ward, Ho Chi Minh City
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
      title="634 Dien Bien Phu Street, Vuon Lai Ward, Ho Chi Minh City"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.531811342935!2d106.67382647486971!3d10.770520389377895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2076387b31%3A0xb73d4b3f3373fc5b!2zNjM0IMSQaeG7h24gQmnDqm4gUGjhu6csIFBoxrDhu51uZyAxMCwgUXXhuq1uIDEwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1768181989255!5m2!1svi!2s"
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
