const pageUrl = window.location.href;
const notebook_source_url = "https://www.kaggleusercontent.com/";

if (pageUrl.startsWith(notebook_source_url)) {
    // enable scroll
    document.querySelector("body").style.overflowY = "auto";

    // disable translation on code
    const code_cells = document.querySelectorAll("div.code_cell");
    for (const code_cell of code_cells) {
        code_cell.classList.add("notranslate");
    }
}
