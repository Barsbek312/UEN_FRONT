import React, { Component, useEffect, useRef } from "react";
import LayerOne from "./../../assets/home/mountain_part/MountainLayer1.png";
import LayerTwo from "./../../assets/home/mountain_part/MountainLayer2.png";
import LayerThree from "./../../assets/home/mountain_part/MountainLayer3.png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getOrgList, sendOrgApp } from "../../redux/org";

const MountainPart = () => {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const { isAuth } = useSelector((state) => state.user);
  const { orgList } = useSelector((state) => state.org);

  const handleFormSubmit = async (event) => {
    event && event.preventDefault();

    const formData = new FormData(event.target);
    const res = await dispatch(sendOrgApp(formData));
    formRef.current.reset();
  };

  useEffect(() => {
    if (isAuth) {
      dispatch(getOrgList());
    }
  }, [isAuth]);
  return (
    <div>
      <div className="mountains">
        <div className="first-layer">
          <img src={LayerOne} />
          <div className="partners">
            <h1>Our partners</h1>
            <div className="partners-grid">
              {/* <ul>{orgList && orgList.map((item) => <li>{item.user_name}</li>)}</ul> */}
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="first-layer-continue">

        </div>
        <div className="second-layer">
          <img className="second__layer_img" src={LayerTwo} />
          <div className="organization-application">
            <h1>Do you want to become our partner?</h1>
            <form
              ref={formRef}
              className="app-form"
              onSubmit={handleFormSubmit}
            >
              <div className="first-ones">
                <div className="form-group">
                  <label>Organization name</label>
                  <input type="text" id="name" required name="name" />
                </div>
                <div className="form-group">
                  <label className="selector-label">
                    Choose organization type
                  </label>
                  <select
                    id="organizationType"
                    className="organization-type-selector"
                    required
                    name="type_organization"
                  >
                    <option value={""}>--Choose organization type--</option>
                    <option value={"Eco Organization"}>Eco Organization</option>
                    <option value={"Green Money"}>Green Money</option>
                    <option value={"Organic Producer"}>Organic Producer</option>
                    <option value={"Eco Tech"}>Eco Tech</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Organization Address</label>
                  <input type="text" id="address" required name="address" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" id="phone" required name="phone_number" />
                </div>
                <div className="form-group">
                  <label>E-mail</label>
                  <input type="email" id="email" required name="email" />
                </div>
                <div className="form-group">
                  <label>Postal Code</label>
                  <input
                    type="text"
                    id="postalcode"
                    required
                    name="postal_code"
                  />
                </div>
                <div className="form-group">
                  <label>Copy of registration documents</label>
                  <input
                    type="file"
                    id="documents"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    name="file"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Official Site Link</label>
                  <input
                    type="url"
                    id="sitelink"
                    required
                    name="website_link"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Name and surname of the organization representative
                  </label>
                  <input
                    type="text"
                    id="orgrepresentative"
                    required
                    name="representative_organizations"
                  />
                </div>
                <div className="form-group">
                  <label>Position</label>
                  <input type="text" id="position" required name="position" />
                </div>
                <div className="form-group">
                  <label>Organization Logo</label>
                  <input
                    type="file"
                    id="orglogo"
                    accept=".jpg,.jpeg,.png"
                    required
                    name="logo"
                  />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input type="text" id="city" required name="city" />
                </div>
                <div className="form-group">
                  <label>INN</label>
                  <input type="text" id="INN" required name="INN" />
                </div>
                <div className="form-group">
                  <label>Contact</label>
                  <input type="text" id="contact" required name="contact" />
                </div>
              </div>
              <label className="textarea-label">Organization Mission</label>
              <textarea
                id="organizationDescription"
                className="description-textarea"
                rows="10"
                name="goals_description"
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="third-layer">
          <img src={LayerThree} />
          <div className="our-mission">
            <h1>Our Mission</h1>
            <p>
              Our mission is to make the eco-movement accessible to everyone by
              providing access to reliable information and connecting companies
              and people with each other. We strive to make the eco-movement a
              reality and a daily occurrence for every person. We also strive to
              bring people together to fight for the environment. And we want to
              raise a new generation with new values — love for our planet and
              care for it, in order to build a clean, safe future for the next
              generations. United Eco Nations is about unification,
              accessibility and love.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MountainPart;
