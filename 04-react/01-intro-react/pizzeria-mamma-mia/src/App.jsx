import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./assets/css/App.css";

function App() {
	return (
		<div className="container">
			<Navbar />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
