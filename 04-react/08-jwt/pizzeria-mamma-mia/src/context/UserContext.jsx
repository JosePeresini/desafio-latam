import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [email, setEmail] = useState(null);

	useEffect(() => {
		if (token) {
			getProfile();
		}
	}, [token]);

	const login = async (email, password) => {
		try {
			const response = await fetch("http://localhost:5000/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});
			const data = await response.json();
			if (response.ok) {
				setToken(data.token);
				setEmail(data.email);
				localStorage.setItem("token", data.token);
			} else {
				console.error("Login failed:", data.message, "Data sent:", {
					email,
					password,
				});
			}
		} catch (error) {
			console.error("Login error:", error);
		}
	};

	const register = async (email, password) => {
		try {
			const response = await fetch("http://localhost:5000/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});
			const data = await response.json();
			if (response.ok) {
				setToken(data.token);
				setEmail(data.email);
				localStorage.setItem("token", data.token);
			} else {
				console.error("Register failed:", data.message, "Data sent:", {
					email,
					password,
				});
			}
		} catch (error) {
			console.error("Register error:", error);
		}
	};

	const logout = () => {
		setToken(null);
		setEmail(null);
		localStorage.removeItem("token");
	};

	const getProfile = async () => {
		try {
			const response = await fetch("http://localhost:5000/api/auth/me", {
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			const data = await response.json();
			if (response.ok) {
				setEmail(data.email);
			} else {
				console.error("Get profile failed:", data.message);
			}
		} catch (error) {
			console.error("Get profile error:", error);
		}
	};

	return (
		<UserContext.Provider
			value={{ token, email, login, register, logout, getProfile }}
		>
			{children}
		</UserContext.Provider>
	);
};
