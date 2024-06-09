import React, { Component, useEffect, useState } from "react";
import { FaFacebook, FaFacebookF, FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { AiOutlineYoutube } from "react-icons/ai";
import oc from "./OrganizationCards.module.css";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteOrg, getOrgList } from "../../../redux/org";
import OrgCard from "./OrgCard/OrgCard";

const OrganizationCards = ({ isShowFavorite, setIsShowFavorite }) => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.user);
  const { orgList, favOrgList } = useSelector((state) => state.org);

  const [showOrgFavorites, setShowOrgFavorites] = useState(null);

  const handleFavoriteClick = () => {};

  useEffect(() => {
    if (isAuth) {
      dispatch(getOrgList());
      dispatch(getFavoriteOrg());
    }
  }, [isAuth]);

  useEffect(() => {
    if (favOrgList && isAuth && user && orgList) {
      setShowOrgFavorites(
        orgList.map((item) => {
          const favoritedItem = favOrgList.find(
            (item2) =>
              item.url === item2.organization && user.url === item2.user
          );
          return {
            ...item,
            favorite: !!favoritedItem,
            favorite_id: favoritedItem ? favoritedItem.id : null,
          };
        })
      );
    }
  }, [favOrgList, isAuth, user, orgList]);

  useEffect(() => {
    console.log(showOrgFavorites);
  }, [showOrgFavorites]);

  return (
    <div>
      <div className="organization-cards">
        {isShowFavorite
          ? showOrgFavorites &&
            showOrgFavorites.length > 0 &&
            showOrgFavorites.filter(item => item.favorite === true).map((item) => <OrgCard item={item} />)
          : showOrgFavorites &&
            showOrgFavorites.length > 0 &&
            showOrgFavorites.map((item) => <OrgCard item={item} />)}
      </div>
    </div>
  );
};

export default OrganizationCards;
