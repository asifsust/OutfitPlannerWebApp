module.exports = function (app) {

    app.get('/create_outfit/create_manually', function (req, res) {
        let sqlquery = "Select * From Clothing;";
        connection.query(sqlquery, (err, result) => {
            if (err) {
                return console.error(err.message);
            }
            else {
                let clothes = {
                    Torso: [],
                    Legs: [],
                    Feet: [],
                    Head: [],
                    Arms: [],
                    Hand: []
                }
                console.log("----------clothing-----------")
                for (let index = 0; index < result.length; index++) {
                    console.log("Name: " + result[index].name, "| Type: " + result[index].type, "| Weather: " + result[index].weather);
                    clothes[result[index].type].push(result[index]);
                }
                console.log("-----------------------------")
                res.render('create_outfit/create_manually.html', clothes);
            }
        })
    });


}