import footer from "./../img/mailing-list-img.png";
import arrow from "./../img/arrow.svg";
export default function Footer() {
  return (
    <footer>
      <div className="sing-in">
        <div>
          <img src={footer} alt="" />
        </div>
        <div className="box">
          <p className="label">
            Sign up for our newsletter and get 10% off your next order.
          </p>
          <button className="rectangle">
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
      <div className="footer-link">
        <ul>
          <li>About</li>
          <li>Customer Care</li>
          <li>Instagram</li>
        </ul>
        <p>© Pretend Store</p>
      </div>
    </footer>
  );
}
