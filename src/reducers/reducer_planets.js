

const listOfPlanets = (state= {}, action) => {
	switch(action.type){
		case 'FETCH_PLANETS':
			return action.payload.data.items
		default:
			return state
	}

	return state
}

export default listOfPlanets