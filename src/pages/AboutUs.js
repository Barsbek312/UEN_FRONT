import React, { Component } from 'react'
import ac from "../assets/AijanChynybaeva.png"
import meerim from "../assets/Meerim.png"
import nartciss from "../assets/Nartciss.png"
import bayel from "../assets/Bayel.png"
import nargiza from "../assets/Nargiza.png"
import ruslan from "../assets/Ruslan.png"
import maksat from "../assets/Maksat.png"
import adil from "../assets/Adil.png"
import kamila from "../assets/Kamila.png"
import janyl from "../assets/Janyl.png"

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className='aboutbg'>
                <div className='aboutus'>
                    <div className='abouttext'>
                        <h1 className='abouttext'>About Us</h1>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <img src={ac} alt='Aijan'></img>
                            <h1>Aijan Chynybaeva</h1>
                            <h2>Director</h2>
                            <p>I initiated this site and lead eco demi.</p>
                        </div>
                        <div className="card">
                            <img src={meerim} alt='Meerim'></img>
                            <h1>Temirbekova Meerim</h1>
                            <h2>Team Leader</h2>
                            <p>I handle the environmental aspect of our project.</p>
                        </div>
                        <div className="card">
                            <img src={nartciss} alt='Nartciss'></img>
                            <h1>Omorova Nartciss</h1>
                            <h2>Deputy</h2>
                            <p>I manage team communication, market analysis, and marketing.</p>
                        </div>
                        <div className="card">
                            <img src={bayel} alt='Bayel'></img>
                            <h1>Suranbaev Bayel</h1>
                            <h2>Designer</h2>
                            <p>I'm a designer responsible for visual design and presentations.</p>
                        </div>
                        <div className="card">
                            <img src={nargiza} alt='Nargiza'></img>
                            <h1>Azamatova Nargiza</h1>
                            <h2>Financier</h2>
                            <p>I handle all finances at United Eco Nations, from budgeting to management.</p>
                        </div>
                        <div className="card">
                            <img src={ruslan} alt='Ruslan'></img>
                            <h1>Eshmamatov Ruslan</h1>
                            <h2>Entrepreneur</h2>
                            <p>I analyze markets, calculate TAM, SAM, SOM, map competitors, and write business and social issues.</p>
                        </div>
                        <div className="card">
                            <img src={maksat} alt='Maksat'></img>
                            <h1>Ormonbekov Maksat</h1>
                            <h2>Programmer</h2>
                            <p>I handle website layout and frontend development.</p>
                        </div>
                        <div className="card">
                            <img src={adil} alt='Adil'></img>
                            <h1>Korooluev Adil</h1>
                            <h2>Programmer</h2>
                            <p>I manage the backend and its integration with the frontend.</p>
                        </div>
                        <div className="card">
                            <img src={kamila} alt='Kamila'></img>
                            <h1>Ormonova Kamila</h1>
                            <h2>Design-manager</h2>
                            <p>I am responsible for customer experience and its improvement.</p>
                        </div>
                        <div className="card">
                            <img src={ janyl } alt='Janyl'></img>
                            <h1>Bakytova Janyl</h1>
                            <h2>Designer</h2>
                            <p>I design our merch and create illustrations for our social media.</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
