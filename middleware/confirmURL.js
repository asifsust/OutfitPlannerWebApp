module.exports = function (app, express, multer, path) {

    // Public Folder
    app.use(express.static('./public'));

    // Init Upload
    const uploadURL = multer();

    //Handle Post Request
    app.post('/add_clothing/confirmURL', uploadURL.none(), function (req, res) {
        const Fs = require('fs')
        const Path = require('path')
        const Axios = require('axios')

        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        bcrypt.hash("somewords", saltRounds, function (err, hash) {
            async function downloadImage() {
                hash = hash.replace(/\./g,"").replace(/\//g,"");

                const url = req.body.url;
                var regex = /(?:\.([^.]+))?$/;
                var extension = regex.exec(url)[1];

                const path = Path.resolve('./public/images', `${hash}.${extension}`)
                const writer = Fs.createWriteStream(path)

                const response = await Axios({
                    url,
                    method: 'GET',
                    responseType: 'stream'
                })
                response.data.pipe(writer)
                return new Promise((resolve, reject) => {
                    writer.on('finish', resolve);
                    writer.on('error', reject);
                })
            }
            downloadImage()
            res.redirect("/clothes");
        });
    });
}