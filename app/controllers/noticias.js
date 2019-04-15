module.exports.noticias = function(app, req, res){
    const connection = app.config.dbConnection()
    var noticiasModel = new app.app.models.NoticiasDAO(connection);
    noticiasModel.getNoticias((error, result) => {
        res.render("noticias/noticias", {noticias: result});
    });
}

module.exports.noticia = function(app, req, res){
    const connection = app.config.dbConnection()
    var noticiasModel = new app.app.models.NoticiasDAO(connection);
    noticiasModel.getNoticia(req.query.idNoticia, (error, result) => {
        console.log(result)
        res.render("noticias/noticia", {noticia: result});
    });
}