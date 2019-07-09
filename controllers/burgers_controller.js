var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", { burgers: data });
    });
});

router.post("/", function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
        console.log(result);
        res.redirect("/");
    });
});

router.put("/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result) {
        console.log(result);
        res.redirect("/");
    });
});

module.exports = router;