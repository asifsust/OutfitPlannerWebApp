module.exports = function (app, express, multer, path) {

    // Public Folder
    app.use(express.static('./public'));

    // Set The Storage Engine
    const storage = multer.diskStorage({
        destination: './public/images/',
        filename: function (req, file, cb) {
            const bcrypt = require('bcrypt');
            const saltRounds = 10;
            bcrypt.hash("somewords", saltRounds, function (err, hash) {
                // Store hash in your password DB.
                hash = hash.replace("/", "").replace(".", "");
                console.log("hash: " + hash + path.extname(file.originalname));
                cb(null, hash + path.extname(file.originalname));
            });
        }
    });

    // Init Upload
    const upload = multer({
        storage: storage,
        limits: { fileSize: 1000000000 }
    }).single('image');

    //Handle Post Request
    app.post('/add_clothing/confirmDevice', function (req, res) {
        upload(req, res, (err) => {
            if (err) {
                res.send(err);
            }

            //useID = 1 for now
            let sqlquery = "INSERT INTO `softproj`.`clothing` \
            (`name`, `weather`, `colour`, `type`, `favourite`, `filepath`, `userID`) \
            VALUES \
            (?,?,?,?,0,?,1)";
            let newrecord = [req.body.name,req.body.weather.toString(), req.body.colour.toString(), req.body.type, req.file.filename];
            connection.query(sqlquery, newrecord, (err, result) => {
                if (err) {
                    return console.error(err.message);
                }
                else
                    console.log("done: check sql database");
            })
            res.send(
                `
                <h1>Stuff to be added to MySQL</h1><br>
                Filepath: ./public/images/${req.file.filename}<br>
                <img src="${req.file.path.replace("public", "")}" style="width:500px"><br>
                Name: ${req.body.name}<br>
                Type: ${req.body.type}<br>
                Colour: ${req.body.colour}<br>
                Weather: ${req.body.weather}
                `
            );
        });
    });
}