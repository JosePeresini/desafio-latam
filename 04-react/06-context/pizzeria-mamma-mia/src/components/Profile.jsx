const Profile = () => {
	return (
		<>
			<section className="profile">
				<div className="profile__div">
					<img
						src="./src/assets/image/user.png"
						alt="User Profile"
						className="profile__img"
					/>
					<p className="profile__p">mail@mail.com</p>
				</div>
				<a href="#" className="profile__a">
					Cerrar Sesión
				</a>
			</section>
		</>
	);
};

export default Profile;
