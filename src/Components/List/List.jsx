import React, { Component } from 'react';
import './List.css';

class List extends Component {
	constructor() {
		super();
		this.state = {
			isLoading: false,
			isOpened: false,
			list: [],
		}
	}

	componentDidMount() {
		this.setState({
			isLoading: true,
			isOpened: false,
		})
		fetch('https://jsonplaceholder.typicode.com/posts')
  			.then(response => response.json())
			.then(json => {
				this.setState({
					isLoading: false,
					list: json,
					isOpened: true,
				})
			});
	}

	render() {
		return (
			<>
			<div className="list">
				<div class={this.state.isOpened ? 'hidden' : ''}>Loading...</div>
				{this.state.list.map(element => (
					<div className="list-element">
						<div className="list-element__title">{element.title}</div>
						<div className="list-element__content">{element.body}</div>
					</div>
				))}
			</div>
			</>
		);
	}
};

export default List;
