async function getCurrency() {
	try {
		const res = await fetch("./assets/js/mindicador.json");
		const data = await res.json();
		renderCurrency(data.currency);
		return data.currency;
	} catch (error) {
		console.log("Something went wrong", error.message);
	}
}

async function renderCurrency(data) {
	const conversorInput = document.querySelector(".conversor__input");
	const conversorSelect = document.querySelector(".conversor__select");
	const conversorSpanV = document.querySelector(".conversor__span--value");
	const conversorButton = document.querySelector(".conversor__button");
	const conversorSpanR = document.querySelector(".conversor__span--result");

	data.forEach((element) => {
		const option = document.createElement("option");

		option.value = element.code;
		option.textContent = element.name;
		option.dataset.value = element.measurement_value;
		option.className = "conversor__option";
		conversorSelect.appendChild(option);
	});
}
