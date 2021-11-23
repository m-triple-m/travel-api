const Model = require('../models/blogModel');
const router = require('express').Router();

router.get('/getall', (req, res) => {

    Model.find({})
        .populate('author')
        .then(data => {
            console.log('blogs data fetched');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
        })
})

router.get('/getbyauthor/:authorid', (req, res) => {

    Model.find({ author: req.params.authorid })
        .then(data => {
            console.log('blogs data fetched by author');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
        })
})

router.get('/getbyid/:id', (req, res) => {

    Model.findById(req.params.id)
        .populate('author')
        .populate('comments')
        .then(data => {
            console.log('blog details fetched');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
        })
})

router.post('/add', (req, res) => {
    new Model(req.body).save()
        .then(data => {
            console.log('blog data saved');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
        .then(data => {
            console.log('blog updated');
            res.status(200).json({ message: 'success' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.put('/updatecomment/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, { $push: req.body })
        .then(data => {
            console.log('blog comments updated');
            res.status(200).json({ message: 'success' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then(data => {
            console.log('blog deleted');
            res.status(200).json({ message: 'deleted' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})


module.exports = router;