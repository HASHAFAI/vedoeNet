import { Link } from "react-router-dom";
import Products from "./Products";

export default function Body() {
  return (
    <>
      <Products />
      <Link to={"/product/all"}>
        <button className="more-products">MORE PRODUCTS</button>
      </Link>
    </>
  );
}
