import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Register from "./components/Register";
// import Login from "./components/Login";
// import Cart from "./components/Cart";
import Pizza from "./components/Pizza";
import Footer from "./components/Footer";
import "./assets/css/App.css";

function App() {
	return (
		<div className="container">
			<Navbar />
			{/* <Home /> */}
			{/* <Register />
			<Login />
			<Cart /> */}
			<Pizza />
			<Footer />
		</div>
	);
}

export default App;
