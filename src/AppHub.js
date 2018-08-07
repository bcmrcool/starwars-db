import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './App.css';

import { setSubject, fetchPeople, fetchFilms, fetchStarships, fetchVehicles, setSearchMode, fetchSpecies, fetchPlanets } from './actions/index.js'
import Widget from './components/graphComponents/Widget'
import NumberWidget from './components/graphComponents/NumberWidget'
import CharacterView from './components/CharacterView'
import SpeciesView from './components/SpeciesView'
import PlanetView from './components/PlanetView'
import VehicleView from './components/VehicleView'

class AppHub extends Component {


  componentDidMount(){
  	this.props.fetchPeople()
  	this.props.fetchFilms()
  	this.props.fetchStarships()
  	this.props.fetchVehicles()
  	this.props.fetchSpecies()
  	this.props.fetchPlanets()
    if (this.props.people.length > 1) {
      this.props.setSubject(this.props.people[0])
    }
  }

  getSubjectType(subject){
    if (subject.hasOwnProperty("classification"))
      return "species"
    else if (subject.hasOwnProperty("mass"))
      return "character"
    else if (subject.hasOwnProperty("hyperdrive_rating"))
      return "starship"
    else if (subject.hasOwnProperty("gravity"))
      return "planet"
    else if (subject.hasOwnProperty("vehicle_class"))
      return "vehicle"
    else if (subject.hasOwnProperty("title"))
      return "film"
  }

  hasFetchedData(){
  	if (this.props.planets.length > 1 && this.props.people.length > 1 && this.props.starships.length > 1 &&
  		this.props.vehicles.length > 1 && this.props.films.length > 0 && this.props.species.length > 1 ){
  		return true
  	}
  	else return false
  }

  handleWidgetClick(item){
    this.props.setSubject(item)
    this.props.setSearchMode(false)
  }



  renderView(subject){
  	let subjectType = this.getSubjectType(subject)
  	if (this.hasFetchedData()) {
      if (subject !=="ALL" && this.props.isSearchMode === false) {
    		switch(subjectType){
    			case "character":
    				return <CharacterView subject={subject} vehicles={this.props.vehicles} starships={this.props.starships} species={this.props.species} films={this.props.films} planets={this.props.planets} />
          case "species":
            return <SpeciesView subject={subject} people={this.props.people} films={this.props.films} planets={this.props.planets} /> 
          case "planet":
            return <PlanetView subject={subject} people={this.props.people} films={this.props.films} />
          case "vehicle":
            return <VehicleView subject={subject} people={this.props.people} films={this.props.films} />
    		}
  	  }
      else if (this.props.isSearchMode === true){
        let itemList = this.props.listOfSearchItems.map(item =>{
          return <Widget clickable={true} key={item.url} onClick={() => this.handleWidgetClick(item)} heading={item.name ? item.name : item.title}></Widget>
        })
        return  <div className="App">{itemList}</div>
      }
    }
  	else return <div>Loading Data...</div>
  }

  render() {
  	(this.props.people.length > 1 && this.props.currentSubject === "ALL") && this.props.setSubject(this.props.people[0])
    return (
    	<div>
      		{this.renderView(this.props.currentSubject)}
      	</div>
    )
  }
}

const mapStateToProps = state => ({
  hasLoaded: state.hasLoaded
})

const mapDispatchToProps = dispatch => (
	bindActionCreators({setSubject: setSubject, setSearchMode: setSearchMode, fetchPeople: fetchPeople, fetchFilms: fetchFilms, fetchStarships: fetchStarships, fetchVehicles: fetchVehicles, fetchSpecies: fetchSpecies, fetchPlanets: fetchPlanets}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(AppHub)
