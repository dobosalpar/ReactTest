import React, { Component } from 'react';
import './List.css';
import { Link } from 'react-router-dom';

class List extends Component {
	render() {
		const { isLoading, list } = this.props;
		return (
			<div className="list">

				{/* Conditional render is used to present the loading state */}
				{isLoading && <div>Loading...</div>}
				{list.map(element => (
					<Link key={element.id} className="list-element" to={`post/${element.id}`}>
						<div className="list-element__title">{element.title}</div>
						<div className="list-element__content">{element.body}</div>
					</Link>
				))}
			</div>
		);
	}
};

export default List;
