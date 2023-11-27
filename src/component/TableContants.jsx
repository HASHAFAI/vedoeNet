import { useDataCart } from "../context/dataContext";
export default function TableContacts({
  name,
  number,
  price,
  image,
  id,
  idItem,
}) {
  const { setCart } = useDataCart();
  return (
    <>
      <tr>
        <td>
          <img src={require(`./../${image}`)} alt="" />
        </td>
        <td>
          <p>{name}</p>
        </td>
        <td>
          <p>{number}</p>
        </td>
        <td>
          <p>{price}</p>
        </td>
        <td>
          <button
            onClick={() => {
              setCart((prev) => {
                const index = prev.findIndex(
                  (item) => item.id === id && item.valueNumber === number
                );
                if (index !== -1) {
                  prev.splice(index, 1);
                }
                return [...prev];
              });
            }}
          >
            CHECK OUT
          </button>
        </td>
      </tr>
    </>
  );
}
