import * as api from '../api/index'


export const setRouterInfo = (payload) => ({
	type: 'ROUTERMATCH',
	match: payload.match, 
	history: payload.history, 
	location: payload.location
}) 



function receiveMovies(movies){
	return {
		type: 'FETCHINDEX',
		movies
	}
}
export const fetchIndex = () => (dispatch) => {
	api.getIndex('hot', 0, 20)
	.then(res => dispatch(receiveMovies(res.data.data.movies)))
}




function receiveMoive(data) {
	console.log(data)
	return {
		type: 'FETCHMOVIE',
		movie: data.MovieDetailModel,
		comments: data.CommentResponseModel.cmts,
		hotComments: data.CommentResponseModel.hcmts
	}
}
export const fetchMovieDetail = (id) => (dispatch) => {
	api.getDetail(id)
	.then(res => dispatch(receiveMoive(res.data.data)))
}



function receiveCinemas(data) {
	let cinemas = Object.values(data).reduce((pre, next) => {
		return cinemas.concat(pre, next)
	}, cinemas = [])

	return {
		type: 'FETCHCINEMAS',
		cinemas
	}
}
export const fetchCinemas = () => (dispatch) => {
	api.getCinemas()
	.then(res => dispatch(receiveCinemas(res.data.data)))
}


function receiveCinema(cinema) {
	return {
		type: 'FETCHCINEMA',
		cinema: {
			Dates: cinema.Dates,
			currentMovie: cinema.currentMovie,
			cinemaDetailModel: cinema.cinemaDetailModel,
			movies: cinema.movies,
			DateShow: cinema.DateShow,
			curDay: cinema.Dates[0].slug || ''
		}
	}
}
export const fetchCinema = (cid, mid) => (dispatch) => {
	api.getCinemaDetail(cid, mid)
	.then(res => dispatch(receiveCinema(res.data.data)))
}


export const setCurDay = (curDay) => {
	console.log(curDay)
	return {
		type: 'SETCURDAY',
		curDay
	}
}

function receiveSeat(seat) {
	console.log(seat)
	return {
		type: 'FETCHSEAT',
		seat
	}
}

export const fetchSeat = (id, date) => (dispatch) => {
	api.showSeat(id, date)
	.then(res => dispatch(receiveSeat(res.data)))
}