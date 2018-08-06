

const listOfVehicles = (state= {}, action) => {
	switch(action.type){
		case 'FETCH_VEHICLES':
			return action.payload.data.items
		default:
			return state
	}

	return state
}

export default listOfVehicles