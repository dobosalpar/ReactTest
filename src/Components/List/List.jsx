import React, { Component } from 'react';
import './List.css';

class List extends Component {
	constructor(props) {
		super(props);
        this.handleChange = this.handleChange.bind(this);
		this.state = {
			isLoading: false,
			list: [],
			loadingItemStyle: {
                display: 'none',
            },
		}
	}

	handleChange(e) {
        this.props.onListChange(e.target.value);
	}

	componentDidUpdate(prevProps) {
		const prevIsLoading = prevProps;
		const isLoading = this.props;
		
		if (prevIsLoading === isLoading || !isLoading) {
			return;
		}

		this.setState({
			loadingItemStyle: {
                display: 'inline', 
            }
		})
		fetch('https://jsonplaceholder.typicode.com/posts')
  			.then(response => response.json())
			.then(json => {
				this.props.onListChange(json);
				this.setState({
					isLoading: false,
					list: json,
					loadingItemStyle: {
						display: 'none', 
					}
				})
			});
	}

	render() {
		return (
			<div className="list">
				<div style={this.state.loadingItemStyle}>Loading...</div>
				{this.state.list.map(element => (
					<div key={element.title} className="list-element">
						<div className="list-element__title">{element.title}</div>
						<div className="list-element__content">{element.body}</div>
					</div>
				))}
			</div>
		);
	}
};

export default List;
