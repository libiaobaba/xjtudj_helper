
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg == 'popup') {
        sendResponse('emmm... I\'m background.');
    }
});