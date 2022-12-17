const express = require("express");
const router = require("./routers/router");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.json());
app.use(express.urlencoded({
    extended : false
}));

app.use(router);
app.listen(PORT, () => {
    console.log(`Server running success with port `+3000);
});

