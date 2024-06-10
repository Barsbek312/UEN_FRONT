import React, { useEffect, useState } from "react";
import Example from "./../../assets/about_us/Adil.png";
import { CiCircleInfo } from "react-icons/ci";
import mr from "./ModeratorRoles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteVolunteer, getVolunteerList } from "../../redux/volunteer";
import Nothing from "../common/Nothing/Nothing";
import { deleteRedactor, getRedactorList } from "../../redux/redactor";
import { deleteOrg, getOrgList } from "../../redux/org";
import { Tooltip } from "@mui/material";
import { addModerator, deleteModerator, getAllUsers } from "../../redux/user";

const ModeratorRoles = () => {
  const dispatch = useDispatch();
  const { user, userListForAdmin } = useSelector((state) => state.user);
  const { volList } = useSelector((state) => state.vol);
  const { redactorList } = useSelector((state) => state.redactor);
  const { orgList } = useSelector((state) => state.org);
  const [clickOnFilter, setClickOnFilter] = useState(4);
  const [filtredUserList, setFiltredUserList] = useState(null);

  useEffect(() => {
    if (clickOnFilter === 1) {
      dispatch(getVolunteerList());
    } else if (clickOnFilter === 2) {
      dispatch(getRedactorList());
    } else if (clickOnFilter === 3) {
      dispatch(getOrgList());
    } else if (clickOnFilter === 4) {
      console.log(333);
      dispatch(getAllUsers());
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

  useEffect(() => {
    if (userListForAdmin && user) {
      setFiltredUserList(userListForAdmin.filter(item => item.url !== user.url));
    }
  }, [userListForAdmin, user]);

  const onChangeInputText = (e) => {
    if (userListForAdmin.length > 0) {
      setFiltredUserList(
        userListForAdmin.filter(
          (item) =>
            item.first_name
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) ||
            item.last_name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  const handleClickOnAddMod = async (data) => {
    const res = await dispatch(addModerator({ user: data }));

    if (res.type === "user/add-moderator/fulfilled") {
      dispatch(getAllUsers());
    }
  };

  const handleClickOnDeleteMod = async (id) => {
    const res = await dispatch(deleteModerator(id));

    if (res.type === "user/delete-moderator/fulfilled") {
      dispatch(getAllUsers());
    }
  };

  return (
    <div>
      <div className={mr.mod_role}>
        <div className={mr.role_and_filters}>
          <h1>
            {(clickOnFilter === 1 && "Volunteers") ||
              (clickOnFilter === 2 && "Redactors") ||
              (clickOnFilter === 3 && "Organizations") ||
              (clickOnFilter === 4 && "All users")}
          </h1>
          <div className={mr.filters}>
            {user && user.is_admin && (
              <p
                onClick={() => setClickOnFilter(4)}
                className={`${clickOnFilter === 4 && mr.active}`}
              >
                Users
              </p>
            )}
            <p
              onClick={() => setClickOnFilter(1)}
              className={`${clickOnFilter === 1 && mr.active}`}
            >
              Volunteers
            </p>
            <p
              onClick={() => setClickOnFilter(2)}
              className={`${clickOnFilter === 2 && mr.active}`}
            >
              Editors
            </p>
            <p
              onClick={() => setClickOnFilter(3)}
              className={`${clickOnFilter === 3 && mr.active}`}
            >
              Organizations
            </p>
          </div>
        </div>
        {clickOnFilter === 4 && (
          <div className={mr.user__search_wrapper}>
            <input
              type="text"
              placeholder="Search..."
              onChange={onChangeInputText}
            />
          </div>
        )}
        <div className={mr.mod_roles}>
          {clickOnFilter === 1 && volList && volList.length > 0 ? (
            volList.map((item) => (
              <Tooltip
                title={
                  <React.Fragment>
                    {`Instagram: ${item?.instagram || "Unknown"}`} <br />
                    {`Youtube: ${item?.youtube || "Unknown"}`} <br />
                    {`Telegram: ${item?.telegram || "Unknown"}`} <br />
                    {`Facebook: ${item?.facebook || "Unknown"}`} <br />
                    {`Bio: ${item?.description || "Unknown"}`} <br />
                  </React.Fragment>
                }
              >
                <div className={mr.role}>
                  <div className={mr.ex_name}>
                    <div className={mr.vol__ava_wrapper}>
                      <img src={item.photo || ""} />
                    </div>
                    <p>{item.user_name || "Unknown"}</p>
                  </div>
                  <div className={mr.info_remove}>
                    <p onClick={() => handleClickOnDeleteVol(item.id)}>
                      Remove
                    </p>
                  </div>
                </div>
              </Tooltip>
            ))
          ) : clickOnFilter === 2 && redactorList && redactorList.length > 0 ? (
            redactorList.map((item) => (
              <Tooltip
                title={
                  <React.Fragment>
                    {`Instagram: ${item?.instagram || "Unknown"}`} <br />
                    {`Youtube: ${item?.youtube || "Unknown"}`} <br />
                    {`Telegram: ${item?.telegram || "Unknown"}`} <br />
                    {`Facebook: ${item?.facebook || "Unknown"}`} <br />
                    {`Bio: ${item?.description || "Unknown"}`} <br />
                  </React.Fragment>
                }
              >
                <div className={mr.role}>
                  <div className={mr.ex_name}>
                    <div className={mr.vol__ava_wrapper}>
                      <img src={item.photo || ""} />
                    </div>
                    <p>{item.description || "Unknown"}</p>
                  </div>
                  <div className={mr.info_remove}>
                    <p onClick={() => handleClickOnDeleteRedactor(item.id)}>
                      Remove
                    </p>
                  </div>
                </div>
              </Tooltip>
            ))
          ) : clickOnFilter === 3 && orgList && orgList.length > 0 ? (
            orgList.map((item) => (
              <Tooltip
                title={
                  <React.Fragment>
                    {`Instagram: ${item?.instagram || "Unknown"}`} <br />
                    {`Youtube: ${item?.youtube || "Unknown"}`} <br />
                    {`Telegram: ${item?.telegram || "Unknown"}`} <br />
                    {`Facebook: ${item?.facebook || "Unknown"}`} <br />
                    {`City: ${item?.city || "Unknown"}`} <br />
                    {`Address: ${item?.address || "Unknown"}`} <br />
                  </React.Fragment>
                }
              >
                <div className={mr.role}>
                  <div className={mr.ex_name}>
                    <div className={mr.vol__ava_wrapper}>
                      <img src={item.logo || ""} />
                    </div>
                    <p>{item.city || "Unknown"}</p>
                  </div>
                  <div className={mr.info_remove}>
                    <p onClick={() => handleClickOnDeleteOrg(item.id)}>
                      Remove
                    </p>
                  </div>
                </div>
              </Tooltip>
            ))
          ) : clickOnFilter === 4 &&
            filtredUserList &&
            filtredUserList.length > 0 ? (
            filtredUserList.map((item) => (
              <Tooltip
                title={
                  <React.Fragment>
                    {`email: ${item?.email || "Unknown"}`} <br />
                    {`Birthday: ${item?.birthday || "Unknown"}`} <br />
                    {`Phone: ${item?.phone_number || "Unknown"}`} <br />
                    {`Position: ${
                      (item?.volonteer && "Volunteer") ||
                      (item?.organization && "Organization") ||
                      (item?.redactor && "Redactor") ||
                      "Unknown"
                    }`}{" "}
                    <br />
                  </React.Fragment>
                }
              >
                <div className={mr.role}>
                  <div className={mr.ex_name}>
                    <p>
                      {!item?.first_name && !item.last_name
                        ? "Unknown"
                        : item?.first_name + " " + item?.last_name}
                    </p>
                  </div>
                  <div className={mr.info_remove}>
                    {item?.moderator ? (
                      <p
                        onClick={() =>
                          handleClickOnDeleteMod(item.moderator.id)
                        }
                      >
                        Remove from moderators
                      </p>
                    ) : (
                      <p
                        onClick={() => handleClickOnAddMod(item.url)}
                        style={{ color: "green" }}
                      >
                        Add to moderators
                      </p>
                    )}
                  </div>
                </div>
              </Tooltip>
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
