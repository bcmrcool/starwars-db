
const searchMode = (state= false, action) => {
	switch(action.type){
		case 'SET_SEARCH_MODE':
			return action.payload
		default:
			return state
	}

	return state
}

export default searchMode