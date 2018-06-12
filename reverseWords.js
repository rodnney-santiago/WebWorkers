function messageHandler(event){
    var wordTo = event.data;
    
    var result = "";
    for(var i = wordTo.length; i >= 0; i--){
        result += wordTo.substring(i, i + 1);
    }
    postMessage(result);
}

self.addEventListener("message", messageHandler, false);