import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PizzaPage = () => {
	const { id } = useParams();
	const [info, setInfo] = useState(null);

	useEffect(() => {
		const fetchPizza = async () => {
			const url = `http://localhost:5000/api/pizzas/${id}`;
			const res = await fetch(url);
			const data = await res.json();
			setInfo(data);
		};
		fetchPizza();
	}, [id]);

	if (!info) {
		return <p>Loading...</p>;
	}

	return (
		<section className="pizza">
			<article className="pizza__article">
				<header className="pizza__header">
					<h3 className="pizza__h3">Pizza {info.name}</h3>
					<p className="pizza__span"> ${info.price}</p>
				</header>
				<p className="pizza__p">
					Ingredientes:
					<span className="pizza__span--ing">
						{info.ingredients && info.ingredients.join(", ")}
					</span>
				</p>
				<img
					src={info.img}
					alt={`pizza img ` + info.name}
					className="pizza__img"
				/>
				<footer className="pizza__footer">
					<img
						src={info.img}
						alt={`pizza img ` + info.name}
						className="pizza__img--desc"
					/>
					<p className="pizza__p--desc">{info.desc}</p>
				</footer>
			</article>
		</section>
	);
};

export default PizzaPage;
