import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './List.css';

class List extends Component {
	render() {
		const { isLoading, list } = this.props;
		return (
			<div className="list">

				{isLoading && <div>Loading...</div>}
				{list.map(element => (
					<Link key={element.id} to={`/post/${element.id}`}>
					<div className="list-element">
						<div className="list-element__title">{element.title}</div>
						<div className="list-element__content">{element.body}</div>
					</div>
					</Link>
				))}
			</div>
		);
	}
};

export default List;
