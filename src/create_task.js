import "./style.css";
import Task from "./task";

function createTask(projectIndex) {
	const projects = JSON.parse(localStorage.getItem("projects")) || [];
	const taskInput = document.getElementById("taskInput");
	const taskName = taskInput.value.trim();
	if (taskName === "") {
		alert("Task Name Cannot be empty");
		return;
	}
	const newTask = new Task(taskName);
	projects[projectIndex].tasks.push(newTask);
	localStorage.setItem("projects", JSON.stringify(projects));
}
export default createTask;
