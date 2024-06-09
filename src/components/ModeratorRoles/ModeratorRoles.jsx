import React, { useEffect, useState } from "react";
import Example from "./../../assets/about_us/Adil.png";
import { CiCircleInfo } from "react-icons/ci";
import mr from "./ModeratorRoles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteVolunteer, getVolunteerList } from "../../redux/volunteer";
import Nothing from "../common/Nothing/Nothing";
import { deleteRedactor, getRedactorList } from "../../redux/redactor";
import { deleteOrg, getOrgList } from "../../redux/org";

const ModeratorRoles = () => {
  const dispatch = useDispatch();
  const { volList } = useSelector((state) => state.vol);
  const { redactorList } = useSelector((state) => state.redactor);
  const { orgList } = useSelector((state) => state.org);
  const [clickOnFilter, setClickOnFilter] = useState(1);

  useEffect(() => {
    if (clickOnFilter === 1) {
      dispatch(getVolunteerList());
    } else if (clickOnFilter === 2) {
      dispatch(getRedactorList());
    } else if (clickOnFilter === 3) {
      console.log(333);
      dispatch(getOrgList());
    }
  }, [clickOnFilter]);

  const handleClickOnDeleteVol = async (volId) => {
    const res = await dispatch(deleteVolunteer(volId));

    if (res.type === "vol/delete-vol/fulfilled") {
      dispatch(getVolunteerList());
    }
  };

  const handleClickOnDeleteRedactor = async (redactorId) => {
    const res = await dispatch(deleteRedactor(redactorId));

    if (res.type === "redactor/delete-redactor/fulfilled") {
      dispatch(getRedactorList());
    }
  };

  const handleClickOnDeleteOrg = async (orgId) => {
    const res = await dispatch(deleteOrg(orgId));

    if (res.type === "org/delete-org/fulfilled") {
      dispatch(getOrgList());
    }
  };

  return (
    <div>
      <div className={mr.mod_role}>
        <div className={mr.role_and_filters}>
          <h1>{clickOnFilter === 1 && "Volunteers" || clickOnFilter === 2 && "Redactors" || clickOnFilter === 3 && "Organizations"}</h1>
          <div className={mr.filters}>
            <p onClick={() => setClickOnFilter(1)} className={`${clickOnFilter === 1 && mr.active}`}>Volunteers</p>
            <p onClick={() => setClickOnFilter(2)} className={`${clickOnFilter === 2 && mr.active}`}>Editors</p>
            <p onClick={() => setClickOnFilter(3)} className={`${clickOnFilter === 3 && mr.active}`}>Organizations</p>
          </div>
        </div>
        <div className={mr.mod_roles}>
          {clickOnFilter === 1 && volList && volList.length > 0 ? (
            volList.map((item) => (
              <div className={mr.role}>
                <div className={mr.ex_name}>
                  <div className={mr.vol__ava_wrapper}>
                    <img src={item.photo || ""} />
                  </div>
                  <p>{item.user_name || "Unknown"}</p>
                </div>
                <div className={mr.info_remove}>
                  <p onClick={() => handleClickOnDeleteVol(item.id)}>Remove</p>
                </div>
              </div>
            ))
          ) : clickOnFilter === 2 && redactorList && redactorList.length > 0 ? (
            redactorList.map((item) => (
              <div className={mr.role}>
                <div className={mr.ex_name}>
                  <div className={mr.vol__ava_wrapper}>
                    <img src={item.photo || ""} />
                  </div>
                  <p>{item.description || "Unknown"}</p>
                </div>
                <div className={mr.info_remove}>
                  <p onClick={() => handleClickOnDeleteRedactor(item.id)}>Remove</p>
                </div>
              </div>
            ))
          ) : clickOnFilter === 3 && orgList && orgList.length > 0 ? (
            orgList.map((item) => (
              <div className={mr.role}>
                <div className={mr.ex_name}>
                  <div className={mr.vol__ava_wrapper}>
                    <img src={item.logo || ""} />
                  </div>
                  <p>{item.city || "Unknown"}</p>
                </div>
                <div className={mr.info_remove}>
                  <p onClick={() => handleClickOnDeleteOrg(item.id)}>Remove</p>
                </div>
              </div>
            ))
          ) : (
            <Nothing />
          )}
        </div>
      </div>
    </div>
  );
};

export default ModeratorRoles;
