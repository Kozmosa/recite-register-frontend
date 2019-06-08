function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

function GetParam(paramName) {
    let theRequest = GetRequest()
    return theRequest[paramName]
}

// Network Interface
/*
postData('http://example.com/answer', {answer: 42})
    .then(data => console.log(data)) // JSON from `response.json()` call
    .catch(error => console.error(error))
*/

function HTTP_GET(url) {
    // Default options are marked with *
    return fetch(url, {
        mode: 'no-cors'
    }).then((response) => {
        return response
    })
}

// Logs Module
function RecordLog(logString) {
    let url = '/log/add?logString=' + logString
    HTTP_GET(url)
}