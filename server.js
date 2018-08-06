const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const swapi = require('swapi-node')
const app = express();
app.use(express.static(path.join(__dirname, 'build')));


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(process.argv.includes("delayresponse")) {
        setTimeout(function(){
            next();
        }, 2000);
    } else {
        next();
    }
});

app.get('/starwars/people/', function (req, res) {
	let people=[];
	let numOfGroup = 0;
	for (var i = 1; i < 10; i++){
		swapi.get('http://swapi.co/api/people/?page=' + i).then((result) => {
		    people.push(result.results)
		    numOfGroup++
		    if (numOfGroup == 9){
		    	combineArrays(res,people)
		    }
		});
	}
});

app.get('/starwars/planets/', function (req, res) {
	let planets=[];
	let numOfGroup = 0;
	for (var i = 1; i < 8; i++){
		swapi.get('http://swapi.co/api/planets/?page=' + i).then((result) => {
		    planets.push(result.results)
		    numOfGroup++
		    if (numOfGroup == 7){
		    	combineArrays(res,planets)
		    }
		});
	}
});

app.get('/starwars/films/', function (req, res) {
	let films=[];
	swapi.get('http://swapi.co/api/films').then((result) => {
		films.push(result.results)
		sendGroup(res,films)
	});
});

app.get('/starwars/species/', function (req, res) {
	let species=[];
	let numOfGroup = 0;
	for (var i = 1; i < 5; i++){
		swapi.get('http://swapi.co/api/species/?page=' + i).then((result) => {
		    species.push(result.results)
		    numOfGroup++
		    if (numOfGroup == 4){
		    	combineArrays(res,species)
		    }
		});
	}
});

app.get('/starwars/starships/', function (req, res) {
	let starships=[];
	let numOfGroup = 0;
	for (var i = 1; i < 5; i++){
		swapi.get('http://swapi.co/api/starships/?page=' + i).then((result) => {
		    starships.push(result.results)
		    numOfGroup++
		    if (numOfGroup == 4){
		    	combineArrays(res,starships)
		    }
		});
	}
});

app.get('/starwars/vehicles/', function (req, res) {
	let vehicles=[];
	let numOfGroup = 0;
	for (var i = 1; i < 5; i++){
		swapi.get('http://swapi.co/api/vehicles/?page=' + i).then((result) => {
		    vehicles.push(result.results)
		    numOfGroup++
		    if (numOfGroup == 4){
		    	combineArrays(res,vehicles)
		    }
		});
	}
});



function combineArrays(res, array){
	let combinedArray = []
	combinedArray = combinedArray.concat.apply(this,array)
	combinedArray.splice(0,1)
	sendGroup(res,combinedArray)
}

function sendGroup(res, items){
	return res.json({items})
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);