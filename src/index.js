const express = require("express");
const morgan = require("morgan");

const router = require("./routers/router");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

// Middleware Third party
app.use(morgan("common"));

// config folder public
app.use(express.static("./src/public/assets"));

app.use(express.json());
app.use(express.urlencoded({
    extended : false
}));

app.use(router);
app.listen(PORT, () => {
    console.log(`Server running success with port `+3000);
});

