// disable translation on code & UI elements
const elements = document.querySelectorAll("div.code_cell");
for (const element of elements) {
    element.classList.add("notranslate");
}

// remove button elements
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.remove()
});

/*
 * insert table of contents
 */
const toc = document.createElement("div");
toc.id = "_toc";
const title = document.createElement("div");
title.innerHTML = "Table of Contents";
title.id = "_toc-title";
toc.appendChild(title);
for (const element of document.querySelectorAll("h1")) {
    const sectionTitle = element.innerText;
    const ul = document.createElement("div");
    ul.className = "_ul";
    const href = element.querySelector("a").getAttributeNode("href").value;
    const link = document.createElement("a");
    link.href = href;
    link.innerHTML = sectionTitle;
    link.target = "_self";
    ul.appendChild(link);
    toc.appendChild(ul);
}
const body = document.querySelector("body");
body.appendChild(toc);
