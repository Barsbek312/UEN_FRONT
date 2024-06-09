import React, { Component, useEffect } from "react";

const OrganizationFavoritesAndFilters = ({ setIsShowFavorite, isShowFavorite }) => {
  const handleClickFav = () => {
    setIsShowFavorite((prevState) => !prevState);
  };
  return (
    <div>
      <div className="favs-and-filters">
        <div className="org-favs">
          <h1 onClick={handleClickFav}>{isShowFavorite ? "Back" : "Favorites"}</h1>
        </div>
        <div className="org-filter"></div>
      </div>
    </div>
  );
};

export default OrganizationFavoritesAndFilters;
