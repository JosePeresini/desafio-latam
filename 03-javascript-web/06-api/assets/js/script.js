async function getCurrency() {
	try {
		const res = await fetch("./assets/js/mindicador.json");
		const data = await res.json();
		renderCurrency(data);
		return data.currency;
	} catch (error) {
		console.log("Something went wrong", error.message);
	}
}
