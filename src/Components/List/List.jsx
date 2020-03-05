import React, { Component } from 'react';
import './List.css';

class List extends Component {
	render() {
		const { isLoading, list } = this.props;
		return (
			<div className="list">

				{/* Conditional render is used to present the loading state */}
				{isLoading && <div>Loading...</div>}
				{list.map(element => (
					<div className="list-element">
						<div className="list-element__title">{element.title}</div>
						<div className="list-element__content">{element.body}</div>
					</div>
				))}
			</div>
		);
	}
};

export default List;
