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

function HTTP_GET($, url, next) {
    // Default options are marked with *
    $.getJSON(url, function(data) {
      next(data)
    })
}

// Beta Version HTTP_GET function
function beta_HTTP_GET(url, next) {
  /*
  Next: a function, accept a argument -> json response
  */
  fetch(url).then((response) => {
    response.json()
  }).then((data) => {
    next(data)
  })
}

// Logs Module
function RecordLog(logString) {
    let url = '/log/add?content=' + logString
    HTTP_GET(window.$, url, function(data) {
        if (data.code = 200) {
            return true
        } else {
            return false
        }
    })
}

function GetGlobalVariables() {
	return {
		"backendDomain": "//120.55.167.135:8080"
	}
}
