import "./style.css";
import hamMenuButton from './assets/hamMenuButton.svg';

function createHeader() {
    var header = document.getElementById('header');
    header.classList.add("bg-[#27374D]", "w-full", "col-span-full", "p-8", "flex", "justify-between", "shadow-xl");

    var title = document.createElement('div');
    title.textContent = "To-Do List ✔️";
    title.classList.add("text-4xl")

    var hamMenu = new Image();
    hamMenu.src = hamMenuButton;
    hamMenu.classList.add("md:hidden")

    var sideBar = document.getElementById('side-bar');

    hamMenu.onclick = function () {
        sideBar.classList.toggle("hidden");
    }

    header.append(title, hamMenu);
}

export default createHeader;