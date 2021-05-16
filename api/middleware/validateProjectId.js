const Projects = require('./../projects/projects-model')

function validateProjectId(req, res, next){
    Projects.get(req.params.id)
        .then(resp => {
            if (resp){
                next()
            }else res.status(404).json({message: `Project with that ID doesn't exist in the database`})
        })
        .catch(err => {
            console.err('error validating id: ', err)
        })
}
module.exports = validateProjectId