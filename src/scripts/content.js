const pageUrl = window.location.href;
const notebook_source_url = "https://www.kaggleusercontent.com/";

if (pageUrl.startsWith(notebook_source_url)) {
    // disable translation on code
    const elements = document.querySelectorAll("div.code_cell, button");
    for (const element of elements) {
        element.classList.add("notranslate");
    }
}
