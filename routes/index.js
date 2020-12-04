var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'DaebServices - Index', owner: '86diegoestrada', link:"https://www.linkedin.com/in/ingenierodesistemas/" });
});

/* GET Services page. */
router.get('/services', function (req, res, next) {
    res.render('services', { title: 'DaebServices - Services'});
});

/* GET Services page. */
router.get('/about', function (req, res, next) {
    res.render('about', { title: 'DaebServices - About US' });
});

/* GET Services page. */
router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'DaebServices - Contact Us' });
});

module.exports = router;
