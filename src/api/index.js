import axios from 'axios'
const api = 'https://hijarlite.leanapp.cn'

export const getIndex = (type, offset, limit) => {
	return axios.get(`${api}/maoyan/movies?type=${type}&offset=${offset}&limit=${limit}`)
}

export const getDetail = (id) => {
	return axios.get(`${api}/maoyan/movieDetail?id=${id}`)
}

export const getMoreComments = (id, limit, offset) => {
	return axios.get(`${api}/maoyan/movieComments?id=${id}&limit=${limit}&offset=${offset}`)
}

export const getCinemas = () => {
	return axios.get(`${api}/maoyan/cinemas`)
}

export const getCinemaDetail = (cid, mid) => {
	return axios.get(`${api}/maoyan/cinemasDetail?cid=${cid}&mid=${mid}`)
}

export const showSeat = (id, date) => {
	return axios.get(`${api}/maoyan/seat?id=${id}&date=${date}`)
}