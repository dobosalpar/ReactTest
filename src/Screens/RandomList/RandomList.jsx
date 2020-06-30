import React, { Component } from 'react';
import List from '../../Components/List/List';

class RandomList extends Component {
  render() {
    const { isLoading, list, downloadList } = this.props;
    return (
      <>
	  	<h1>Random List</h1>
        <button onClick={() => downloadList()} disabled={isLoading}>
          Download list
        </button>
        {/* The this values were part of the List component's state now they are passed down as props */}
        <List isLoading={isLoading} list={list} />
      </>
    );
  }
}

export default RandomList;
