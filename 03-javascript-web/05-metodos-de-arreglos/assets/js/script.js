const enterInput = document.querySelector(".todo__input");
const clickButton = document.querySelector(".todo__button");
const todoDivContainer = document.querySelector(".todo__div--container");
const seeId = document.querySelector(".id__ul");
const seeList = document.querySelector(".task__ul");
const seeCheck = document.querySelector(".change__ul");
const seeDelete = document.querySelector(".deletetask__ul");

const tasks = [];

clickButton.addEventListener("click", () => {
	const newTask = enterInput.value;

	if (newTask === "") {
		enterInput.placeholder = "Campo requerido";
		return;
	} else {
		enterInput.placeholder = "Ingrese una tarea";
	}

	tasks.push({ text: newTask, checked: false });
	enterInput.value = "";

	renderHTML();
});

function renderHTML() {
	let htmlTaskId = "";
	let htmlTaskUl = "";
	let htmlDeleteTask = "";
	let htmlChangeCheck = "";

	tasks.forEach((task, index) => {
		htmlTaskId += `
           	<ul class="id__ul">
		 		<li>${index + 1}</li>  
		   	</ul>
		`;

		htmlTaskUl += `
			<ul class="task__ul">
				<li>${task.text}</li>
			</ul>
		`;

		htmlDeleteTask += `
			<ul class="deletetask__ul">
				<li class="deletetask__li">
					<button class="deletetask__button" onclick="deleteTask(${index})">
						<i class="deletetask__i bi bi-x-lg"></i>
					</button>
				</li>
			</ul>
		`;

		htmlChangeCheck += `
			<ul class="change__ul">
				<li class="change__li">
					<input type="checkbox" class="change__input" onclick="checkTask(${index})" ${
			task.checked ? "checked" : ""
		} />
				</li>
			</ul>
		`;
	});

	seeId.innerHTML = htmlTaskId;
	seeList.innerHTML = htmlTaskUl;
	seeDelete.innerHTML = htmlDeleteTask;
	seeCheck.innerHTML = htmlChangeCheck;

	if (tasks.length >= 5) {
		todoDivContainer.style.height = `${tasks.length * 2}em`;
	}
}

function deleteTask(id) {
	tasks.splice(id, 1);
	renderHTML();
}

function checkTask(id) {
	tasks[id].checked = !tasks[id].checked;
	renderHTML();
}
