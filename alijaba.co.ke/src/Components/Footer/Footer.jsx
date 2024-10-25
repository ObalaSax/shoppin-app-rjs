import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-place">
        <div className="footer-container">
          <div className="footer-contacts">
            <p>
              <b>Contact Us</b>
              <ul>
                <li>
                  {" "}
                  <a href="">Mukinduri Lane, Nairobi</a>
                </li>
                <li>
                  {" "}
                  <a href="">info@alijaba.co.ke</a>
                </li>
                <li>+2547-xx-xxx-xxx /+2547-yy-yyy-yyy</li>
              </ul>
            </p>
          </div>
          <div className="footer-information">
            <p>
              <b>Information</b>
              <ul>
                <li>Sizing Chart</li>
                <li>Shopping Policy</li>
                <li>About Us</li>
              </ul>
            </p>
          </div>
          <div className="footer-usefulLinks">
            <p>
              <b>Useful Links</b>
              <ul>
                <li>
                  <a href="">Refund Policy</a>
                </li>
                <li>Terms of Service</li>
                <li>Gift Cards</li>
              </ul>
            </p>
          </div>
          <div className="footer-NewsLetter">
            <p>
              <b>Newsletter Signup</b>
            </p>
            <p>
              Subscribe to our newsletter and get 10% off your first purchase
            </p>
            <div className="footer-newsLetter-buttons">
              <input type="email" placeholder="Your Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyrights">
        <p>
          Copyrights @ 2024 | alijaba.co.ke | all rights reserved | Powered By :
          Obala Sax{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
