import { Link } from "react-router-dom";
import imgHeader from "./../img/hero.png";

export default function Header() {
  return (
    <header>
      <div className="img">
        <img src={imgHeader} alt="" />
      </div>
      <div className="label-header">
        <h1>Quality products that suit your taste</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          ultrices magna mauris pellentesque dignissim ante varius diam elit.
        </p>
        <Link to={"/product/all"}>
          <button>our products</button>
        </Link>
      </div>
    </header>
  );
}
