// disable translation on code & UI elements
document.querySelectorAll("div.code_cell").forEach(code_cell => {
    code_cell.classList.add("notranslate");
});

// remove button elements
document.querySelectorAll("button").forEach(button => {
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

document.querySelectorAll("h1").forEach(section_title => {
    const sectionTitle = section_title.innerText;
    const ul = document.createElement("div");
    ul.className = "_ul";
    const href = section_title.querySelector("a").getAttributeNode("href").value;
    const link = document.createElement("a");
    link.href = href;
    link.innerHTML = sectionTitle;
    link.target = "_self";
    ul.appendChild(link);
    toc.appendChild(ul);
});
document.querySelector("body").appendChild(toc);
