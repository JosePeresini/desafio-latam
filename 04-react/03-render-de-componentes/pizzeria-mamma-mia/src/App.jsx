import Navbar from "./components/Navbar";
// import Home from "./components/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
// import Register from "./components/Register";
// import Login from "./components/Login";

import "./assets/css/App.css";

function App() {
	return (
		<div className="container">
			<Navbar />
			{/* <Home /> */}
			{/* <Register /> */}
			{/* <Login /> */}
			<Cart />
			<Footer />
		</div>
	);
}

export default App;
