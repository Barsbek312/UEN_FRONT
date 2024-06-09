import React from "react";
import p from "./../Profile.module.css";

const GeneralInfo = ({ user }) => {
  return (
    <div className={p.user_settings}>
      <div className={p.option}>
        <p>Name:</p>
        <p>{(user && user.first_name) || "Undefined"}</p>
      </div>
      <div className={p.option}>
        <p>Surname:</p>
        <p>{(user && user.last_name) || "Undefined"}</p>
      </div>
      <div className={p.option}>
        <p>Birth Date:</p>
        <p>{user && user.birthday}</p>
      </div>
      <div className={p.option}>
        <p>Phone Number:</p>
        <p>{user && user["phone_number"]}</p>
      </div>
      <div className={p.option}>
        <p className={p.option__email}>E-Mail:</p>
        <p>{(user && user.email) || "Unknown"}</p>
      </div>
      {/* {user && !user?.organization && !user?.volonteer && !user?.redactor ? (
        <div className={p.option}>
          <p>Position:</p>
          <select name="position" id="">
            <option value="">Organization</option>
            <option value="">Volunteer</option>
            <option value="">Redactor</option>
          </select>
        </div>
      ) : (
        <div className={p.option}>
          <p>Password:</p>
          <p>************</p>
        </div>
      )} */}
      <div className={p.option}>
          <p>Password:</p>
          <p>************</p>
        </div>
      <div className={p.option}>
        <p>Theme:</p>
        <p>Light</p>
      </div>
      <div className={p.option}>
        <p>Language:</p>
        <p>English</p>
      </div>
    </div>
  );
};

export default GeneralInfo;
