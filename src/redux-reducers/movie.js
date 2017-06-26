const movie = (state = {}, action = {}) => {
	// console.log(action)
	switch(action.type){
		case 'FETCHMOVIE':
			return {
				detail: action.movie,
				comments: action.comments,
				hotComments: action.hotComments 
			}
		break;
		default:
			return state
	}
}

export default movie