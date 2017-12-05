let logPrefix = 'background.js'

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg == 'popup') {
        sendResponse('emmm... I\'m background.');
    }
});

// cancel course_updateUserWatchRecord ajax request to server for safety
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log('[%s] canceld xmlhttprequest: %o', logPrefix, details);
        return { cancel:true };
    },
    {
        urls: [
            "*://xjtudj.edu.cn/course/course_updateUserWatchRecord.do*",
        ],
        types: [
            "xmlhttprequest",
        ]
    },
    [
        "blocking"
    ]
);