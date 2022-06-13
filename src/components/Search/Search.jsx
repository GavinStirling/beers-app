import React from 'react'

import "./Search.scss"

const Search = (props) => {
    const { search } = props;
    

  return (
    <div>
        <input type="text" placeholder='Search by Name' onInput={search}/>
    </div>
  )
}

export default Search