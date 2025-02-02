import { pizzaCart } from "../assets/js/pizzas";
import { useState } from "react";

const Cart = () => {
	const [cart, setCart] = useState(pizzaCart);

	const increaseCount = (id) => {
		setCart((prevCart) =>
			prevCart.map((item) =>
				item.id === id ? { ...item, count: item.count + 1 } : item
			)
		);
	};

	const decreaseCount = (id) => {
		setCart((prevCart) =>
			prevCart
				.map((item) =>
					item.id === id ? { ...item, count: item.count - 1 } : item
				)
				.filter((item) => item.count > 0)
		);
	};

	const totalPrice = cart.reduce(
		(total, item) => total + item.price * item.count,
		0
	);

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
					<button className="total__button">Pagar</button>
				</article>
			</section>
		</>
	);
};

export default Cart;
