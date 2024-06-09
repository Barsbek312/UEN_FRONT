import React, { Component } from 'react'
import EcoOrganizationsTab from "./../../assets/organizations/EcoOrganizationsTab.png"

export default class OrganizationsTab extends Component {
  render() {
    return (
      <div>
        <div className='org-tab'>
            <img src={EcoOrganizationsTab}/>
            <h1>Eco Organizations</h1>
        </div>
      </div>
    )
  }
}
