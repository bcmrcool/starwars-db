const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const swapi = require('swapi-node')
const app = express();
app.use(express.static(path.join(__dirname, 'build')));


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
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
	let numOfPages = 0;
	let numPerPage = 0;
	swapi.get('http://swapi.co/api/people/').then(result =>{
		numPerPage = result.results.length
		numOfPages = Math.ceil(result.count/numPerPage)
		for (var i = 1; i <= numOfPages; i++) {
		  swapi.get('http://swapi.co/api/people/?page=' + i).then((result) => {
		    people.push(result.results)
			numOfGroup++
			if (numOfGroup == numOfPages){
			  combineArrays(res,people)
			}
		  });
		}
	})
});

app.get('/starwars/planets/', function (req, res) {
	let planets=[];
	let numOfGroup = 0;
	let numOfPages = 0;
	let numPerPage = 0;
	swapi.get('http://swapi.co/api/planets/').then(result =>{
		numPerPage = result.results.length
		numOfPages = Math.ceil(result.count/numPerPage)
		for (var i = 1; i <= numOfPages; i++){
			swapi.get('http://swapi.co/api/planets/?page=' + i).then((result) => {
			    planets.push(result.results)
			    numOfGroup++
			    if (numOfGroup == numOfPages){
			    	combineArrays(res,planets)
			    }
			});
		}
    })
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
	let numOfPages = 0;
	let numPerPage = 0;
	swapi.get('http://swapi.co/api/species/').then(result =>{
		numPerPage = result.results.length
		numOfPages = Math.ceil(result.count/numPerPage)
		for (var i = 1; i <= numOfPages; i++){
			swapi.get('http://swapi.co/api/species/?page=' + i).then((result) => {
			    species.push(result.results)
			    numOfGroup++
			    if (numOfGroup == numOfPages){
			    	combineArrays(res,species)
			    }
			});
		}
	})
});

app.get('/starwars/starships/', function (req, res) {
	let starships=[];
	let numOfGroup = 0;
	let numOfPages = 0;
	let numPerPage = 0;
	swapi.get('http://swapi.co/api/starships/').then(result =>{
		numPerPage = result.results.length
		numOfPages = Math.ceil(result.count/numPerPage)
		for (var i = 1; i <= numOfPages; i++){
			swapi.get('http://swapi.co/api/starships/?page=' + i).then((result) => {
			    starships.push(result.results)
			    numOfGroup++
			    if (numOfGroup == numOfPages){
			    	combineArrays(res,starships)
			    }
			});
		}
	})
});

app.get('/starwars/vehicles/', function (req, res) {
	let vehicles=[];
	let numOfGroup = 0;
	let numOfPages = 0;
	let numPerPage = 0;
	swapi.get('http://swapi.co/api/vehicles/').then(result =>{
		numPerPage = result.results.length
		numOfPages = Math.ceil(result.count/numPerPage)
		for (var i = 1; i <= numOfPages; i++){
			swapi.get('http://swapi.co/api/vehicles/?page=' + i).then((result) => {
			    vehicles.push(result.results)
			    numOfGroup++
			    if (numOfGroup == numOfPages){
			    	combineArrays(res,vehicles)
			    }
			});
		}
	})
});



function combineArrays(res, array){
	let combinedArray = []
	combinedArray = combinedArray.concat.apply(combinedArray,array)
	sendGroup(res,combinedArray)
}

function sendGroup(res, items){
	return res.json({items})
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);