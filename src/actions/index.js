import axios from 'axios'

export const FETCH_PEOPLE = 'FETCH_PEOPLE'
export const FETCH_FILMS = 'FETCH_FILMS'
export const FETCH_STARSHIPS = 'FETCH_STARSHIPS'
export const FETCH_VEHICLES = 'FETCH_VEHICLES'
export const FETCH_SPECIES = 'FETCH_SPECIES'
export const FETCH_PLANETS = 'FETCH_PLANETS'
export const SET_SUBJECT = 'SET_SUBJECT'
export const SET_SEARCH_MODE = 'SET_SEARCH_MODE'
export const ADD_SEARCH_ITEMS = 'ADD_SEARCH_ITEMS'

export const URL_ROOT = 'http://localhost:8080/starwars/'


export const setSubject = subject => {
	return {
		type: SET_SUBJECT,
		payload: subject
	}
}

export const addSearchItems = searchItem =>{
	debugger
	return {
		type: ADD_SEARCH_ITEMS,
		payload: searchItem
	}
}

export const fetchPeople = () => {
	let url =  URL_ROOT + 'people'
	let request = axios.get(url)

	return {
		type: FETCH_PEOPLE,
		payload: request
	}
}

export const setSearchMode = searchMode => {
	return {
		type: SET_SEARCH_MODE,
		payload: searchMode
	}
}

export const fetchFilms = () => {
	let url =  URL_ROOT + 'films'
	let request = axios.get(url)

	return {
		type: FETCH_FILMS,
		payload: request
	}
}

export const fetchStarships = () => {
	let url =  URL_ROOT + 'starships'
	let request = axios.get(url)

	return {
		type: FETCH_STARSHIPS,
		payload: request
	}
}

export const fetchVehicles = () => {
	let url =  URL_ROOT + 'vehicles'
	let request = axios.get(url)

	return {
		type: FETCH_VEHICLES,
		payload: request
	}
}

export const fetchSpecies = () => {
	let url =  URL_ROOT + 'species'
	let request = axios.get(url)

	return {
		type: FETCH_SPECIES,
		payload: request
	}
}

export const fetchPlanets = () => {
	let url =  URL_ROOT + 'planets'
	let request = axios.get(url)

	return {
		type: FETCH_PLANETS,
		payload: request
	}
}