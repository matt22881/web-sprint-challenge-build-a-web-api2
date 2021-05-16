function validateProject(req, res, next){
    if (!req.body.name || !req.body.description){
        res.status(400).json({ message: "name and description required" })
    } else next()
       
}

module.exports = validateProject