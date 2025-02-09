import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<>
			<section className="notfound">
				<div className="notfound__div">
					<h2 className="notfound__h2">
						<span className="notfound__span">4</span>
						<img
							src="./src/assets/image/error-404.ico"
							alt=""
							className="notfound__img"
						/>
						<span className="notfound__span">4</span>
					</h2>
					<p className="notfound__p">Not Found</p>
				</div>
				<Link to={"/"} className="notfound__link">
					Volver al inicio
				</Link>
			</section>
		</>
	);
};

export default NotFound;
