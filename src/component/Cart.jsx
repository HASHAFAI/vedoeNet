import AllItems from "./AllItems";
import TableContacts from "./TableContants";
import { useDataCart } from "../context/dataContext";
import { generateUniqueId } from "../functions/function";
import { useEffect, useState } from "react";

export default function Cart() {
  const { cart } = useDataCart();
  const [totalCart, setTotalCart] = useState({
    totalNumber: 0,
    totalPrice: 0,
  });
  const listCart = cart.map((product) => {
    return (
      <TableContacts
        key={generateUniqueId()}
        idItem={generateUniqueId()}
        id={product.id}
        name={product.name}
        number={product.valueNumber}
        price={product.price}
        image={product.image}
      />
    );
  });
  useEffect(() => {
    let totalPrice = 0;
    let totalNumber = 0;
    if (cart.length > 0) {
      totalPrice = cart.reduce((acc, current) => {
        return (
          acc + +current.price.match(/\$?\d+(\.\d+)?/g) * current.valueNumber
        );
      }, 0);

      totalNumber = cart.reduce((acc, current) => {
        return acc + +current.valueNumber;
      }, 0);
    }
    setTotalCart({ totalPrice, totalNumber });
  }, [cart]);
  return (
    <>
      <section className="cart">
        <h4 className="label-yourCart">Your cart</h4>
        <table className="table-cart">
          <tbody>{listCart}</tbody>
          <tfoot>
            <AllItems
              totalNumber={totalCart.totalNumber}
              totalPrice={totalCart.totalPrice}
            />
          </tfoot>
        </table>
      </section>
    </>
  );
}
