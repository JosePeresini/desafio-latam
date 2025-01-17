const Navbar = () => {
	const total = 25.0;
	const token = false;

	return (
		<nav className="navbar">
			<a className="navbar__a" href="#">
				Pizzería Mamma Mia!
			</a>
			<menu className="navbar__menu">
				<i className="navbar__i bi bi-list"></i>
			</menu>
			<ul className="navbar__ul">
				<li className="navbar__li">
					<a className="navbar__a--link" href="">
						🍕 Home
					</a>
				</li>
				<li className="navbar__li">
					<a className="navbar__a--link" href="">
						🔓 Profile
					</a>
				</li>
				<li className="navbar__li">
					<a className="navbar__a--link" href="">
						🔒 Logout
					</a>
				</li>
				<li className="navbar__li">
					<a className="navbar__a--link" href="">
						🔐 Login
					</a>
				</li>
				<li className="navbar__li">
					<a className="navbar__a--link" href="">
						🔐 Register
					</a>
				</li>
			</ul>
			<a className="navbar__a--cart" href="#">
				🛒 Total: 25.000
			</a>
		</nav>
	);
};

export default Navbar;
