const kaggle_notebook_url = "https://www.kaggle.com/code/";

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === "complete" && tab.url.startsWith(kaggle_notebook_url) && (!tab.url.endsWith("/edit")) && (tab.url != kaggle_notebook_url)) {
        chrome.scripting.insertCSS({
            files: ["styles/content.css"],
            target: { tabId: tab.id },
        });
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["scripts/kaggle_notebook.js"],
        });
    }
});
