const webHandlerNotFound = (req, res, next) => {
    res.render("404");
}

module.exports = webHandlerNotFound;