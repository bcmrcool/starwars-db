import React, { Component } from 'react'
import './styles/SearchBar.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setSubject, setSearchMode, addSearchItems } from '../actions/index.js'

class SearchBar extends Component {

	constructor(props){
		super(props)

		this.state = {
			term: ''
		}
	}

	searchForItems = searchTerm => {
		let listOfAllThings = this.props.listOfSearchItems.concat(this.props.people,this.props.planets,this.props.films[0],this.props.starships,this.props.vehicles,this.props.species)
		let items = []
		listOfAllThings.forEach(thing =>{
  			if(thing.name && thing.name.toLowerCase().includes(searchTerm.toLowerCase()) && !items.includes(thing)){
  				debugger
      			items.push(thing)
			}
  			if(thing.title && thing.title.toLowerCase().includes(searchTerm.toLowerCase()) && !items.includes(thing)){
  	  			items.push(thing)
  			}
		})
		console.log(items)
		debugger
		this.props.addSearchItems(items)
	}

	onInputChange = event => {
		console.log(event.target.value)
		this.setState({term: event.target.value})
		if (event.target.value === ""){
			this.props.setSearchMode(false)
		}
		else {
			this.props.setSearchMode(true)
			this.searchForItems(event.target.value)
		}
	}

	onFormSubmit = event => {
		event.preventDefault();
	}

		render(){
			return(
			  <section className="search-bar">
				  <form onSubmit={this.onFormSubmit}>
				  	<input placeholder="Luke Skywalker" value={this.state.term} onChange={this.onInputChange}/>
				  	<button type="submit">Search</button>
				  </form>
			  </section>
			)
		}
}

const mapDispatchToProps = dispatch => (
	bindActionCreators({setSubject: setSubject, addSearchItems: addSearchItems, setSearchMode: setSearchMode}, dispatch)
)

export default connect(null, mapDispatchToProps)(SearchBar)