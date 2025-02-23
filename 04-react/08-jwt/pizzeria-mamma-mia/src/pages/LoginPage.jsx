import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
	const { login } = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (email === "" || password === "") {
			setMessage("Todos los campos son obligatorios.");
			return;
		}

		if (password.length < 6) {
			setMessage("La contraseña debe tener al menos 6 caracteres.");
			return;
		}

		await login(email, password);
		setMessage("Inicio de sesión exitoso!");
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="login">
				<fieldset className="login__fieldset">
					<h2 className="login__h2">Iniciar Sesión</h2>
					<div className="login__div">
						<label htmlFor="email" className="login__label">
							E-Mail
						</label>
						<input
							id="email"
							className="login__input"
							name="email"
							onChange={(e) => setEmail(e.target.value)}
							placeholder="mail@mail.com"
							required
							type="email"
							value={email}
						/>
					</div>
					<div className="login__div">
						<label htmlFor="pass" className="login__label">
							Contraseña
						</label>
						<input
							id="pass"
							className="login__input"
							name="pass"
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Introduce tu contraseña"
							required
							type="password"
							value={password}
						/>
					</div>
					<div className="login__div--button">
						<button type="submit" className="login__button">
							Enviar
						</button>
					</div>
				</fieldset>
				<p className="login__p">
					{message || (
						<span className="login__span">{message ? "" : "¡Bienvenido!"}</span>
					)}
				</p>
			</form>
		</>
	);
};

export default Login;
