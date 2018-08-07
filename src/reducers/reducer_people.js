

const listOfPeople = (state={}, action) => {
	switch(action.type){
		case 'FETCH_PEOPLE':
			if (action.payload.data){
				return action.payload.data.items
			}
			else return "None"
		default:
			return state
	}

	return state
}

export default listOfPeople