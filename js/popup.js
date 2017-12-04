chrome.runtime.sendMessage('popup', function(response) {
    document.getElementById('popup_div').innerHTML = response;
});