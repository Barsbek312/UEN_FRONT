import React, { Component, useEffect, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import p from "./Profile.module.css";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../../redux/user";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import GeneralInfo from "./GeneralInfo/GeneralInfo";
import UserLinks from "./UserLinks/UserLinks";
import { FaRegEdit } from "react-icons/fa";
import { changeVol, changeVolAva } from "../../redux/volunteer";
import { changeOrg, changeOrgAva } from "../../redux/org";
import { changeRedactor, changeRedactorAva } from "../../redux/redactor";

const UserProfile = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSettings, setIsSettings] = useState(true);
  const [whoIsThat, setWhoIsThat] = useState(null);

  const goBack = () => {
    navigate(-1);
  };

  const exit = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    if (user) {
      (user?.volonteer && setWhoIsThat("volonteer")) ||
        (user?.organization && setWhoIsThat("organization")) ||
        (user?.redactor && setWhoIsThat("redactor"));
    }
  }, [user]);

  const handleChangeAva = async (event) => {
    if (whoIsThat) {
      let res;
      const data = new FormData();
      data.append("photo", event.target.files[0]);
      if (whoIsThat === "volonteer") {
        res = await dispatch(changeVolAva({ volId: user.volonteer.id, data }));
      } else if (whoIsThat === "organization") {
        res = await dispatch(
          changeOrgAva({ orgId: user.orgnanization.id, data })
        );
      } else if (whoIsThat === "redactor") {
        res = await dispatch(
          changeRedactorAva({ redactorId: user.redactor.id, data })
        );
      }

      if (res.payload.status === 200) {
        dispatch(getUser());
      }
    }
  };

  return (
    <div>
      <div className={p.user_profile}>
        <div className={p.user_profile_back} onClick={goBack}>
          <GoArrowLeft />
        </div>
        <div className={p.user_profile_tab}>
          <div className={p.user__profile_left}>
            {(user?.volonteer || user?.organization || user?.redactor) && (
              <div className={p.user__ava_wrapper}>
                <img
                  src={
                    (user?.volonteer && user.volonteer.photo) ||
                    (user?.organization && user.organization.logo) ||
                    (user?.redactor && user.redactor.photo) ||
                    ""
                  }
                />
              </div>
            )}
            <h1>
              {(user && user.last_name) || ""} {(user && user.first_name) || ""}
            </h1>
          </div>
          <div className={p.change__ava_wrapper}>
            {(user?.volonteer || user?.organization || user?.redactor) && (
              <label htmlFor="change__ava">
                <FaRegEdit className={p.username__edit_button} />
                <input
                  type="file"
                  id="change__ava"
                  onChange={handleChangeAva}
                  accept="image/*"
                />
              </label>
            )}
          </div>
        </div>
        <div className={p.user_profile_selector}>
          <p
            style={{
              color: isSettings ? "white" : "black",
              backgroundColor: isSettings ? "#436D48" : "white",
            }}
            onClick={() => setIsSettings(true)}
          >
            Settings
          </p>
          {(user?.volonteer || user?.organization || user?.redactor) && (
            <p
              style={{
                color: !isSettings ? "white" : "black",
                backgroundColor: !isSettings ? "#436D48" : "white",
              }}
              onClick={() => setIsSettings(false)}
            >
              Links
            </p>
          )}
        </div>
        {isSettings ? (
          <GeneralInfo user={user} />
        ) : (
          <UserLinks whoIsThat={whoIsThat} />
        )}
        <div className={p.user_profile_logout} onClick={exit}>
          <p>Log out</p>
          <RiLogoutBoxLine />
        </div>
      </div>
    </div>
  );
};

export default compose(WithAuthRedirect)(UserProfile);
