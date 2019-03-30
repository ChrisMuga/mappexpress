module.exports = {
    index:(req, res, next) => {
        res.render('index', {
            context: 'MappExpress'
        })
    }
}