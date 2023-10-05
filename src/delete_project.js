import "./style.css";
import { tasksContainer } from "./main_content";

function deleteProject(projectIndex) {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    projects.splice(projectIndex, 1);
    tasksContainer.textContent = "";
    localStorage.setItem('projects', JSON.stringify(projects));
}

export default deleteProject;