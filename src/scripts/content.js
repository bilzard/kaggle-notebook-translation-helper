const pageUrl = window.location.href;
const kaggle_notebooks = "https://www.kaggle.com/code/";
const notebooks = "https://www.kaggleusercontent.com/";

if (pageUrl.startsWith(kaggle_notebooks)) {
    const notebook = document.querySelector("div[data-testid='notebook-detail-render-tid']");
    const sourceCodeUrl = document.querySelector("iframe#rendered-kernel-content").src;
    const linkButton = document.createElement("button");
    linkButton.id = "link-to-source";
    linkButton.innerHTML = "Open souce code in a new tab";
    linkButton.onclick = () => {
        window.open(sourceCodeUrl, '_blank').focus();
    };
    notebook.prepend(linkButton);
}
if (pageUrl.startsWith(notebooks)) {
    // enable scroll
    document.querySelector("body").style.overflowY = "auto";

    // disable translation on code
    const code_cells = document.querySelectorAll("div.code_cell");
    for (const code_cell of code_cells) {
        code_cell.classList.add("notranslate");
    }
}
