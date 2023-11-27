import Product from "./Product";
import { generateUniqueId } from "../functions/function";
import { useData } from "../context/dataContext";

export default function AllProducts() {
  const data = useData();
  let listProduct = data.map((product) => {
    return (
      <Product
        key={generateUniqueId()}
        id={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
      />
    );
  });
  return (
    <div className="all-products">
      <h2>All Products</h2>
      <section className="Products">{listProduct}</section>
    </div>
  );
}
