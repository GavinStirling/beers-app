import React from 'react'

import "./Search.scss"

const Search = (props) => {
    const { search } = props;
    

  return (
    <div className='search'>
      <label htmlFor="search">Search by Name:</label>
        <input id='search' type="text" placeholder='Search by Name' onInput={search}/>
    </div>
  )
}

export default Search