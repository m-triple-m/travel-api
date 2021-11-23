const Model = require('../models/commentModel');
const router = require('express').Router();


router.get('/getbyid/:id', (req, res) => {

    Model.findById(req.params.id)
        .populate('author')
        .then(data => {
            console.log('comment details fetched');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
        })
})

router.post('/add', (req, res) => {
    new Model(req.body).save()
        .then(data => {
            console.log('comment data saved');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})



module.exports = router;