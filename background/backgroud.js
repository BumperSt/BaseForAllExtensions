chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request)
    if(request) {
        if (request.message == "iniciarMonitor") {
            palavras = request.palavras.split(',')
            console.log(palavras)

        }
    }
});