

const currentType = (state= {}, action) => {
	switch(action.type){
		case 'SET_TYPE':
			return action.payload.type
		default:
			return "character"
	}

	return state
}

export default currentType