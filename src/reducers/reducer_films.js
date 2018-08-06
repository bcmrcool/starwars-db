

const listOfFilms = (state= {}, action) => {
	switch(action.type){
		case 'FETCH_FILMS':
			return action.payload.data.items
		default:
			return state
	}

	return state
}

export default listOfFilms