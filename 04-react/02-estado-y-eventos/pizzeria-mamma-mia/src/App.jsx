import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";

import "./assets/css/App.css";

function App() {
	return (
		<div className="container">
			<Navbar />
			<Home />
			<Register />
			<Login />
			<Footer />
		</div>
	);
}

export default App;
