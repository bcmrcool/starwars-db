import React from 'react';
import ReactDOM from 'react-dom';
import CharacterView from './components/CharacterView'
import SpeciesView from './components/SpeciesView'
import PlanetView from './components/PlanetView'
import VehicleView from './components/VehicleView'
import {applyMiddleware, createStore} from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import './index.css';
import reducers from './reducers'

import listOfFilms from './testData/listOfFilms'
import listOfPlanets from './testData/listOfPlanets'
import listOfSpecies from './testData/listOfSpecies'
import listOfPeople from './testData/listOfPeople'
import listOfStarships from './testData/listOfStarships'
import listOfVehicles from './testData/listOfVehicles'



it('renders CharacterView without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<CharacterView subject={listOfPeople[0]} vehicles={listOfVehicles} starships={listOfStarships} species={listOfSpecies} films={listOfFilms} planets={listOfPlanets} />
  	, 
  	div
  	);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders SpeciesView without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<SpeciesView subject={listOfSpecies[0]} people={listOfPeople} films={listOfFilms} planets={listOfPlanets} />
  	, 
  	div
  	);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders PlanetView without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<PlanetView subject={listOfPlanets[0]} people={listOfPeople} films={listOfFilms} />
  	, 
  	div
  	);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders VehicleView without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<VehicleView subject={listOfVehicles[0]} people={listOfPeople} films={listOfFilms} />
  	, 
  	div
  	);
  ReactDOM.unmountComponentAtNode(div);
});


