const Header = () => {
	return (
		<header className="header">
			<figure className="header__figure">
				<img
					src="./src/assets/image/Header.jpg"
					alt=""
					className="header__img"
				/>
				<hr className="header__hr" />
				<figcaption className="header__figcaption">
					<h1 className="header__h1">¡Pizzería Mamma Mia!</h1>
					<p className="header__p">
						¡Tenemos las mejores pizzas que podrás encontrar!
					</p>
				</figcaption>
			</figure>
		</header>
	);
};

export default Header;
