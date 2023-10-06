import "./style.css";
import createHeader from "./header";
import { createSideBar } from "./side_bar";
import { createMainContent } from "./main_content";
import createFooter from "./footer";

function createUI() {
	const body = document.getElementById("body");
	body.classList.add(
		"min-h-screen",
		"bg-[#D7E5CA]",
		"grid",
		"grid-rows-layout",
		"grid-cols-4"
	);

	createSideBar();
	createMainContent();
	createHeader();
	createFooter();
}

export default createUI;
