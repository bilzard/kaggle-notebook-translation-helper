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

if (!document.querySelector("button#link-to-source")) {
    waitForElement("iframe#rendered-kernel-content").then((iframe) => {
        const sourceCodeUrl = iframe.src;
        const linkButton = document.createElement("button");
        linkButton.id = "link-to-source";
        linkButton.className = "iblsMn";
        const span = document.createElement("span");
        linkButton.innerHTML = `<span class=${"iblsMn"}>Display IFrame</span>`;
        linkButton.onclick = () => {
            window.open(sourceCodeUrl, '_blank').focus();
        };
        waitForElement("div.sc-kvqHdt").then((notebook) => {
            notebook.prepend(linkButton);
        });
    });
}
