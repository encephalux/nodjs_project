const http = require("http");
require("./env");
require("./config");
const app = require("./app");

// { Error logger }
const error_handler = _error => {
    if(_error.syscall === "listen") throw _error;

    if(_error.code === "EACCESS") console.log("Requires high privileges");
    else if(_error.code === "EADDRINUSE") console.log("Address already in use ("+(typeof ADDRESS === "string" ? ADDRESS:"any")+")");

    if(process.env.RUN_MODE === "development") throw _error;
};

// { Port normalizer }
const normalize_port = (_port) => {
    let parsed = parseInt(_port);

    if(isNaN(parsed)) return _port;
    else if(parsed >= 0) return parsed;

    return false;
};

// { Normalise port }
let ADDRESS = "";
const PORT = normalize_port(process.env.PORT ?? process.env.APP_PORT );

app.set("port", PORT);

// { HTTP server }
const server = http.createServer(app);
server.on("listening", () => {
    ADDRESS = server.address();
    console.log(process.env.APP_NAME+" started at ADDRESS="+ADDRESS.address+" PORT= "+PORT);
});

server.on("error", error_handler);
server.listen(PORT);