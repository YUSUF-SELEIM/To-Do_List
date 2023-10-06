import "./style.css";

function deleteTask(taskName, projectIndex) {
	// we get the project Index to know which project to delete the task from
	const projects = JSON.parse(localStorage.getItem("projects")) || [];
	// Find the index of the task with the given name in the tasks array
	const taskIndex = projects[projectIndex].tasks.findIndex(
		(task) => task.name === taskName
	);
	if (taskIndex !== -1) {
		// Remove the task from the tasks array
		projects[projectIndex].tasks.splice(taskIndex, 1);
		// Update the local storage with the updated tasks array
		localStorage.setItem("projects", JSON.stringify(projects));
	}
}
export default deleteTask;
