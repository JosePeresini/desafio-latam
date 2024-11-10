const navPage = {
	title: "Inmobiliaria ADL",
	sell: "En venta",
	rental: "En alquiler",
};

const nav = document.querySelector(".navbar");

nav.innerHTML = `
                    <div class="container">
				        <a class="navbar-brand" href="/index.html">${navPage.title}</a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/index.html">Inicio</a>
                            </li>
                                <li class="nav-item">
                                    <a class="nav-link" target="_blank" href="/propiedades_venta.html">${navPage.sell}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" target="_blank" href="/propiedades_alquiler.html">${navPage.rental}</a>
                                </li>
                            </ul>
                        </div>
			        </div>
                `;

// Sell

const sellUsufruct = [
	{
		cost: 5000,
		description:
			"Este apartamento de lujo está ubicado en una exclusiva zona residencial",
		id: 1,
		image:
			"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
		pets: {
			iconPet: "fa-solid fa-ban",
			pet: false,
			petColor: "text-danger",
		},
		places: {
			bath: 4,
			descBath: "Baños",
			descRoom: "Habitaciones",
			rooms: 4,
		},
		smokes: {
			iconSmoke: "fas fa-smoking-ban",
			smoke: false,
			smokeColor: "text-danger",
		},
		title: "Apartamento de lujo en zona exclusiva",
		ubication: {
			adress: "Luxury Lane, Prestige Suburb,",
			ca: "CA 45678",
			number: 128,
		},
	},
	{
		cost: 1200,
		description:
			"Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
		id: 2,
		image:
			"https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
		pets: {
			iconPet: "fas fa-paw",
			pet: true,
			petColor: "text-success",
		},
		places: {
			bath: 1,
			descBath: "Baños",
			descRoom: "Habitaciones",
			rooms: 2,
		},
		smokes: {
			iconSmoke: "fas fa-smoking",
			smoke: true,
			smokeColor: "text-success",
		},

		title: "Apartamento acogedor en la montaña",
		ubication: {
			adress: "Mountain Road, Summit Peaks,",
			ca: "CA 23456",
			number: 789,
		},
	},
	{
		cost: 4500,
		description:
			"Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
		id: 3,
		image:
			"https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
		pets: {
			iconPet: "fas fa-paw",
			pet: true,
			petColor: "text-success",
		},
		places: {
			bath: 3,
			descBath: "Baños",
			descRoom: "Habitaciones",
			rooms: 3,
		},
		smokes: {
			iconSmoke: "fas fa-smoking-ban",
			smoke: false,
			smokeColor: "text-danger",
		},
		title: "Penthouse de lujo con terraza panorámica",
		ubication: {
			adress: " Skyline Avenue, Skyview City,",
			ca: "CA 56789",
			number: 567,
		},
	},
];

const sellSelection = document.querySelector("#venta .row");

let sellPage = "";

for (let sell of sellUsufruct) {
	sellPage += `
			<div class="col-md-4 mb-4">
				<div class="card">
					<img
						src="${sell.image}"
						class="card-img-top"
						alt="${sell.title}"
					/>
					<div class="card-body">
						<h5 class="card-title">
							${sell.title}
						</h5>
						<p class="card-text">
							${sell.description}
						</p>
						<p><i class="fas fa-map-marker-alt"></i>
						${sell.ubication.number}
						${sell.ubication.adress} ${sell.ubication.ca}</p>
						<p>
							<i class="fas fa-bed"></i> ${sell.places.rooms} ${sell.places.descRoom} |
							<i class="fas fa-bath"></i> ${sell.places.bath} ${sell.places.descBath} 
						</p>
						<p><i class="fas fa-dollar-sign"></i>${sell.cost}</p>
						<p class="${sell.smokes.smokeColor}">
							<i class="${sell.smokes.iconSmoke}"></i>  ${
		sell.smokes.smoke ? "Permitido fumar" : "No se permite fumar"
	}
						</p>
						<p class="${sell.pets.petColor}">
							<i class="${sell.pets.iconPet}"></i>  ${
		sell.pets.pet ? "Mascotas permitidas" : "No se permiten mascotas"
	}
						</p>
					</div>
				</div>
			</div>
	`;
}

if (sellSelection) {
	sellSelection.innerHTML = sellPage;
}

// Rental

const rentalUsufruct = [
	{
		cost: 2000,
		description:
			"Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo",
		id: 1,
		image:
			"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
		pets: {
			iconPet: "fas fa-paw",
			pet: true,
			petColor: "text-success",
		},
		places: {
			bath: 2,
			descBath: "Baños",
			descRoom: "Habitaciones",
			rooms: 2,
		},
		smokes: {
			iconSmoke: "fas fa-smoking-ban",
			smoke: false,
			smokeColor: "text-danger",
		},
		title: "Apartamento en el centro de la ciudad",
		ubication: {
			adress: "Main Street, Anytown",
			ca: "CA 91234",
			number: 123,
		},
	},
	{
		cost: 2500,
		description:
			"Este hermoso apartamento ofrece una vista impresionante al mar",
		id: 2,
		image:
			"https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
		pets: {
			iconPet: "fa-solid fa-ban",
			pet: true,
			petColor: "text-success",
		},
		places: {
			bath: 3,
			descBath: "Baños",
			descRoom: "Habitaciones",
			rooms: 3,
		},
		smokes: {
			iconSmoke: "fas fa-smoking-ban",
			smoke: true,
			smokeColor: "text-success",
		},
		title: "Apartamento luminoso con vista al mar",
		ubication: {
			adress: "Ocean Avenue, Seaside Town",
			ca: "CA 56789",
			number: 456,
		},
	},
	{
		cost: 2200,
		description:
			"Este elegante condominio moderno está ubicado en una tranquila zona residencial",
		id: 3,
		image:
			"https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
		pets: {
			iconPet: "fa-solid fa-ban",
			pet: false,
			petColor: "text-danger",
		},
		places: {
			bath: 2,
			descBath: "Baños",
			descRoom: "Habitaciones",
			rooms: 2,
		},
		smokes: {
			iconSmoke: "fas fa-smoking-ban",
			smoke: false,
			smokeColor: "text-danger",
		},
		title: "Condominio moderno en zona residencial",
		ubication: {
			adress: "Main Street, Anytown",
			ca: "CA 91234",
			number: 123,
		},
	},
];

const rentalSelection = document.querySelector("#alquiler .row");

let rentalPage = "";

for (let rental of rentalUsufruct) {
	rentalPage += `
				<div class="col-md-4 mb-4">
					<div class="card">
							<img
							src="${rental.image}"
							class="card-img-top"
							alt="${rental.title}"
						/>
						<div class="card-body">
							<h5 class="card-title">
							${rental.title}
							</h5>
							<p class="card-text">
							${rental.description}
							</p>
							<p>
							<i class="fas fa-map-marker-alt"></i>
								${rental.ubication.number} ${rental.ubication.adress},
								${rental.ubication.ca}
							</p>
							<p>
								<i class="fas fa-bed"></i> ${rental.places.rooms} ${rental.places.descRoom} |
								<i class="fas fa-bath"></i> ${rental.places.bath} ${rental.places.descBath} 
							</p>
							<p><i class="fas fa-dollar-sign"></i>${rental.cost}</p>
							<p class="${rental.smokes.smokeColor}">
								<i class="${rental.smokes.iconSmoke}"></i>  ${
		rental.smokes.smoke ? "Permitido fumar" : "No se permite fumar"
	}
							</p>
							<p class="${rental.pets.petColor}">
								<i class="${rental.pets.iconPet}"></i>  ${
		rental.pets.pet ? "Mascotas permitidas" : "No se permiten mascotas"
	}
							</p>
					</div>
				</div>
			</div>
	`;
}

if (rentalSelection) {
	rentalSelection.innerHTML = rentalPage;
}
