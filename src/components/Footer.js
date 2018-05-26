import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Tell me about: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Alive
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        <div className="btn">
            Booped
        </div>
    </FilterLink>
  </div>
)

export default Footer
