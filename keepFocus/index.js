document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('config').addEventListener('click', function () {
        chrome.tabs.create({ url: chrome.runtime.getURL('config.html') });
    });
});
