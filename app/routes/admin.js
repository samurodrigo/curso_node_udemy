module.exports = function(app){
    app.get("/formulario_inclusao_noticias", (req, res) => {
        res.render("admin/form_add_noticia", {erros: null})
    })

    app.post("/noticias/salvar", (req, res) => {
        const noticia = req.body;

        req.assert("titulo", "Título é obrigatório").notEmpty()
        req.assert("resumo", "Resumo é obrigatório").notEmpty()
        req.assert("resumo", "O resumo deve conter entre 10 e 100 caracteres").len(10,100)
        req.assert("autor", "Autor é obrigatório").notEmpty()
        req.assert("data_noticia", "Data é obrigatória").notEmpty().isDate({format: "YYYY-MM-DD"})
        req.assert("noticia", "Notícia é obrigatória").notEmpty()


        var erros = req.validationErros()

        if(erros){
            res.render("admin/form_add_noticias", {erros: erros})
            return
        }

        const connection = app.config.dbConnection();
        const noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect("/noticias")
        })
    })
}