import "./style.css";
import trashIcon from './assets/trash.svg';
import createTask from './create_task'
import deleteTask from "./delete_task";
import taskDOne from "./task-done";
import { globalProjectIndex } from "./side_bar";

var tasksContainer = document.getElementById('tasks-container');
var welcome = document.getElementById('Welcome');
function createMainContent() {
    var mainContent = document.getElementById('main-content');
    mainContent.classList.add("p-6", "text-black", "h-full", "flex", "flex-col", "col-span-full", "md:col-start-2", "md:row-start-2")


    tasksContainer.classList.add("flex", "flex-col", "space-y-2");

    var addTaskButton = document.getElementById('addTaskButton');
    addTaskButton.onclick = function () {
        //the problem is how to make the globalIndex default to zero instead of clicking
        // it is solved by creating that Welcome Screen
        createTask(globalProjectIndex);
        updateTasksUI(globalProjectIndex);

    }
    welcome.classList.remove("hidden");
    welcome.classList.add("flex", "justify-center", "items-center", "text-3xl", "p-6", "text-[#000]", "text-center", "col-span-full", "md:col-start-2", "md:row-start-2")
    mainContent.classList.add("hidden");
}

function updateTasksUI(inWhichProjectIndex) {
    tasksContainer.textContent = "";
    var tasksToBeRendered = createTaskUI(inWhichProjectIndex);
    console.log(tasksToBeRendered);

    tasksToBeRendered.forEach((task) => {
        tasksContainer.append(task);

    });
}

function createTaskUI(inWhichProjectIndex) {
    var projects = JSON.parse(localStorage.getItem('projects')) || [];
    var tasksArrayToBeRendered = [];

    projects[inWhichProjectIndex].tasks.forEach(function (task) {
        var taskDiv = document.createElement("div");
        taskDiv.classList.add("flex", "justify-between", "items-center", "p-2", "bg-[#526D82]", "border-[#27374D]", "rounded-full", "shadow-lg", "hover:scale-y-105", "hover:border-l-[5px]");
        if (task.doneOrNot) {
            taskDiv.classList.add('task-done');
        } else {
            taskDiv.classList.remove('task-done');

        }
        var taskNameDiv = document.createElement("div");
        taskNameDiv.classList.add("text-2xl");
        taskNameDiv.innerText = task.name;

        taskNameDiv.addEventListener('click', function () {
            console.log("you clicked " + task.name)
            console.log("from main it is " + globalProjectIndex);
            taskDOne(task.name, globalProjectIndex);
            taskDiv.classList.toggle("task-done")

        });
        taskDiv.style.cursor = "pointer";
        var deleteButton = document.createElement("a");
        deleteButton.style.cursor = "pointer";
        var trashBin = new Image();
        trashBin.classList.add("hover:rotate-6")
        trashBin.src = trashIcon;
        deleteButton.append(trashBin);
        deleteButton.addEventListener("click", function () {
            console.log("delete")
            console.log(task.name);
            deleteTask(task.name, globalProjectIndex);
            updateTasksUI(globalProjectIndex);
        });

        taskDiv.appendChild(taskNameDiv);
        taskDiv.appendChild(deleteButton);
        tasksArrayToBeRendered.push(taskDiv);

    });
    taskInput.value = "";
    return tasksArrayToBeRendered;
}



export { createMainContent, tasksContainer, updateTasksUI };