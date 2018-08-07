const hasLoaded = (state= false, action) => {
	let numOfLoaded = 0
	switch(action.type){
		case 'FETCH_FILMS':
			numOfLoaded++
		case 'FETCH_PEOPLE':
			numOfLoaded++
		case 'FETCH_PLANETS':
			numOfLoaded++
		case 'FETCH_SPECIES':
			numOfLoaded++
		case 'FETCH_STARSHIPS':
			numOfLoaded++
		case 'FETCH_VEHICLES':
			numOfLoaded++
		case 'HAS_LOADED':
			if (numOfLoaded === 6){
				return true
			}
			else return false
		default:
			return state
	}

	return state
}

export default hasLoaded