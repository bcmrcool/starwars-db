

const listOfSpecies = (state= {}, action) => {
	switch(action.type){
		case 'FETCH_SPECIES':
			return action.payload.data.items
		default:
			return state
	}

	return state
}

export default listOfSpecies