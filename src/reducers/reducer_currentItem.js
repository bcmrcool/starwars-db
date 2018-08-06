

const currentItem = (state= "ALL", action) => {
	switch(action.type){
		case 'SET_SUBJECT':
			return action.payload
		default:
			return state
	}

	return state
}

export default currentItem