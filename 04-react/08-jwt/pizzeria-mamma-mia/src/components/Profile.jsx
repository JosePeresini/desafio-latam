import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
	const { email, getProfile, logout, token } = useContext(UserContext);

	useEffect(() => {
		if (token) {
			getProfile();
		}
	}, [token]);

	return (
		<>
			<section className="profile">
				<div className="profile__div">
					<img
						src="./src/assets/image/user.png"
						alt="User Profile"
						className="profile__img"
					/>
					<p className="profile__p">{email}</p>
				</div>
				<a href="#" className="profile__a" onClick={logout}>
					Cerrar Sesión
				</a>
			</section>
		</>
	);
};

export default Profile;
