import React from "react";
import ra from "./RedactorApplication.module.css";

const RedactorApplication = ({ setApplicationInfo }) => {
  const handleFormSubmit = (event) => {
    event && event.preventDefault();

    const formData = new FormData(event.target);
    setApplicationInfo(formData);
  };
  return (
    <div className={ra.application_form}>
      <div className={ra.fill_board}>
        <h1>Fill out the application form</h1>
      </div>
      <div>
        <form
          className={ra.editor_application_form}
          onSubmit={handleFormSubmit}
        >
          <label htmlFor="passportPhoto">Passport Photo</label>
          <input
            id="passportPhoto"
            name="passport_photo"
            type="file"
            required
          />
          <label htmlFor="reasonText">Reason for becoming an editor</label>
          <textarea id="reasonText" name="description" required />
          <label htmlFor="photo">Photo</label>
          <input id="photo" name="photo" type="file" required />
          <label htmlFor="city">City</label>
          <input id="city" name="city" type="text" required />
          <label htmlFor="country">Country</label>
          <input id="country" name="country" type="text" required />
          <label htmlFor="application_statement">Application Statement</label>
          <input id="application_statement" name="application_statement" type="text" required />
          <label htmlFor="instagram">Instagram (Not required)</label>
          <input id="instagram" name="instagram" type="text" />
          <label htmlFor="facebook">Facebook (Not required)</label>
          <input id="facebook" name="facebook" type="text" />
          <label htmlFor="youtube">YouTube (Not required)</label>
          <input id="youtube" name="youtube" type="text" />
          <label htmlFor="telegram">Telegram (Not required)</label>
          <input id="telegram" name="telegram" type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RedactorApplication;
