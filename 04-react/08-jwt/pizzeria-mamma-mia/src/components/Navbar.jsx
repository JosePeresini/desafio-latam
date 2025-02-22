import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
	const { totalPrice } = useContext(CartContext);
	const { token, logout } = useContext(UserContext);

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
					<Link to="/" className="navbar__a--link">
						🍕 Home
					</Link>
				</li>
				{token ? (
					<>
						<li className="navbar__li">
							<Link to="/profile" className="navbar__a--link">
								🔓 Profile
							</Link>
						</li>
						<li className="navbar__li">
							<a className="navbar__a--link" onClick={logout}>
								🔒 Logout
							</a>
						</li>
					</>
				) : (
					<>
						<li className="navbar__li">
							<Link to="/login" className="navbar__a--link">
								🔐 Login
							</Link>
						</li>
						<li className="navbar__li">
							<Link to="/register" className="navbar__a--link">
								🔐 Register
							</Link>
						</li>
					</>
				)}
			</ul>
			<Link to={"/cart"} className="navbar__a--cart">
				🛒 Total: ${totalPrice}
			</Link>
		</nav>
	);
};

export default Navbar;
