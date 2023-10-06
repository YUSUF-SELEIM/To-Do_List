import "./style.css";

function taskDOne(taskName, projectIndex) {
	const projects = JSON.parse(localStorage.getItem("projects")) || [];
	projects[projectIndex].tasks.forEach((task) => {
		if (task.name === taskName) {
			if (task.doneOrNot) {
				task.doneOrNot = false;
			} else {
				task.doneOrNot = true;
			}
		}
	});
	localStorage.setItem("projects", JSON.stringify(projects));
}

export default taskDOne;
