module.exports = function (app) {

    app.get('/clothes', function (req, res) {
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
                console.log(clothes.Torso);
                res.render('clothes.html', clothes);
            }
        })
    });


}