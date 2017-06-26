import React from 'react'
import './MovieComments.css';

const CommentItem = ({title, comment}) => {
	return (
		<div className="comment-item-wrap">
			<div className="comment-item-head">
				<img 
					className="comment-item-avatar"
					src={comment.avatarurl} />
				<span className="comment-item-nick">{comment.nickName}</span>
				<span className="comment-item-sc">{comment.score}分</span>
			</div>
			<div className="comment-item-body">{comment.content}</div>
			<time className="comment-item-foot">{comment.time}</time>
		</div>
	)
}


const MovieComments = ({title, comments}) => {

	return (
		<div className="comment-list-wrap">
			<div className="comment-list-head">{title}</div>
			{
				comments.map(comment => 
					<CommentItem comment={comment} key={comment.id} />
				)
			}
		</div>
	)
}


export default MovieComments