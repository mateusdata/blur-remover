document.getElementById('actionButton').addEventListener('click', () => {
    alert('Aplicando as alterações na página!');
    
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['content.js']
        });
    });
});
