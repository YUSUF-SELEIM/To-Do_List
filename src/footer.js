import "./style.css";

function createFooter() {
    var footer = document.getElementById('footer');
    footer.classList.add("bg-[#27374D]", "w-full", "col-span-full", "p-4", "flex", "justify-center", "shadow-xl");

    var title = document.createElement('div');
    title.innerHTML = '<a href="https://github.com/YUSUF-SELEIM"><i class="fa fa-github"></i>@YUSUF-SELEIM</a>';
    footer.append(title);
}

export default createFooter;