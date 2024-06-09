import React, { useEffect, useState } from "react";
import oc from "./../OrganizationCards.module.css";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { LiaTelegramPlane } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteOrg,
  deleteFavoriteOrg,
  getFavoriteOrg,
  getOrgList,
} from "../../../../redux/org";

const OrgCard = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(item.favorite);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleFavoriteClick = async () => {
    if (item?.url && user?.url && !isFavorite) {
      const data = {
        organization: item.url,
        user: user.url,
      };

      const res = await dispatch(addFavoriteOrg(data));

      if (res.type === "org/add-fav-org/fulfilled") {
        dispatch(getOrgList());
        dispatch(getFavoriteOrg());
      }
    } else if (isFavorite && item?.url && user?.url) {
      const res = await dispatch(deleteFavoriteOrg(item.favorite_id));

      if (res.type === "org/del-fav-org/fulfilled") {
        dispatch(getOrgList());
        dispatch(getFavoriteOrg());
      }
    }
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <div className="org-card">
      <div className="upper-card">
        <div className={oc.contact__wrapper}>
          <div className={oc.logo__wrapper}>
            <img src={item?.logo || ""} />
          </div>
          <div className="org-link-icons">
            {item?.instagram && (
              <a
                href={item?.instagram}
                style={{ color: "#000" }}
                target="_blank"
              >
                <FaInstagram className="org-link-icon" />
              </a>
            )}
            {item?.telegram && (
              <a
                href={item?.telegram}
                style={{ color: "#000" }}
                target="_blank"
              >
                <LiaTelegramPlane className="org-link-icon" />
              </a>
            )}
            {item?.facebook && (
              <a
                href={item?.facebook}
                style={{ color: "#000" }}
                target="_blank"
              >
                <FaFacebookF className="org-link-icon" />
              </a>
            )}
            {item?.youtube && (
              <a href={item?.youtube} style={{ color: "#000" }} target="_blank">
                <AiOutlineYoutube className="org-link-icon" />
              </a>
            )}
          </div>
        </div>
        <div className={oc.favorite__wrapper}>
          <IconButton onClick={handleFavoriteClick} color="primary">
            {isFavorite ? (
              <FavoriteIcon style={{ color: "red", fontSize: "40px" }} />
            ) : (
              <FavoriteBorderIcon
                style={{ color: "white", fontSize: "40px" }}
              />
            )}
          </IconButton>
        </div>
      </div>
      <div className="lower-card">
        <h1>{item?.user_name || ""}</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default OrgCard;
