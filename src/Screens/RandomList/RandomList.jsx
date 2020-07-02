import React from 'react';
import List from '../../Components/List/List';

const RandomList = ({isLoading, list, downloadList}) => {
    return (
      <>
	  	  <h1>Random List</h1>
        <button onClick={() => downloadList()} disabled={isLoading}>
          Download list
        </button>
        <List isLoading={isLoading} list={list} />
      </>
    );
  };

export default RandomList;
