const routeInfo = (state = {}, action = {}) => {
	console.log(action)
	switch (action.type) {
		case 'ROUTERMATCH':
			return {
				match: action.match,
				history: action.history,
				location: action.location
			}
		break;
		default: 
			return state
	}
}

export default routeInfo