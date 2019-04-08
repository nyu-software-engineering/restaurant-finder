const express = require('express');
const router = express.Router();
const yelp = require("../Yelp/YelpGet").client;
const request = require('request');



//api call.
router.get('/callYelp', function(req, res, next) {
	//here we use "yelp" to search our query's search term and send a JSON version of yelp's data

	if (req.query.id){
		yelp.business(req.query.id)
		.then( function (data) {
			res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(data));
		  })

	} else {
		
		console.log(req.query)
		req.query.location = decodeURIComponent('New York');
		req.query.limit = "50";

		yelp.search(req.query)
        .then(function (data) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(data));
        })

	}


  });

module.exports = router;