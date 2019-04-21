const MockXMLHttpRequest = require('mock-xmlhttprequest');

const server = MockXMLHttpRequest.newServer({
    get: ['/views', {
        // status: 200 is the default
        headers: { 'Content-Type': 'application/json' },
        body: '{ "views": 1729 }',
    }],
}).install()

document.addEventListener('DOMContentLoaded', function () {
    req = new XMLHttpRequest();
    req.open("GET", "/views", true);
    req.send();
    req.onload = function () {
        const json = JSON.parse(req.responseText);
        const views = json.views

        document.getElementById("viewCount").innerHTML = views
        document.getElementById("message").style.display = "block"
    }
})