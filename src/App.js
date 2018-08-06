import React, { Component } from 'react';
import { connect } from 'react-redux'
import AppHub from './AppHub'
import SearchBar from './components/search_bar'

class App extends Component {

	  hasFetchedData(){
  		if (this.props.planets.length > 1 && this.props.people.length > 1 && this.props.starships.length > 1 &&
  			this.props.vehicles.length > 1 && this.props.films.length > 0 && this.props.species.length > 1 ){
  			return true
  		}
  		else return false
  	  }

  render() {
    return (
      <div>
	      {this.hasFetchedData() && <SearchBar {...this.props}/>}
	      <AppHub {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
	people: state.people,
	films: state.films,
	starships: state.starships,
	vehicles: state.vehicles,
	species: state.species,
	planets: state.planets,
	currentSubjectType: state.currentSubjectType,
	currentSubject: state.currentSubject,
 	isSearchMode: state.isSearchMode,
 	listOfSearchItems: state.listOfSearchItems
})

export default connect(mapStateToProps, null)(App);
