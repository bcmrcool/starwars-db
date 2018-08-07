import React, { Component } from 'react'
import Widget from './graphComponents/Widget'
import NumberWidget from './graphComponents/NumberWidget'
import '../App.css';

class SpeciesView extends Component {

	  	getPlanet(url, planets){
  			var planet = planets.filter(planet => planet.url === url)
  			return planet.length > 0 && planet[0].name
 	  	}

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
 	  		let renderedPeople = thePeople.map(person => {
 	  			return <li key={person}>{person}</li>
 	  		})
 	  		return renderedPeople
 	  	}

		render(){
			const { subject } = this.props
			return(
				<div className="App">
	        		<Widget heading={subject.name}>
	        			<div>Classification: {subject.classification}</div>
	        			<div>Designation: {subject.designation}</div>
	        			<div>Eye Colors: {subject.eye_colors} </div>
	        			<div>Hair Colors: {subject.hair_colors} </div>
			        </Widget>
			        <Widget heading="Average Height">{Math.round((subject.average_height/30.48) * 10) / 10 + 'ft'}</Widget>		        
			        <Widget heading="Homeworld">
			        	<div>{this.getPlanet(subject.homeworld,this.props.planets)}</div>
			        </Widget>
			        <Widget heading="Films appeared in">
			        	<ul>{this.renderFilms(subject.films, this.props.films)}</ul>
			        </Widget>
			        <Widget heading="Known members:">
			        	<ul>{this.renderPeople(subject.people, this.props.people)}</ul>
			        </Widget>
			        <NumberWidget heading="Average Lifespan" value={(subject.average_lifespan) + 'yrs'}/>
	      		</div>
			)
		}
}

export default SpeciesView