import React, { Component } from 'react'
import LayerOne from "../assets/MountainLayer1.png"
import LayerTwo from "../assets/MountainLayer2.png"
import LayerThree from "../assets/MountainLayer3.png"

export default class MountainPart extends Component {
    render() {
        return (
            <div>
                <div className='mountains'>
                    <div className='first-layer'>
                        <img src={LayerOne} />
                        <div className='partners'>
                            <h1>Our partners</h1>
                            <div className='partners-grid'>
                                <ul>
                                    <li>Alpha Bank</li>
                                    <li>Tinkoff</li>
                                    <li>Alpha Bank</li>
                                    <li>Tinkoff</li>
                                    <li>Alpha Bank</li>
                                    <li>Tinkoff</li>
                                    <li>Alpha Bank</li>
                                    <li>Tinkoff</li>
                                    <li>Alpha Bank</li>
                                    <li>Tinkoff</li>
                                    <li>Alpha Bank</li>
                                    <li>Tinkoff</li>
                                    <li>Alpha Bank</li>
                                    <li>Tinkoff</li>
                                    <li>Alpha Bank</li>
                                    <li>Tinkoff</li>
                                    <li>Alpha Bank</li>
                                    <li>Tinkoff</li>
                                    <li>Alpha Bank</li>
                                    <li>Tinkoff</li>
                                    <li>Alpha Bank</li>
                                    <li>Tinkoff</li>
                                    <li>Alpha Bank</li>
                                    <li>Tinkoff</li>
                                    <li>Alpha Bank</li>
                                    <li>Tinkoff</li>
                                    <li>Alpha Bank</li>
                                    <li>Tinkoff</li>
                                    <li>Alpha Bank</li>
                                    <li>Tinkoff</li>
                                    <li>Alpha Bank</li>
                                    <li>Tinkoff</li>
                                    <li>Alpha Bank</li>
                                    <li>Tinkoff</li>
                                    <li>Alpha Bank</li>
                                    <li>Tinkoff</li>
                                    <li>Alpha Bank</li>
                                    <li>Tinkoff</li>
                                    <li>Alpha Bank</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='second-layer'>
                        <img src={LayerTwo} />
                        <div className='organization-application'>
                            <h1>Do you want to become our partner?</h1>
                            <form className='app-form'>
                                <div className='first-ones'>
                                    <div className='form-group'>
                                        <label>Organization name</label>
                                        <input type="text" id="name" required />
                                    </div>
                                    <div className='form-group'>
                                        <label className="selector-label">Choose organization type</label>
                                        <select id="organizationType" className="organization-type-selector" required >
                                            <option>--Choose organization type--</option>
                                            <option>Eco Organization</option>
                                            <option>Green Money</option>
                                            <option>Organic Producer</option>
                                            <option>Eco Tech</option>
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <label>Organization Address</label>
                                        <input type="text" id="address" required />
                                    </div>
                                    <div className='form-group'>
                                        <label>Phone Number</label>
                                        <input type="tel" id="phone" required />
                                    </div>
                                    <div className='form-group'>
                                        <label>E-mail</label>
                                        <input type="email" id="email" required />
                                    </div>
                                    <div className='form-group'>
                                        <label>Postal Code</label>
                                        <input type="text" id="postalcode" required />
                                    </div>
                                    <div className='form-group'>
                                        <label>Copy of registration documents</label>
                                        <input type="file" id="documents" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" required />
                                    </div>
                                    <div className='form-group'>
                                        <label>Official Site Link</label>
                                        <input type="url" id="sitelink" required />
                                    </div>
                                    <div className='form-group'>
                                        <label>Name and surname of the organization representative</label>
                                        <input type="text" id="orgrepresentative" required />
                                    </div>
                                    <div className='form-group'>
                                        <label>Position</label>
                                        <input type="text" id="position" required />
                                    </div>
                                    <div className='form-group'>
                                        <label>E-mail of representative</label>
                                        <input type="email" id="repmail" required />
                                    </div>
                                    <div className='form-group'>
                                        <label>Organization Logo</label>
                                        <input type="file" id="orglogo" accept=".jpg,.jpeg,.png" required />
                                    </div>
                                </div>
                                <label className='textarea-label'>Organization Mission</label>
                                <textarea
                                    id="organizationDescription"
                                    className="description-textarea"
                                    rows="10" required />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className='third-layer'>
                        <img src={LayerThree} />
                        <div className='our-mission'>
                            <h1>Our Mission</h1>
                            <p>Our mission is to make the eco-movement accessible to everyone by providing access to reliable information and connecting companies and people with each other. We strive to make the eco-movement a reality and a daily occurrence for every person. We also strive to bring people together to fight for the environment. And we want to raise a new generation with new values — love for our planet and care for it, in order to build a clean, safe future for the next generations. United Eco Nations is about unification, accessibility and love.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
