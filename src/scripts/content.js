// adopted from: https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
function waitForElement(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

const pageUrl = window.location.href;
const kaggle_notebooks = "https://www.kaggle.com/code/";
const notebooks = "https://www.kaggleusercontent.com/";

if (pageUrl.startsWith(kaggle_notebooks)) {
    waitForElement("iframe#rendered-kernel-content").then((iframe) => {
        const sourceCodeUrl = iframe.src;
        const linkButton = document.createElement("button");
        linkButton.id = "link-to-source";
        linkButton.innerHTML = "Open souce code in a new tab";
        linkButton.onclick = () => {
            window.open(sourceCodeUrl, '_blank').focus();
        };
        waitForElement("div[data-testid='notebook-detail-render-tid']").then((notebook) => {
            notebook.prepend(linkButton);
        });
    })
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
