const movies = (state = [], action = {}) => {
	// console.log(action)
	switch (action.type) {
		case 'FETCHINDEX':
			return action.movies
		break;
		default: 
			return state
	}
}

export default movies