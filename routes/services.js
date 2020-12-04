var express = require('express');
var router = express.Router();

// reference the service Model
const Service = require('../models/service');

/* GET services page. */
router.get('/', function (req, res, next) {

    Service.find((err, services) => {
        if (err){
            console.log(err)
            res.end(err)
        } else {
            res.render('services/index', { services: services })
        }
    })
})


//Get tasks index view
router.get('/', (req, res, next) => {
    //use the task model to fetch a list of tasks and pass these to the view display
    //if err, the err parameter will be filled
    //if not, the task parameter will be filled with the query result
    Service.find((err, services) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.render('services/index',
            {
                services: services
            })
        }
    })
})

/* D1*/
//GET tasks add view
router.get('/add', (req, res, next) => {
    res.render('services/add', {
        user: req.user
    })
})

//POST tasks/add for submission
router.post('/add', (req, res, next) => {
    Service.create({
        name: req.body.name,
        province: req.body.province,
        mail: req.body.mail
    }, (err, service) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect('/services')
        }
    })
})

//GET tasks/delete/ - colon in the path represents a URL parameter
router.get('/delete/:_id', (req, res, next) => {
    //store the selected id in a local variable
    var _id = req.params._id;
    //Use Mongoose to delete the selected document from the DB
    Service.remove({ _id: _id }, (err) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect('/services')
        }
    })
})


///////   GET    //////////
//GET ///////tasks/edit/....  populate edit for  with my existing task values
router.get('/edit/:_id', (req, res, next) => {
    //store the _id parameter in a local var
    var _id = req.params._id
    //use the selected _id to lookup the matching document
    Service.findById(_id, (err, task) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.render('services/edit',
                {
                    service: service,
                    user: req.user
                })
        }
    })
})


/////// POST ///////tasks/edit/:_id -> updated selected task document
router.post('/edit/:_id', (req, res, next) => {
    var _id = req.params._id
    //parse checkbox to a boolean
    let complete = false
    if (req.body.complete === "on") {
        complete = true
    }

    console.log('Complete value: ' + req.body.complete)
    //instantiate a Task object with the new values from the form submission
    var service = new Service({
        _id: _id,
        name: req.body.name,
        priority: req.body.priority,
        complete: complete
    })
    //update document with selected id, passing new task object to replace old values
    Service.update({ _id: _id }, service, (err) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect('/services')
        }
    })
})

////

/* D2*/


module.exports = router;