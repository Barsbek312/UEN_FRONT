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
  const [filtredOrgList, setFiltredOrgList] = useState(null);

  const [showOrgFavorites, setShowOrgFavorites] = useState(null);

  useEffect(() => {
    console.log(showOrgFavorites)
    setFiltredOrgList(showOrgFavorites);
  }, [showOrgFavorites]);

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

  const onChangeInputText = (e) => {
    if (showOrgFavorites.length > 0) {
      setFiltredOrgList(
        showOrgFavorites.filter((item) =>
          item.user_name
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
      <input className={oc.search__org} placeholder="Search..." type="text" onChange={onChangeInputText}/>
      <div className="organization-cards">
        {isShowFavorite
          ? filtredOrgList &&
          filtredOrgList.length > 0 &&
          filtredOrgList
              .filter((item) => item.favorite === true)
              .map((item) => <OrgCard item={item} />)
          : filtredOrgList &&
          filtredOrgList.length > 0 &&
          filtredOrgList.map((item) => <OrgCard item={item} />)}
      </div>
    </div>
  );
};

export default OrganizationCards;
