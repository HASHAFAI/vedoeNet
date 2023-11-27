import Product from "./Product";
import { useParams } from "react-router-dom";
import { generateUniqueId } from "../functions/function";
import { useState } from "react";
import { useData, useDataCart, useTost } from "../context/dataContext";
import NotFound from "./NotFound";

export default function DescriptionProduct() {
  const [count, setCount] = useState(3);
  const [valueNumber, setValueNumber] = useState(1);
  const { cart, setCart } = useDataCart();
  const data = useData();
  const { IdProduct } = useParams();
  const { fuTost } = useTost();

  const theProduct = data.find((product) => {
    return product.id === +IdProduct;
  });
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
  if (theProduct) {
    return (
      <>
        <section className="header-DescriptionProduct">
          <div className="s-img">
            <div>
              <img src={require(`./../${theProduct.image}`)} alt="" />
            </div>
            <div>
              <img src={require(`./../${theProduct.image}`)} alt="" />
            </div>
            <div>
              <img src={require(`./../${theProduct.image}`)} alt="" />
            </div>
          </div>
          <div className="l-img">
            <img src={require(`./../${theProduct.image}`)} alt="" />
          </div>
          <div className="description">
            <h2>{theProduct.price}</h2>
            <h3>{theProduct.name}</h3>
            <p>{theProduct.description}</p>
            <div className="choses">
              <div className="choses-color">
                <span className="bold">color: </span>
                <span> pink</span>
                <div className="pink"></div>
                <div className="blue"></div>
                <div className="black"></div>
              </div>
              <div className="choses-number">
                <input
                  type="number"
                  value={valueNumber}
                  onChange={(event) => setValueNumber(event.target.value)}
                />
                <button
                  onClick={() => {
                    fuTost();
                    setCart([...cart, { ...theProduct, valueNumber }]);
                    setValueNumber(1);
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </section>
        <h2 className="like">Might also like</h2>
        <section className="Products">{listProduct}</section>

        <button
          className="more-products"
          onClick={() => {
            setCount(count + 3);
          }}
        >
          MORE PRODUCTS
        </button>
      </>
    );
  } else {
    return <NotFound />;
  }
}
