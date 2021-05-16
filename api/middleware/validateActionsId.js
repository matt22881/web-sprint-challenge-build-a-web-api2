const Actions = require('./../actions/actions-model')

function validateActionsId(req, res, next){
    Actions.get(req.params.id)
        .then(resp => {
            if (resp){
                next()
            }else res.status(404).json({message: `Action with that ID doesn't exist in the database`})
        })
        .catch(err => {
            console.err('error validating id: ', err)
        })
}
module.exports = validateActionsId