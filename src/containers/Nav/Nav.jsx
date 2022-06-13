import React from 'react'

import "./Nav.scss"

import Search from "../../components/Search/Search"
import FilterList from '../../components/FilterList/FilterList'

const Nav = () => {
  return (
    <div className='nav'>
      <h1 className="nav__heading">Search and Filter</h1>
      <Search />
      <FilterList />
    </div>
  )
}

export default Nav