function waitForElements(selector, rootNode = document.body) {
    return new Promise(resolve => {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (typeof node.matches === "function" && node.matches(selector)) {
                        // TODO: suppress unnecessary function calls
                        resolve(document.querySelectorAll(selector));
                        observer.disconnect();
                    }
                });
            });
        });

        observer.observe(rootNode, {
            attributes: false,
            childList: true,
            subtree: true
        });
    });
}

// disable translation on code & UI elements
document.querySelectorAll("pre").forEach(node => {
    console.log("Code element was found")
    node.classList.add("notranslate");
});

/**
 * Experimental: set `notranslate` class for MathJax Elements
 *
 * current issues:
 *   - redundant function call
 *   - optimal delay time varies in client environments
 */
waitForElements("span.MathJax").then(nodes => {
    setTimeout(() => {
        nodes.forEach(node => {
            console.log("MathJax element was found")
            node.classList.add("notranslate");
        });
    }, 500);
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
