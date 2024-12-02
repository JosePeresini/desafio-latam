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

	conversorSelect.addEventListener("change", (event) => {
		const selectedOption = event.target.selectedOptions[0];
		const value = selectedOption.dataset.value;

		conversorSpanV.textContent = value;
	});

	conversorButton.addEventListener("click", () => {
		const selectedOption = conversorSelect.selectedOptions[0];
		const value = Number(selectedOption.dataset.value);
		const inputValue = Number(conversorInput.value);

		if (!isNaN(inputValue) && !isNaN(value) && inputValue > 0) {
			const result = inputValue * value;
			conversorSpanR.textContent = result.toFixed(2);
		} else {
			conversorSpanR.textContent = "0";
		}
	});

	conversorInput.addEventListener("keydown", (event) => {
		if (
			event.key === "e" ||
			event.key === "E" ||
			event.key === "+" ||
			event.key === "-"
		) {
			alert("Ingrese un número");
			event.preventDefault();
		}
	});
}

function configChart(data) {
	const backgroundColor = "#fff";
	const color = "#09f";
	const type = "line";
	const money = data.map((money) => money.name);
	const title = "Monedas";
	const values = data.map((money) => {
		const value = money.measurement_value;
		return Number(value);
	});

	const config = {
		type: type,
		data: {
			labels: money,
			datasets: [
				{
					label: title,
					borderColor: color,
					data: values,
				},
			],
		},
	};
	return config;
}

async function render() {
	const currency = await getCurrency();
	const config = configChart(currency);
	const chartDOM = document.querySelector(".chart__canvas");

	new Chart(chartDOM, config);
}

render();
