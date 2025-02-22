import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";

const Home = () => {
	const [info, setInfo] = useState([]);

	useEffect(() => {
		dataPizza();
	}, []);

	const dataPizza = async () => {
		const url = "http://localhost:5000/api/pizzas";
		const resp = await fetch(url);
		const data = await resp.json();
		setInfo(data);
	};

	return (
		<>
			<Header />
			<section className="cardpizza">
				<div className="cardpizza__div--container">
					{info.map((pizza) => (
						<CardPizza
							key={pizza.id}
							id={pizza.id}
							name={pizza.name}
							price={pizza.price}
							ingredients={pizza.ingredients}
							img={pizza.img}
						/>
					))}
				</div>
			</section>
		</>
	);
};

export default Home;
