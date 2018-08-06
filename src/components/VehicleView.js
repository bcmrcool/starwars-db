import React, { Component } from 'react'
import Widget from './graphComponents/Widget'
import NumberWidget from './graphComponents/NumberWidget'
import '../App.css';

class VehicleView extends Component {


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
 	  		return person[0].name
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
	        			<div>Model: {subject.model}</div>
	        			<div>Manufacturer: {subject.manufacturer}</div>
			        </Widget>
			        <Widget heading="Length">{(subject.length*3.28) + 'ft'}</Widget>		        
			        <Widget heading="Cost">{subject.cost_in_credits + 'credits'}</Widget>
			        <Widget heading="Max Speed">{(subject.max_atmosphering_speed * .62) + 'mph'}</Widget>
			        <Widget heading="Films appeared in">
			        	<ul>{this.renderFilms(subject.films, this.props.films)}</ul>
			        </Widget>
			        <Widget heading="Crew Size"><div>{subject.crew}</div></Widget>
			        <Widget heading="Known pilots">
			        	<ul>{this.renderPeople(subject.pilots, this.props.people)}</ul>
			        </Widget>
	      		</div>
			)
		}
}

export default VehicleView