module.exports = function(app){
    app.get("/noticia", (req, res) => {
        const connection = app.config.dbConnection()
        var noticiasModel = new app.app.models.NoticiasDAO(connection);
        noticiasModel.getNoticia((error, result) => {
            res.render("noticias/noticia", {noticia: result});
        });
    })
}