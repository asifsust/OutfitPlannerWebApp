module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index.html');
    });

    //login
    app.get('/forgot', function (req, res) {
        res.render('forgot.html');
    });
    app.get('/login', function (req, res) {
        res.render('login.html');
    });

    //navbar
    app.get('/clothes', function (req, res) {
        res.render('clothes.html');
    });
    app.get('/outfits', function (req, res) {
        res.render('outfits.html');
    });
    app.get('/profile', function (req, res) {
        res.render('profile.html');
    });

    //index
    app.get('/create_outfit', function (req, res) {
        res.render('create_outfit.html');
    });
    app.get('/edit_clothing', function (req, res) {
        res.render('edit_clothing.html');
    });
    app.get('/edit_outfit', function (req, res) {
        res.render('edit_outfit.html');
    });
    app.get('/favourite_clothing', function (req, res) {
        res.render('favourite_clothing.html');
    });
    app.get('/favourite_outfit', function (req, res) {
        res.render('favourite_outfit.html');
    });

    //add clothing
    app.get('/add_clothing', function (req, res) {
        res.render('add_clothing.html');
    });
    app.get('/add_clothing/import_from_device', function (req, res) {
        res.render('add_clothing/import_from_device.html');
    });
    app.get('/add_clothing/import_from_url', function (req, res) {
        res.render('add_clothing/import_from_url.html');
    });

    app.post('/add_clothing/set_categories', function (req, res) {
        res.render('add_clothing/set_categories.ejs');
    });

    //create outfit
    app.get('/create_outfit/create_randomly', function (req, res) {
        res.render('create_outfit/create_randomly.html');
    });
    app.get('/create_outfit/choose_by_weather', function (req, res) {
        res.render('create_outfit/choose_by_weather.html');
    });
    app.get('/create_outfit/create_manually', function (req, res) {
        res.render('create_outfit/create_manually.html');
    });
    //each direct is handled in their own js in the middleware folder
}