import { combineReducers } from 'redux'

import listOfPeople from './reducer_people'
import listOfFilms from './reducer_films'
import listOfSpecies from './reducer_species'
import listOfPlanets from './reducer_planets'
import listOfStarships from './reducer_starships'
import listOfVehicles from './reducer_vehicles'
import currentType from './reducer_currentType'
import currentItem from './reducer_currentItem'
import searchMode from './reducer_searchMode'
import searchItems from './reducer_searchItems'

const rootReducer = combineReducers({
	people: listOfPeople,
	films: listOfFilms,
	species: listOfSpecies,
	planets: listOfPlanets,
	starships: listOfStarships,
	vehicles: listOfVehicles,
	currentSubjectType: currentType,
	currentSubject: currentItem,
	isSearchMode: searchMode,
	listOfSearchItems: searchItems
})

export default rootReducer