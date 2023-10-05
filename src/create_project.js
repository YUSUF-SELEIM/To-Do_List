import "./style.css";
import Project from "./Project";

function createProject() {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];;
    var projectInput = document.getElementById('projectInput');
    var projectName = projectInput.value.trim();
    if (projectName == "") {
        alert("Project Name Cannot be empty");
        return
    }
    const newProject = new Project(projectName);
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));
}

export default createProject;