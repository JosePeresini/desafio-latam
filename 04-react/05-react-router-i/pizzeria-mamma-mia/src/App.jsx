import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/HomePage";
import Pizza from "./pages/PizzaPage";
import Cart from "./pages/CartPage";
import Register from "./pages/RegisterPage";
import Login from "./pages/LoginPage";

import "./assets/css/App.css";

function App() {
	return (
		<div className="container">
			<Navbar />
			<Home />
			<Register />
			<Login />
			<Cart />
			<Pizza />
			<Footer />
		</div>
	);
}

export default App;
