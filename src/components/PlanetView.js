import React, { Component } from 'react'
import Widget from './graphComponents/Widget'
import NumberWidget from './graphComponents/NumberWidget'
import '../App.css';

class PlanetView extends Component {

 	  	getFilm(url, films){
 	  		var film = films.filter(film => film.url === url)
 	  		return film[0].title
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

 	  	getPerson(url, people){
 	  		var person = people.filter(person => person.url === url)
 	  		return person.length > 0 && person[0].name
 	  	}

 	  	renderPeople(subjectPeople, people){
 	  		if (subjectPeople.length == 0){
 	  			return "No known people"
 	  		}

 	  		let thePeople = subjectPeople.map(person => {
 	  			return this.getPerson(person, people)
 	  		})
 	  		let renderedPeople = thePeople.map((person, index) => {
 	  			return <li key={index}>{person}</li>
 	  		})
 	  		return renderedPeople
 	  	}

		render(){
			const { subject } = this.props
			return(
				<div className="App">
	        		<Widget heading={subject.name}>
	        			<div>Rotation Period: {subject.rotation_period}&nbsp;days</div>
	        			<div>Orbital Period: {subject.orbital_period} &nbsp;days</div>
	        			<div>Climate: {subject.climate} </div>
	        			<div>Surface Water: {subject.surface_water} °Cel </div>
			        </Widget>
			        <Widget heading="Diameter" >{Math.round((subject.diameter/30.48) * 10) / 10 + 'ft'}</Widget>		        
			        <Widget heading="Films appeared in">
			        	<ul>{this.renderFilms(subject.films, this.props.films)}</ul>
			        </Widget>
			        <Widget heading="Gravity"><div>{subject.gravity}</div></Widget>
			        <Widget heading="Known residents">
			        	<ul>{this.renderPeople(subject.residents, this.props.people)}</ul>
			        </Widget>
			        <Widget heading="Population">{subject.population}</Widget>
			        <Widget heading="Terrain"><div>{subject.terrain}</div></Widget>		        
	      		</div>
			)
		}
}

export default PlanetView