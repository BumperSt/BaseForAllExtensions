chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request) {
        if (request.message == "iniciarMonitor") {
            palavras = request.palavras.split(',')
            console.log(palavras)
            sendResponse(true)
        }
    }
});