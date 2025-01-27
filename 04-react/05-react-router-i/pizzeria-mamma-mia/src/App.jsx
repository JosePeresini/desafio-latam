import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

import Home from "./pages/HomePage";
import Pizza from "./pages/PizzaPage";
import Cart from "./pages/CartPage";
import Register from "./pages/RegisterPage";
import Login from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

import "./assets/css/App.css";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="container">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pizza/p001" element={<Pizza />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
