import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
	const { cart, increaseCount, decreaseCount, totalPrice } =
		useContext(CartContext);
	const { token } = useContext(UserContext);
	const [message, setMessage] = useState("");

	const handleCheckout = async () => {
		const response = await fetch("http://localhost:5000/api/checkouts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ cart }),
		});
		const data = await response.json();
		if (response.ok) {
			setMessage("Compra realizada con éxito");
		} else {
			setMessage("Error al realizar la compra: " + data.message);
		}
	};

	return (
		<>
			<section className="cart">
				<h2 className="cart__h2">Detalle del pedido</h2>
				{cart.map((item) => (
					<article className="cart__article" key={item.id}>
						<header className="cart__header">
							<h3 className="cart__h3">{item.name}</h3>
							<img src={item.img} alt={item.name} className="cart__img" />
						</header>
						<footer className="price__footer">
							<p className="price__p">${item.price}</p>
							<button
								className="price__button"
								onClick={() => decreaseCount(item.id)}
							>
								-
							</button>
							<span className="price__span">{item.count}</span>
							<button
								className="price__button"
								onClick={() => increaseCount(item.id)}
							>
								+
							</button>
						</footer>
					</article>
				))}
				<article className="total">
					<p className="total__p">
						Total<span className="total__span">${totalPrice}</span>
					</p>
					<button
						className="total__button"
						disabled={!token}
						onClick={handleCheckout}
					>
						Pagar
					</button>
					{message && <p>{message}</p>}
				</article>
			</section>
		</>
	);
};

export default Cart;
