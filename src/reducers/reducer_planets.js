

const listOfPlanets = (state= {}, action) => {
	switch(action.type){
		case 'FETCH_PLANETS':
			if (action.payload.data){
				return action.payload.data.items
			}
			else return "None"
		default:
			return state
	}

	return state
}

export default listOfPlanets