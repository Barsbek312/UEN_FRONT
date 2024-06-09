import React, { useState } from "react";
import OrganizationsTab from "./OrganizationsTab";
import OrganizationFavoritesAndFilters from "./OrganizationFavoritesAndFilters";
import OrganizationCards from "./OrganizationCards/OrganizationCards";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

const Organizations = () => {
  const [isShowFavorite, setIsShowFavorite] = useState(false);
  return (
    <div className="org__container">
      <OrganizationsTab />
      <OrganizationFavoritesAndFilters setIsShowFavorite={setIsShowFavorite} isShowFavorite={isShowFavorite}/>
      <OrganizationCards setIsShowFavorite={setIsShowFavorite} isShowFavorite={isShowFavorite}/>
    </div>
  );
};

export default Organizations;
