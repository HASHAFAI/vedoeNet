import { useDataCart } from "../context/dataContext";
export default function AllItems({ totalNumber, totalPrice }) {
  const { setCart } = useDataCart();
  return (
    <>
      <tr>
        <td colSpan="2">
          <p>All items</p>
        </td>
        <td>
          <p>{totalNumber}</p>
        </td>
        <td>
          <p>${totalPrice.toFixed(2)}</p>
        </td>
        <td>
          <button
            className="btn-checkout"
            onClick={() => {
              setCart([]);
            }}
          >
            CHECK OUT ALL
          </button>
        </td>
      </tr>
    </>
  );
}
