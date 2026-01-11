import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-black py-5">
      <div className="container footer-content ">
        <div className="row text-white">

          {/* Column 1 */}
          <div className="col-md-3 mb-4 d-flex flex-column">
            <h6 className="fw-bold text-uppercase mb-3">
              MORE INFO
            </h6>

            <ul className="list-unstyled lh-lg mb-0">
              <li>
                <a href="/about" className="footer-link">About Us</a>
              </li>
              <li>
                <a href="/makeup" className="footer-link">Makeup</a>
              </li>
              <li>
                <a href="/spa" className="footer-link">Spa Treatments</a>
              </li>
              <li>
                <a href="/wedding" className="footer-link">Wedding</a>
              </li>
              <li>
                <a href="/men" className="footer-link">Men</a>
              </li>
              <li>
                <a href="/hairdressing" className="footer-link">Hairdressing</a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 mb-4 d-flex flex-column">
            <h6 className="fw-bold text-uppercase mb-3">
              CONTACT US
            </h6>

            <ul className="list-unstyled lh-lg mb-0">
              <li>Email: nnamehair@gmail.com</li>
              <li>Phone: +84 9 499 0435</li>
              <li>Address: NONAME Barber Cutclub – Privia Khang Dien, Binh Tan </li>
            </ul>

            <div className="social-icons">
              <i className="bi bi-instagram"></i>
              <i className="bi bi-facebook"></i>
            </div>
          </div>
          {/* Column 3 */}
          <div className="col-md-3 mb-4 d-flex flex-column">
            <h6 className="fw-bold text-uppercase mb-3">
              OPENING HOURS
            </h6>
            <ul className="opening-hours">
              <li><span>Monday</span><span>9:30 AM - 4:00 PM</span></li>
              <li><span>Tuesday</span><span>9:30 AM - 5:00 PM</span></li>
              <li><span>Wednesday</span><span>9:30 AM - 5:00 PM</span></li>
              <li><span>Thursday</span><span>9:00 AM - 7:00 PM</span></li>
              <li><span>Friday</span><span>9:00 AM - 5:00 PM</span></li>
              <li><span>Saturday</span><span>9:00 AM - 3:00 PM</span></li>
              <li><span>Sunday</span><span>Closed</span></li>
            </ul>
          </div>

        
          {/* Column 4 */}
          <div className="col-md-3 mb-4 d-flex flex-column">
            <h6 className="fw-bold text-uppercase mb-2">
              FIND US HERE
            </h6>

<<<<<<< HEAD
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.google.com/maps?q=321+An+Duong+Vuong,+An+Lac,+Binh+Tan,+Ho+Chi+Minh+City&output=embed"
                className="rounded"
                loading="lazy"
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
=======
  </div>
>>>>>>> dc5e65752bad77c5d578e2cbd4aca31eeb9f7ce8
      </div>
    </footer>
  );
}

export default Footer;
