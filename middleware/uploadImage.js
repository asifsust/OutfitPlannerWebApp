module.exports = function (app, express, multer, path) {


	// Public Folder
	app.use(express.static('./public'));

	// Set The Storage Engine
	const storage = multer.diskStorage({
		destination: './public/uploads/',
		filename: function (req, file, cb) {
			cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
		}
	});

	// Init Upload
	const upload = multer({
		storage: storage,
		limits: { fileSize: 1000000 },
		fileFilter: function (req, file, cb) {
			checkFileType(file, cb);
		}
	}).single('imageToUpload');

	// Handle Post Request
    app.post('/add_clothing/import_from_gallery', (req, res) => {
        upload(req, res, (err) => {
            if (err) {
                res.render('add_clothing/import_from_gallery.ejs');
            } else {
                if (req.file == undefined) {
                    res.render('add_clothing/import_from_gallery.ejs');
                } else {
                    res.render('add_clothing/import_from_gallery.ejs', {
                        file: `/uploads/${req.file.filename}`
                    });
                }
            }
        });
	});
	
	// Check File Type
	function checkFileType(file, cb) {
		// Allowed ext
		const filetypes = /jpeg|jpg|png/;
		// Check ext
		const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
		// Check mime
		const mimetype = filetypes.test(file.mimetype);

		if (mimetype && extname) {
			return cb(null, true);
		} else {
			cb('Error: Images Only!');
		}
	}
}