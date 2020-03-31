module.exports = function (app, express, multer) {

    app.post('/create_outfit/confirmOutfit', function (req, res) {
        //useID = 1 for now
        //in the year 3000
        let sqlquery = "INSERT INTO `softproj`.`Outfit` \
        (`name`, `weather`, `date`, `clothing`,`favourite`, `userID`) \
        VALUES \
        (?,?,?,?,0,1)";
        console.log(req.body);
        if(req.body.date.length==0) req.body.date = null;
        let newrecord = [req.body.name, req.body.weather.toString(), req.body.date];
        delete req.body["name"];
        delete req.body["weather"];
        delete req.body["date"];

        clothing = ""
        for (let key in req.body) {
            clothing += key + ",";
        }
        newrecord.push(clothing.substring(0, clothing.length - 1))

        connection.query(sqlquery, newrecord, (err, result) => {
            if (err) {
                return console.error(err.message);
            }
            else
                console.log("done outfit: check sql database");
        })
        res.redirect("../outfits");
    });
}