const MockXMLHttpRequest = require('mock-xmlhttprequest');

const server = MockXMLHttpRequest.newServer({
    get: ['/views', function (xhr) {
        count = 0
        if (typeof (Storage) !== "undefined") {
            count = Number(localStorage.getItem("count"))
        } else {
            alert('Sorry! No Web Storage support for this browser. This web page will not function properly')
        }

        if (count == 4) {
            xhr.setNetworkError()
            return
        }

        if (count == 6) {
            xhr.respond(500, {}, null, "Internal Server Error")
            return
        }

        if (count == 8) {
            xhr.setRequestTimeout()
            return
        }

        xhr.respond(200, { 'Content-Type': 'application/json' }, `{ "views":  ${count} }`, "OK")
    }],
    post: ['/views', function (xhr) {
        if (typeof (Storage) !== "undefined") {
            count = Number(localStorage.getItem("count"))
            updateReqNetworkErrorCount = Number(localStorage.getItem("updateReqNetworkErrorCount"))
            if (count == 10 && updateReqNetworkErrorCount == 0) {
                xhr.setNetworkError()
                localStorage.setItem("updateReqNetworkErrorCount", 1)
                return
            }

            updateReqServerErrorCount = Number(localStorage.getItem("updateReqServerErrorCount"))
            if (count == 13 && updateReqServerErrorCount == 0) {
                xhr.respond(500, { 'Content-Type': 'application/json' }, '{ "message": "could not update view count" }', "Internal Server Error")
                localStorage.setItem("updateReqServerErrorCount", 1)
                return
            }

            updateReqTimeoutErrorCount = Number(localStorage.getItem("updateReqTimeoutErrorCount"))
            if (count == 16 && updateReqTimeoutErrorCount == 0) {
                xhr.setRequestTimeout()
                localStorage.setItem("updateReqTimeoutErrorCount", 1)
                return
            }

            localStorage.setItem("count", count+1);
        } else {
            alert('Sorry! No Web Storage support for this browser. This web page will not function properly')
        }
        xhr.respond(200, { 'Content-Type': 'application/json' }, '{ "message": "view count updated successfully" }', "OK")
    }]
}).install()

server.setDefault404()

document.addEventListener('DOMContentLoaded', function () {
    updateViewsReq = new XMLHttpRequest();
    updateViewsReq.open("POST", "/views", true);
    updateViewsReq.onerror = function (err) {
        console.log(`A network error occurred while updating view count: ${JSON.stringify(err)}`)
    }
    updateViewsReq.ontimeout = function (err) {
        console.log(`A timeout error occurred while updating view count: ${JSON.stringify(err)}`)
    }
    updateViewsReq.send();
    updateViewsReq.onload = function () {
        if (updateViewsReq.status >=400 && updateViewsReq.status < 500) {
            console.log(`A client error occurred while updating view count. Status code: ${updateViewsReq.status}. Status Text: ${updateViewsReq.statusText}. Response Body: ${updateViewsReq.responseText}`)
            return
        }

        if (updateViewsReq.status >=500) {
            console.log(`A server error occurred while updating view count. Status code: ${updateViewsReq.status}. Status Text: ${updateViewsReq.statusText}. Response Body: ${updateViewsReq.responseText}`)
            return
        }

        console.log(`update view count response: ${updateViewsReq.responseText}`)
    }

    getViewsReq = new XMLHttpRequest();
    getViewsReq.open("GET", "/views", true);
    getViewsReq.onerror = function(err) {
        console.log(`A network error occurred while getting view count: ${JSON.stringify(err)}`)
    }
    getViewsReq.ontimeout = function (err) {
        console.log(`A timeout error occurred while getting view count: ${JSON.stringify(err)}`)
    }
    getViewsReq.send();
    getViewsReq.onload = function () {
        if (getViewsReq.status >=400 && getViewsReq.status < 500) {
            console.log(`A client error occurred while getting view count. Status code: ${getViewsReq.status}. Status Text: ${getViewsReq.statusText}. Response Body: ${getViewsReq.responseText}`)
            return
        }

        if (getViewsReq.status >=500) {
            console.log(`A server error occurred while getting view count. Status code: ${getViewsReq.status}. Status Text: ${getViewsReq.statusText}. Response Body: ${getViewsReq.responseText}`)
            return
        }

        console.log(`get view count response: ${getViewsReq.responseText}`)
        const json = JSON.parse(getViewsReq.responseText);
        const views = json.views

        document.getElementById("viewCount").innerHTML = views
        document.getElementById("message").style.display = "block"
    }

    exampleBadAPIReq = new XMLHttpRequest();
    exampleBadAPIReq.onerror = function () {
        console.log(`An error occurred!`)
    }
    exampleBadAPIReq.open("GET", "/vsdfkjsjiews", true);
    exampleBadAPIReq.send();
    exampleBadAPIReq.onload = function () {
        console.log(`reponse for example bad API request. Status code: ${exampleBadAPIReq.status}. Status Text: ${exampleBadAPIReq.statusText}. Body: ${exampleBadAPIReq.responseText}`);
    }
})