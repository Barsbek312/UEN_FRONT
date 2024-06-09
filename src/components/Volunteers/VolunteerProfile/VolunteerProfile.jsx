import React, { useEffect } from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { LiaTelegramPlane } from "react-icons/lia";
import vp from "./VolunteerProfile.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVolunteer } from "../../../redux/volunteer";
import { compose } from "redux";
import { WithAuthRedirect } from "../../../hoc/WithAuthRedirect";

const VolunteerProfile = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { vol } = useSelector((state) => state.vol);
  const { isAuth } = useSelector((state) => state.user);

  useEffect(() => {
    if (params.volId && isAuth) {
      dispatch(getVolunteer(params.volId));
    }
  }, [isAuth]);

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className={vp.volunteer_tab}>
      <div className={vp.volunteer_profile_back} onClick={goBack}>
        <GoArrowLeft onClick={goBack} />
      </div>
      <div className={vp.volunteer_profile_tab}>
        <div className={vp.vol__ava_wrapper}>
          <img src={vol?.photo || ""} className={vp.example_img} />
        </div>
        <h1>{vol?.user_name || "Unknown"}</h1>
      </div>
      <div className={vp.volunteer_profile_links}>
        {vol?.instagram && (
          <a href={vol.instagram} style={{ color: "#000" }} target="_blank">
            <FaInstagram className={vp.volunteertab_link_icon} />
          </a>
        )}
        {vol?.telegram && (
          <a href={vol.telegram} style={{ color: "#000" }} target="_blank">
            <LiaTelegramPlane className={vp.volunteertab_link_icon} />
          </a>
        )}
        {vol?.facebook && (
          <a href={vol.facebook} style={{ color: "#000" }} target="_blank">
            <FaFacebook className={vp.volunteertab_link_icon} />
          </a>
        )}
        {vol?.youtube && (
          <a href={vol.youtube} style={{ color: "#000" }} target="_blank">
            <AiOutlineYoutube className={vp.volunteertab_link_icon} />
          </a>
        )}
      </div>
      <div className={vp.volunteer_profile_desc}>
        <p>{vol?.description || ""}</p>
      </div>
    </div>
  );
};

export default compose(WithAuthRedirect)(VolunteerProfile);
