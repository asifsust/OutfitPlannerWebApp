module.exports = function (app, express, multer, path) {
    app.get('/add_clothing/set_categories', function (req, res) {
        console.log(req);
        res.render('add_clothing/set_categories.ejs', {
            file: `/uploads/${req.file.filename}`
        });
    });
}