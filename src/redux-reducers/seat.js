const seat = (state = {}, action = {}) => {
	console.log(action)
	switch(action.type) {
		case 'FETCHSEAT':
			return action.seat 
		default: 
			return state
	}
}

export default seat