$("#iniciar").click(() => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "iniciarMonitor", palavras: $("#monitorPalavras").val()}, (response) => {
            console.log(response)
        });
    });
})