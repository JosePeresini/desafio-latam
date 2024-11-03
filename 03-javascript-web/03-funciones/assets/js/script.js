/*
	!Ejercicio 3
	
*/

const ele = document.getElementById("ele1");

if (ele) {
	function pintar(elemento, color = "green") {
		elemento.style.backgroundColor = color;
		elemento.style.color = "black";
	}

	ele.addEventListener("click", function () {
		pintar(ele, "yellow");
	});
}
