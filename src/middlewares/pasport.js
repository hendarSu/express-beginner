const pasport = (req, res, next) => {
    const error = {
        status: "fail",
        message: null
    }
    const { username, password } = req.body;
    if (username === "anak@binar.com") {
        if (password === "qwertyasd123") {
            next();
        } else {
            error.message = "password tidak sesuai!"
            res.status(401).json(error);
        }
    } else {
        error.message = "Username tidak terdaftar!"
        res.status(401).json(error);
    }
};

module.exports = pasport;