import { useState } from "react";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (email === "" || password === "" || confirmPassword === "") {
			setMessage("Todos los campos son obligatorios.");
			return;
		}

		if (password.length < 6) {
			setMessage("La contraseña debe tener al menos 6 caracteres.");
			return;
		}

		if (password !== confirmPassword) {
			setMessage("Las contraseñas no coinciden.");
			return;
		}

		setMessage("Registro exitoso!");
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="register">
				<fieldset className="register__fieldset">
					<h2 className="register__h2">Registrarse</h2>
					<div className="register__div">
						<label htmlFor="email" className="register__label">
							E-Mail
						</label>
						<input
							className="register__input"
							id="email"
							name="email"
							onChange={(e) => setEmail(e.target.value)}
							placeholder="mail@mail.com"
							required
							type="email"
							value={email}
						/>
					</div>
					<div className="register__div">
						<label htmlFor="pass" className="register__label">
							Contraseña
						</label>
						<input
							className="register__input"
							id="pass"
							name="pass"
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Introduce tu contraseña"
							required
							type="password"
							value={password}
						/>
					</div>
					<div className="register__div">
						<label htmlFor="confirmPass" className="register__label">
							Confirmar contraseña
						</label>
						<input
							className="register__input"
							id="confirmPass"
							name="confirmPass"
							onChange={(e) => setConfirmPassword(e.target.value)}
							placeholder="Introduce tu contraseña"
							required
							type="password"
							value={confirmPassword}
						/>
					</div>
					<div className="register__div--button">
						<button type="submit" className="register__button">
							Enviar
						</button>
					</div>
				</fieldset>
				<p className="register__p">
					{message || (
						<span className="register__span">
							{message ? "" : "¡Bienvenido!"}
						</span>
					)}
				</p>
			</form>
		</>
	);
};

export default Register;
