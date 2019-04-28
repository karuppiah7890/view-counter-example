const MockXMLHttpRequest = require('mock-xmlhttprequest');

const server = MockXMLHttpRequest.newServer({
    get: ['/views', function (xhr) {
        count = 0
        if (typeof (Storage) !== "undefined") {
            count = Number(localStorage.getItem("count"))
        } else {
            alert('Sorry! No Web Storage support for this browser. This web page will not function properly')
        }
        xhr.respond(200, { 'Content-Type': 'application/json' }, `{ "views":  ${count}}`, "OK")
    }],
    post: ['/views', function (xhr) {
        if (typeof (Storage) !== "undefined") {
            count = Number(localStorage.getItem("count"))
            localStorage.setItem("count", count+1);
        } else {
            alert('Sorry! No Web Storage support for this browser. This web page will not function properly')
        }
        xhr.respond(200, {}, null, "OK")
    }]
}).install()

document.addEventListener('DOMContentLoaded', function () {
    updateViewsReq = new XMLHttpRequest();
    updateViewsReq.open("POST", "/views", true);
    updateViewsReq.send();
    updateViewsReq.onload = function () {
        console.log(updateViewsReq)
    }

    getViewsReq = new XMLHttpRequest();
    getViewsReq.open("GET", "/views", true);
    getViewsReq.send();
    getViewsReq.onload = function () {
        const json = JSON.parse(getViewsReq.responseText);
        const views = json.views

        document.getElementById("viewCount").innerHTML = views
        document.getElementById("message").style.display = "block"
    }
})