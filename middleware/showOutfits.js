module.exports = function (app) {

    app.get('/outfits', function (req, res) {
        let sqlquery = "Select * From Outfit;";
        let outfits = [];
        let clothing = {};
        let tmpClothesIDs;
        connection.query(sqlquery, (err, outfitResult) => {
            if (err) {
                return console.error(err.message);
            }
            else {
                console.log("----------outfits-----------");
                for (let index = 0; index < outfitResult.length; index++) {
                    console.log("Name: " + outfitResult[index].name, "| Clothing: " + outfitResult[index].clothing, "| Weather: " + outfitResult[index].weather);

                    tmpClothesIDs = outfitResult[index].clothing.split(",");
                    console.log(tmpClothesIDs);
                    tmpClothesIDs.forEach(element => {
                        clothing[element] = null;
                    });
                    outfitResult[index]["clothing"] = tmpClothesIDs;
                }
                console.log("-----------------------------");
            };
            sqlquery = `Select * From Clothing Where ID in (${Object.keys(clothing).toLocaleString()});`;
            connection.query(sqlquery, (err, clothingResult) => {
                if (err) {
                    console.error(err.message);
                    return console.error(err.message);
                }
                else {
                    for (let index = 0; index < clothingResult.length; index++) {
                        clothing[clothingResult[index].ID] = clothingResult[index];
                    }
                    console.log(outfitResult[0].date)
                    res.render('outfits.html',{clothes:clothing,outfits:outfitResult});
                };
            });

        });



    });


}