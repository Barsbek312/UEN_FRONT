import React from "react";
import va from "./OrgApplication.module.css";

const OrgApplication = ({ setApplicationInfo }) => {
  const handleFormSubmit = (event) => {
    event && event.preventDefault();
    const formData = new FormData(event.target);
    // setApplicationInfo(formData)
  };
  return (
    <div className={va.application_form}>
      <div className={va.fill_board}>
        <h1>Fill out the application form</h1>
      </div>
      <div>
        <form
          className={va.organization_application_form}
          onSubmit={handleFormSubmit}
        >
          <div className={va.first_ones}>
            <div className={va.form_group}>
              <label>Organization name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={va.form_group}>
              <label className={va.selector_label}>
                Choose organization type
              </label>
              <select
                id="organizationType"
                className={va.organization_type_selector}
                name="type_organization"
                required
              >
                <option value={""}>--Choose organization type--</option>
                <option value={"Eco Organization"}>Eco Organization</option>
                <option value={"Green Money"}>Green Money</option>
                <option value={"Organic Producer"}>Organic Producer</option>
                <option value={"Eco Tech"}>Eco Tech</option>
              </select>
            </div>
            <div className={va.form_group}>
              <label>Organization Address</label>
              <input type="text" id="address" required name="address" />
            </div>
            <div className={va.form_group}>
              <label>Phone Number</label>
              <input type="tel" id="phone" required name="phone_number" />
            </div>
            <div className={va.form_group}>
              <label>E-mail</label>
              <input type="email" id="email" required name="email" />
            </div>
            <div className={va.form_group}>
              <label>Postal Code</label>
              <input type="text" id="postalcode" required name="postal_code" />
            </div>
            <div className={va.form_group}>
              <label>Copy of registration documents</label>
              <input
                type="file"
                id="documents"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                required
                name="file"
              />
            </div>
            <div className={va.form_group}>
              <label>Official Site Link</label>
              <input type="url" id="sitelink" required name="website_link" />
            </div>
            <div className={va.form_group}>
              <label>Name and surname of the organization representative</label>
              <input
                type="text"
                id="orgrepresentative"
                required
                name="representative_organizations"
              />
            </div>
            <div className={va.form_group}>
              <label>Position</label>
              <input type="text" id="position" required name="position" />
            </div>
            <div className={va.form_group}>
              <label>Organization Logo</label>
              <input
                type="file"
                id="orglogo"
                accept=".jpg,.jpeg,.png"
                required
                name="logo"
              />
            </div>
            <div className={va.form_group}>
              <label>City</label>
              <input type="text" id="city" required name="city" />
            </div>
            <div className={va.form_group}>
              <label>INN</label>
              <input type="text" id="INN" required name="INN" />
            </div>
            <div className={va.form_group}>
              <label>Contact</label>
              <input type="text" id="contact" required name="contact" />
            </div>
          </div>
          <label className={va.textarea_label}>Organization Mission</label>
          <textarea
            id="organizationDescription"
            className={va.description_textarea}
            rows="10"
            required
            name="goals_description"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default OrgApplication;
