import React, { Component } from 'react'
import Slider from '../components/Slider'
import CircularMenu from '../components/CircularMenu'
import MainPageBanner from '../components/MainPageBanner'
import MountainPart from '../components/MountainPart'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='white-bg'>
          <Slider />
          <CircularMenu />
          <MainPageBanner />
          <MountainPart />
        </div>
      </div>
    )
  }
}
