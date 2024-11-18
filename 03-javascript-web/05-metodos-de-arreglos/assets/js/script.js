const todoDivContainer = document.querySelector(".todo__div--container");
const enterInput = document.querySelector(".todo__input");
const clickButton = document.querySelector(".todo__button");
const seeId = document.querySelector(".id__ul");
const seeList = document.querySelector(".task__ul");

const tasks = [];

clickButton.addEventListener("click", () => {
	const newTask = enterInput.value;

	if (newTask === "") {
		enterInput.placeholder = "Campo requerido";
		return;
	} else {
		enterInput.placeholder = "Ingrese una tarea";
	}

	tasks.push(newTask);
	enterInput.value = "";

	renderHTML();
});
