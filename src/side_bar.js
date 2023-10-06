/* eslint-disable camelcase */
/* eslint-disable no-undef */
import "./style.css";
import createProject from "./create_project";
import trashIcon from "./assets/trash.svg";
import Project from "./Project";
import deleteProject from "./delete_project";
import { updateTasksUI } from "./main_content";

const projectsContainer = document.getElementById("projects-container");
const welcome = document.getElementById("Welcome");

let globalProjectIndex = 0;
function createSideBar() {
	const projects = JSON.parse(localStorage.getItem("projects")) || [];
	// there is a default project in here that is created once which is triggered when we press
	if (projects.length === 0) {
		const defaultProject = new Project("Home");
		projects.unshift(defaultProject);
	}
	localStorage.setItem("projects", JSON.stringify(projects));

	const sideBar = document.getElementById("side-bar");
	sideBar.classList.add(
		"bg-[#526D82]",
		"w-full",
		"flex",
		"flex-col",
		"items-center",
		"space-y-4",
		"p-6",
		"md:w-1/4",
		"md:row-span-full",
		"col-span-4",
		"md:row-start-2",
		"md:col-span-full",
		"md:block",
		"shadow-2xl"
	);

	projectsContainer.classList.add("flex", "flex-col", "space-y-2", "w-full");

	const addProjectButton = document.getElementById("addProjectButton");
	addProjectButton.onclick = function () {
		createProject();
		updateProjectsUI();
	};
	updateProjectsUI();
}

function updateProjectsUI() {
	projectsContainer.textContent = "";
	const projectsToBeRendered = createProjectUI();
	console.log(projectsToBeRendered);

	projectsToBeRendered.forEach((project) => {
		projectsContainer.append(project);
	});
}
function createProjectUI() {
	const projects = JSON.parse(localStorage.getItem("projects")) || [];
	const projectsArrayToBeRendered = [];

	projects.forEach(function (project) {
		const projectDiv = document.createElement("div");
		projectDiv.classList.add(
			"flex",
			"justify-between",
			"items-center",
			"p-2",
			"bg-[#27374D]",
			"rounded-full",
			"border-[#D7E5CA]",
			"shadow-lg",
			"hover:scale-y-105",
			"hover:border-x-[5px]"
		);
		projectDiv.style.cursor = "pointer";

		const projectNameDiv = document.createElement("div");
		projectNameDiv.id = "pNameDiv";
		projectNameDiv.classList.add("text-2xl");
		projectNameDiv.innerText = project.name;

		projectNameDiv.addEventListener("click", function () {
			document.getElementById("tasks").textContent = "Tasks of " + project.name;

			const projectIndex = projects.findIndex(function (p) {
				return p.name === project.name;
			});

			globalProjectIndex = projectIndex;
			const main_content = document.getElementById("main-content");
			main_content.classList.remove("hidden");
			welcome.classList.add("hidden");
			// the problem was here
			updateTasksUI(projectIndex);

			// Remove the style from all projectDiv elements
			projectsArrayToBeRendered.forEach((project) => {
				project.classList.remove("border-x-[5px]");
			});

			// // Apply the style to the clicked projectDiv
			projectDiv.classList.add("border-x-[5px]");

			// console.log("Project Index:", projectIndex);
			// console.log(projects[projectIndex]);
			// console.log("from sidebar " + projectIndex)
		});
		const deleteButton = document.createElement("a");
		deleteButton.style.cursor = "pointer";
		const trashBin = new Image();
		trashBin.classList.add("hover:rotate-6");
		trashBin.src = trashIcon;
		if (projectNameDiv.innerText !== "Home") {
			deleteButton.append(trashBin);
		}
		deleteButton.addEventListener("click", function () {
			const projectIndex = projects.findIndex(function (p) {
				return p.name === project.name;
			});
			console.log("delete");
			console.log(project.name);
			deleteProject(projectIndex);
			// here i need to call something that sends zero or force the user to click on home
			const main_content = document.getElementById("main-content");
			main_content.classList.add("hidden");
			welcome.classList.remove("hidden");
			updateProjectsUI();
		});

		projectDiv.appendChild(projectNameDiv);
		projectDiv.appendChild(deleteButton);
		projectsArrayToBeRendered.push(projectDiv);
	});
	projectInput.value = "";

	return projectsArrayToBeRendered;
}

export { createSideBar, globalProjectIndex };
