import React, { Component } from 'react';
import './List.css';

class List extends Component {
	constructor() {
		super();
		this.state = {
			list: [],
		}
	}

	componentDidUpdate(props) {
		if (props.isLoading) {
			return
		}
		fetch('https://jsonplaceholder.typicode.com/posts')
  			.then(response => response.json())
			.then(json => {
				this.props.downloadComplete()
				this.setState({
					list: json
				})
			});
	}

	render() {
		return (
			<div className="list">
				{this.props.isLoading && <div>Loading...</div>}
				{this.state.list.map(element => (
					<div key={element.id} className="list-element">
						<div className="list-element__title">{element.title}</div>
						<div className="list-element__content">{element.body}</div>
					</div>
				))}
			</div>
		);
	}
};

export default List;
