function validateActions(req, res, next){
    if (!req.body.project_id || !req.body.description || !req.body.notes){
        res.status(400).json({ message: "Project Id, notes, and description required" })
    } else next()
       
}

module.exports = validateActions