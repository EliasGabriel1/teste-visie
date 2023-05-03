import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
// import "./checkout.css";

function Checkout(): JSX.Element {
  const { cart, clearCart, atualizarCart } = useContext(AppContext);
  const [compraFeita, setCompraFeita] = useState(false);

  function handleCompraFeita() {
    clearCart();
    setCompraFeita(true);
  }

  // const handleChange = (itemId: number, value: number) => {
  //   atualizarCart(itemId, value);
  // }

  return (
    <div className="checkout">
      <h1>CARRINHO DE COMPRAS</h1>
      {!compraFeita ? (
        <>
          <ul>
            {cart.length > 0 ? (
              cart.map((item: any, index: number) => (
                <li key={index}>
                  <img alt="" width="200px" src={item.imageProduct} />
                  {item.productName} - R${item.Price}
                  quantidade: {item.quantidade}
                  {/* <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min={1}
                    max={10}
                    onChange={(e) => handleChange(item.id, e.target.valueAsNumber)}
                  /> */}
                </li>
              ))
            ) : (
              <div className="carrinhovazio">O CHECKOUT ESTÁ VAZIO</div>
            )}
          </ul>
          {cart.length > 0 ? (
            <button className="encerrar-compra-checkout" onClick={handleCompraFeita}>
              ENCERRAR COMPRA
            </button>
          ) : null}
        </>
      ) : (
        <div>
          <h1>COMPRA FEITA</h1>
          <a href="/">voltar ao inicio</a>
        </div>
      )}
    </div>
  );
}

export default Checkout;
