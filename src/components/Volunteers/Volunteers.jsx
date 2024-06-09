import React, { useEffect, useState } from "react";
import example1 from "./../../assets/about_us/Bayel.png";
import { FiFacebook, FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { AiOutlineYoutube } from "react-icons/ai";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { useDispatch, useSelector } from "react-redux";
import { getVolunteerList } from "../../redux/volunteer";
import v from "./Volunteers.module.css";
import { useNavigate } from "react-router-dom";

const Volunteers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { volList } = useSelector((state) => state.vol);
  const [filtredVolList, setFiltredVolList] = useState(null);

  useEffect(() => {
    dispatch(getVolunteerList());
  }, []);

  const onChangeInputText = (e) => {
    if (volList.length > 0) {
      setFiltredVolList(
        volList.filter((item) =>
          item.user_name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    setFiltredVolList(volList);
  }, [volList]);
  return (
    <div>
      <div className="volunteers-tab">
        <div className="volunteers-h1">
          <h1>Volunteers</h1>
        </div>
        <div className={v.vol__search_wrapper}>
          <input
            type="text"
            placeholder="Search..."
            onChange={onChangeInputText}
          />
        </div>
        <div className="volunteer-cards">
          {filtredVolList &&
            filtredVolList.map((item) => (
              <div className={v.volunteer__card} onClick={() => {navigate(`/volunteer/${item.id}/`)}}>
                <div className={v.card__left}>
                  <div className={v.vol__image_wrapper}>
                    <img src={item.photo}></img>
                  </div>
                  <h1>{item.user_name}</h1>
                </div>
                <div className="volunteers-link-icons">
                  {item.facebook && (
                    <a
                      href={item.facebook}
                      style={{ color: "#000" }}
                      target="_blank"
                    >
                      <FiFacebook className="volunteers-link-icon" />
                    </a>
                  )}
                  {item.instagram && (
                    <a
                      href={item.instagram}
                      style={{ color: "#000" }}
                      target="_blank"
                    >
                      <FaInstagram className="volunteers-link-icon" />
                    </a>
                  )}
                  {item.telegram && (
                    <a
                      href={item.telegram}
                      style={{ color: "#000" }}
                      target="_blank"
                    >
                      <LiaTelegramPlane className="volunteers-link-icon" />
                    </a>
                  )}
                  {item.youtube && (
                    <a
                      href={item.youtube}
                      style={{ color: "#000" }}
                      target="_blank"
                    >
                      <AiOutlineYoutube className="volunteers-link-icon" />
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default compose(WithAuthRedirect)(Volunteers);
