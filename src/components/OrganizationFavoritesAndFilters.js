import React, { Component } from 'react'

export default class OrganizationFavoritesAndFilters extends Component {
  render() {
    return (
      <div>
        <div className='favs-and-filters'>
            <div className='org-favs'>
                <h1>Favorites</h1>
            </div>
            <div className='org-filter'>
                <h1>Eco Organizations</h1>
            </div>
        </div>
      </div>
    )
  }
}
