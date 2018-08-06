

const searchItems = (state= [], action) => {
	switch(action.type){
		case 'ADD_SEARCH_ITEMS':
			debugger
			return action.payload
		default:
			return state
	}

	return state
}

export default searchItems