import React, { Component } from 'react'
import CircularMenuImg from "./../../assets/home/uen_advantages/CircleMenuImg.png"
import MainCircleIcon from "./../../assets/home/uen_advantages/CircleMenuIcon.png"
import EcoOrganizationsIcon from "./../../assets/home/uen_advantages/EcoOrganizationsImg.png"
import GreenMoneyIcon from "./../../assets/home/uen_advantages/GreenMoneyImg.png"
import WasteManagementIcon from "./../../assets/home/uen_advantages/WasteManagementImg.png"
import VolunteersIcon from "./../../assets/home/uen_advantages/VolunteersImg.png"
import GreenTechnologiesIcon from "./../../assets/home/uen_advantages/GreenTechnologiesImg.png"
import OrganicProducersIcon from "./../../assets/home/uen_advantages/OrganicProducersImg.png"

export default class CircularMenu extends Component {
  render() {
    return (
      <div className='circular-menu'>
        <div className='main-circle'>
          <img className="circle-icon" src={MainCircleIcon} alt='uen' />
          <img className="circle" src={CircularMenuImg} alt='circle' />
        </div>
        <div className='circle-item item1'>
          <a href='/organizations'><img src={EcoOrganizationsIcon} alt='Eco Organizations' />
            <div className='circle-title'>Eco Organizations</div></a>
        </div>
        <div className='circle-item item2'>
          <a href='/organizations'><img src={GreenMoneyIcon} alt='Green Money' />
            <div className='circle-title'>Green Money</div></a>
        </div>
        <div className='circle-item item3'>
          <a href='/wastemanagement'><img src={WasteManagementIcon} alt='Waste Management' />
            <div className='circle-title'>Waste Management</div></a>
        </div>
        <div className='circle-item item4'>
          <a href='/volunteers'><img src={VolunteersIcon} alt='Volunteers' />
            <div className='circle-title'>Volunteers</div></a>
        </div>
        <div className='circle-item item5'>
          <a href='/organizations'><img src={GreenTechnologiesIcon} alt='Green Technologies' />
            <div className='circle-title'>Green Technologies</div></a>
        </div>
        <div className='circle-item item6'>
          <a href='/organizations'><img src={OrganicProducersIcon} alt='Organic Producers' />
            <div className='circle-title'>Organic Producers</div></a>
        </div>
      </div>
    )
  }
}
