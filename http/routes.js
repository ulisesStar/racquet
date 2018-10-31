var express = require('express');
var router = express.Router();
var sm = require('sitemap')
var jwt = require('jsonwebtoken');
var secret  = 'ScarlettJohanson';

var sitemap = sm.createSitemap ({
    hostname: 'http://laspalmasracquet.com/',
    cacheTime: 600000,
    urls: [
        { url: '/',  changefreq: 'daily', priority: 0.3 }
    ]
});



router.get('/sitemap.xml', function(req, res) {
    sitemap.toXML( function (err, xml) {
      if (err) {
        return res.status(500).end();
      }
      res.header('Content-Type', 'application/xml');
      res.send( xml );
    });
});

router.get('/robots.txt',  (req, res) => res.type('text/plain').send("User-agent: *\nAllow : /"))

router.get("/", function(req, res) {
    res.render("main/layout");
})

router.get("/main/:url", function(req, res) {
    var page = req.params.url
    res.render("main/frags/" + page);
})

router.get("/main/consultachilds/:url", function(req, res) {
    var page = req.params.url
    res.render("main/frags/consultachilds/" + page);
})

router.get("/user", function(req, res) {
    res.render("user/layout");
})

router.get("/token", function(req, res) {

    token = jwt.sign({ id: req.user.userId}, secret, { expiresIn: '1h' });

    console.log(req.user.userId);
    res.redirect('/user' + token);
})

router.get("/user:token", function(req, res) {
    res.render("user/layout");
})

router.get("/user/:url", function(req, res) {
    var page = req.params.url
    res.render("user/frags/" + page);
})

router.get("/admin/:url", function(req, res) {
    var page = req.params.url
    res.render("admin/frags/" + page);
})

router.get("/admin", function(req, res) {
    res.render("admin/layout");
})

router.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: *\nDisallow: /");
});

router.get("/user/:url", function(req, res) {
	var page = req.params.url
    res.render("main/frags/user/" + page);
})

router.get("/partials/:part", function(req, res) {
	var partial = req.params.part
    res.render("partials/" + partial );
})

router.get("/dialogs/:part", function(req, res) {
	var partial = req.params.part
    res.render("dialogs/" + partial );
})

module.exports = router;
