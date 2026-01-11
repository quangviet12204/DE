import "bootstrap/dist/css/bootstrap.min.css";


function District1 (){
    return(
         <div>
      {/* ===== SLIDER ===== */}
      <div className="container my-4">
        <div
          id="barberCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner rounded">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a"
                className="d-block w-100"
                alt="barber"
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1621605810056-8093c2c89c9c"
                className="d-block w-100"
                alt="barber"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#barberCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#barberCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      {/* ===== INFO ===== */}
      <div className="container my-4">
        <h3 className="fw-bold text-uppercase">
          4rau Barber Cutclub Privia Khang Điền – Bình Tân
        </h3>

        <p className="text-muted">
          Cắt tóc nam – gội – cạo khô nóng/lạnh kiểu truyền thống – uốn & nhuộm hiện đại.
        </p>

        <div className="row align-items-center">
          <div className="col-md-8">
            <ul className="list-unstyled">
              <li>📍 521 An Dương Vương, Bình Tân</li>
              <li>⏰ 09:00 – 21:00</li>
              <li>📞 1900 4407</li>
            </ul>
          </div>

          <div className="col-md-4 text-end">
            <button className="btn btn-dark btn-lg w-100">
              ĐẶT LỊCH NGAY
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
    
export default District1