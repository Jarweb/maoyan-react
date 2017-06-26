const cinema = (state = {}, action = {}) => {
	console.log(action)
	console.log(state)
	switch(action.type){
		case 'FETCHCINEMA':
			return action.cinema
		break;
		case 'SETCURDAY':
			let curDay = action.curDay
			return Object.assign({}, state, {curDay})
		default:
			return state 
	}
}

export default cinema