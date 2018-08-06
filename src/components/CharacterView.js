import React, { Component } from 'react'
import Widget from './graphComponents/Widget'
import NumberWidget from './graphComponents/NumberWidget'
import '../App.css';

class CharacterView extends Component {

	  	getPlanet(url, planets){
  			var planet = planets.filter(planet => planet.url === url)
  			return planet[0].name
 	  	}

 	  	getFilm(url, films){
 	  		var film = films.filter(film => film.url === url)
 	  		return film[0].title
 	  	}

 	  	getVehicle(url, vehicles){
 	  		var vehicle = vehicles.filter(vehicle => vehicle.url === url)
 	  		return vehicle[0].name
 	  	}

 	  	renderFilms(subjectFilms, films){
 	  		let theFilms = subjectFilms.map(film => {
 	  			return this.getFilm(film, films)
 	  		})
 	  		let renderedFilms = theFilms.map(film =>{
 	  			return <li key={film}>{film}</li>
 	  		})
 	  		return renderedFilms
 	  	}

 	  	renderVehicles(subjectVehicles, vehicles){
 	  		if (subjectVehicles.length == 0){
 	  			return "No known vehicles"
 	  		}

 	  		let theVehicles = subjectVehicles.map(vehicle => {
 	  			return this.getVehicle(vehicle, vehicles)
 	  		})
 	  		let renderedVehicles = theVehicles.map(vehicle => {
 	  			return <li key={vehicle}>{vehicle}</li>
 	  		})
 	  		return renderedVehicles
 	  	}

 	  	getStarship(url, starships){
 	  		var starship = starships.filter(starship => starship.url === url)
 	  		return starship[0].name
 	  	}

 	  	renderStarships(subjectStarships, starships){
 	  		if (subjectStarships.length == 0){
 	  			return "No known vehicles"
 	  		}

 	  		let theStarships = subjectStarships.map(starship => {
 	  			return this.getStarship(starship, starships)
 	  		})
 	  		let renderedStarships = theStarships.map(starship => {
 	  			return <li key={starship}>{starship}</li>
 	  		})
 	  		return renderedStarships
 	  	}

 	  	getSpecies(url, species){
 	  		var species = species.filter(specie => specie.url == url)
 	  		return species[0].name
 	  	}

 	  	getEra(birthDate) {
 	  		return birthDate.substr(birthDate.length-3)
 	  	}

 	  	getYear(birthDate){
 	  		return parseInt(birthDate)
 	  	}

 	  	getAge(birthYear, era) {
 	  		if (era == "own"){
 	  			return "unknown "
 	  		}
 	  		if (era === "BBY"){
 	  			return 34 + birthYear
 	  		}
 	  		else return 34 - birthYear
 	  	}

		render(){
			const { subject } = this.props
			return(
				<div className="App">
	        		<Widget heading={subject.name}>
	        			<div>Hair Color: {subject.hair_color}</div>
	        			<div>Skin Color: {subject.skin_color}</div>
	        			<div>Eye Color: {subject.eye_color} </div>
	        			<div>Gender: {subject.gender} </div>
			        </Widget>
			        <Widget heading="Height">{Math.round((subject.height/30.48) * 10) / 10 + 'ft'}</Widget>		        
			        <Widget heading="Weight">{Math.floor(parseInt(subject.mass) * 2.2) + 'lb'}</Widget>
			        <Widget heading="Homeworld">
			        	<div>{this.getPlanet(subject.homeworld,this.props.planets)}</div>
			        </Widget>
			        <Widget heading="Films appeared in">
			        	<ul>{this.renderFilms(subject.films, this.props.films)}</ul>
			        </Widget>
			        <Widget heading="Species"><div>{this.getSpecies(subject.species[0], this.props.species)}</div></Widget>
			        <NumberWidget heading="Age" value={this.getAge(this.getYear(subject.birth_year),this.getEra(subject.birth_year)) + 'yrs'} era={subject.birth_year} />
			        <Widget heading="Favorite vehicles">
			        	<ul>{this.renderVehicles(subject.vehicles, this.props.vehicles)}</ul>
			        </Widget>
			        <Widget heading="Favorite starships">
			        	<ul>{this.renderStarships(subject.starships, this.props.starships)}</ul>
			        </Widget>
			        {/*TODO MAKE STARSHIP AND VEHICLE MAKE SEARCH MAKE AUTO FILL*/}
			        {/*<NumberWidget heading="Birth Year" min={3} max={100} value={72} era={"BBY"} />*/}
	      		</div>
			)
		}
}

export default CharacterView