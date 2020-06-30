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
        <List isLoading={isLoading} list={list} />
      </>
    );
  }
};

export default RandomList;
