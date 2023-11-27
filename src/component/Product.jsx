import { Link } from "react-router-dom";
export default function Product({ image, name, price, id }) {
  return (
    <Link to={"/product/details/" + id}>
      <div className="card-Product">
        <img src={require(`./../${image}`)} alt="" />
        <div>
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </div>
    </Link>
  );
}
