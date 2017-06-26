const cinemas = (state = [], action = {}) => {
	// console.log(action)
	switch (action.type) {
		case 'FETCHCINEMAS':
			return action.cinemas
		break;
		default:
			return state
	}
}

export default cinemas