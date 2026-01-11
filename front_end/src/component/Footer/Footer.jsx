import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>

      <div className="container footer-content">
        <div className="row text-white">

          {/* Column 1 */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">MORE INFO</h6>
            <ul className="footer-list">
              <li>About Us</li>
              <li>Makeup</li>
              <li>Spa Treatments</li>
              <li>Wedding</li>
              <li>Men</li>
              <li>Hairdressing</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">CONTACT US</h6>
            <p>reception@enchante.co.nz</p>
            <p>+64 9 499 0435</p>
            <p>1 Anzac Avenue, Auckland CBD</p>

            <div className="social-icons">
              <i className="bi bi-instagram"></i>
              <i className="bi bi-facebook"></i>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">OPENING HOURS</h6>
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
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">FIND US HERE</h6>
            <iframe
              src="https://www.google.com/maps?q=1%20Anzac%20Avenue%20Auckland&output=embed"
              className="map"
              loading="lazy"
            ></iframe>
          </div>

  </div>
      </div>
    </footer>
  );
}

export default Footer;
