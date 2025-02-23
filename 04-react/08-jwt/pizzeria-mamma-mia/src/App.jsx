import { Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartContext";
import { UserProvider } from "./context/UserContext"; // Ensure this import is correct

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

import Home from "./pages/HomePage";
import Pizza from "./pages/PizzaPage";
import Cart from "./pages/CartPage";
import Register from "./pages/RegisterPage";
import Login from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import PizzaPage from "./pages/PizzaPage";

import "./assets/css/App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
	return (
		<UserProvider>
			<CartProvider>
				<div className="container">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/pizza/p001" element={<Pizza />} />
						<Route path="/pizza/:id" element={<PizzaPage />} />
						<Route path="/cart" element={<Cart />} />
						<Route
							path="/register"
							element={
								<PublicRoute>
									<Register />
								</PublicRoute>
							}
						/>
						<Route
							path="/login"
							element={
								<PublicRoute>
									<Login />
								</PublicRoute>
							}
						/>
						<Route
							path="/profile"
							element={
								<ProtectedRoute>
									<Profile />
								</ProtectedRoute>
							}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
					<Footer />
				</div>
			</CartProvider>
		</UserProvider>
	);
}

export default App;
