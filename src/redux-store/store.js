import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import cinemas from '../redux-reducers/cinemas'
import movies from '../redux-reducers/movies'
import routeInfo from '../redux-reducers/routeInfo'
import movie from '../redux-reducers/movie.js'
import cinema from '../redux-reducers/cinema.js'
import seat from '../redux-reducers/seat.js'

const reducer = combineReducers({
	movies,
	cinemas,
	routeInfo,
	movie,
	cinema,
	seat
})

const middleware = [thunk]
const store = createStore(reducer, applyMiddleware(...middleware))

export default store