

const listOfStarships = (state= {}, action) => {
	switch(action.type){
		case 'FETCH_STARSHIPS':
			return action.payload.data.items
		default:
			return state
	}

	return state
}

export default listOfStarships