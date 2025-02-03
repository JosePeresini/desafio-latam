import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (pizza) => {
		setCart((prevCart) => {
			const existingPizza = prevCart.find((item) => item.id === pizza.id);
			if (existingPizza) {
				return prevCart.map((item) =>
					item.id === pizza.id ? { ...item, count: item.count + 1 } : item
				);
			}
			return [...prevCart, { ...pizza, count: 1 }];
		});
	};

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
		<CartContext.Provider
			value={{ cart, addToCart, increaseCount, decreaseCount, totalPrice }}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
