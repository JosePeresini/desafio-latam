import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CardPizza = ({ img, ingredients, name, price, id }) => {
	const { addToCart } = useContext(CartContext);

	return (
		<article className="cardpizza__article">
			<div className="cardpizza__div">
				<img src={img} alt={name} className="cardpizza__img" />
			</div>
			<header className="cardpizza__header">
				<h3 className="cardpizza__h3">Pizza {name}</h3>
				<hr className="cardpizza__hr--title" />
			</header>
			<p className="cardpizza__p">
				Ingredientes:
				<span className="cardpizza__span">
					{ingredients.map((ingredient, index) => (
						<span key={index}>
							{ingredient}
							{index < ingredients.length - 1 ? ", " : ""}
						</span>
					))}
				</span>
			</p>
			<hr className="cardpizza__hr--ingredients" /> {/* Moved outside of <p> */}
			<footer className="cardpizza__footer">
				<h4 className="cardpizza__h4">
					Precio: <span className="cardpizza__span--price">${price}</span>
				</h4>
				<div className="cardpizza__div--buttons">
					<Link to={`/pizza/${id}`} className="cardpizza__button">
						Ver Más 👀
					</Link>
					<button
						className="cardpizza__button"
						onClick={() => addToCart({ id, name, price, img, ingredients })}
					>
						Añadir 🛒
					</button>
				</div>
			</footer>
		</article>
	);
};

export default CardPizza;
