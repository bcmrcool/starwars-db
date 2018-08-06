

const listOfPeople = (state={}, action) => {
	switch(action.type){
		case 'FETCH_PEOPLE':
			return action.payload.data.items
		default:
			return state
	}

	return state
}

export default listOfPeople