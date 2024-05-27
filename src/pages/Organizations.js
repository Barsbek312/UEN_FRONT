import React, { Component } from 'react'
import OrganizationsTab from '../components/OrganizationsTab'
import OrganizationFavoritesAndFilters from '../components/OrganizationFavoritesAndFilters'
import OrganizationCards from '../components/OrganizationCards'

export default class Organizations extends Component {
  render() {
    return (
      <div>
        <OrganizationsTab />
        <OrganizationFavoritesAndFilters />
        <OrganizationCards />
      </div>
    )
  }
}
