import React, { Component } from 'react';
import List from '../../Components/List/List';

class RandomList extends Component {
  constructor() {
    super();
    // This is called moving the state up. The List component's state was moved here, since both the button and List has to know about it.
    this.state = {
      isLoading: false,
      list: [],
    };
    this.downloadList = this.downloadList.bind(this);
    this.onListItemClick = this.onListItemClick.bind(this);
  }

  downloadList() {
    this.setState({
			isLoading: true,
		})
		fetch('https://jsonplaceholder.typicode.com/posts')
  			.then(response => response.json())
			.then(json => {
				this.setState({
					isLoading: false,
					list: json,
				})
			});
  }

  onListItemClick(post) {
    this.props.history.push({
      pathname: "post/" + post.id,
      state: { post: post }
    })
  }

  render() {
    const { isLoading, list } = this.state;
    return (
      <>
	  	<h1>Random List</h1>
        <button onClick={this.downloadList} disabled={isLoading}>
          Download list
        </button>
        {/* The this values were part of the List component's state now they are passed down as props */}
        <List isLoading={isLoading} list={list} onClick={this.onListItemClick} />
      </>
    );
  }
}

export default RandomList;
