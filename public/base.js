YUI.add("threel-base", function (Y) {
    Y.namespace("ThreeL");
    Y.augment(Y.ThreeL, Y.EventTarget);

    var socket = new WebSocket("ws://" + window.location.hostname + ":8081");

    socket.onmessage = function (ev) {
        var json = Y.JSON.parse(ev.data);
        var type = json.req ? "req" : "res";
        var data = json.req || json.res;
        data = data[0];
        Y.ThreeL.fire("socket:json", data, type);
    };

    Y.ThreeL.on("error:recovery", function () {
        Y.one("#error").setContent("");
    });

    Y.ThreeL.on("error", function (d) {
        if ("object" === typeof d) d = d.message;
        Y.one("#error").setContent("<p>" + d + "</p>");
    });

    Y.ThreeL.on("hostname", function (host) {
        Y.one("#hostname").setContent(host);
    });

    Y.ThreeL.on("socket:json", function (d) {
        if (d.origin) Y.ThreeL.fire("hostname", d.origin);
    });

    // transaction store
    var txns = {};
    Y.ThreeL.txns = txns;

}, "0.0.1", { requires : [
    "json",
    "node",
    "event-custom"
]});
