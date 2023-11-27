import { generateUniqueId } from "../functions/function";
import { useData } from "../context/dataContext";
import Product from "./Product";
export default function Products({ count = 9 }) {
  const data = useData();

  let index = 0;
  let listProduct = data.map((product) => {
    index = index + 1;
    return (
      index <= count && (
        <Product
          key={generateUniqueId()}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      )
    );
  });

  return (
    <>
      <h2 className="featured-products">Featured products</h2>
      <section className="Products">{listProduct}</section>
    </>
  );
}
