module.exports = function(app)
{
    app.get('/',function(req,res){
        res.render('index.html');
     });
    app.get('/about',function(req,res){
        res.render('about.html');
    });
    app.get('/forgot',function(req,res){
        res.render('forgot.html');
    });
    app.get('/login',function(req,res){
        res.render('login.html');
    });
    app.get('/signup',function(req,res){
        res.render('signup.html');
    });
    
}