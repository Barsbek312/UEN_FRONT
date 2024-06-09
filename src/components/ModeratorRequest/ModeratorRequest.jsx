import React, { useEffect, useState } from "react";
import mr from "./ModeratorRequest.module.css";
import Example from "./../../assets/about_us/Bayel.png";
import { CiCircleInfo } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  delVolApplication,
  getVolApplication,
  updateVolApplication,
} from "../../redux/volunteer";
import Nothing from "../common/Nothing/Nothing";
import {
  delRedactorApplication,
  getRedactorApplication,
  updateRedactorApplication,
} from "../../redux/redactor";
import {
  delOrgApplication,
  getOrgApplication,
  updateOrgApplication,
} from "../../redux/org";
import { Tooltip } from "@mui/material";

const ModeratorRequest = () => {
  const dispatch = useDispatch();
  const { volApp } = useSelector((state) => state.vol);
  const { redactorApp } = useSelector((state) => state.redactor);
  const { orgApp } = useSelector((state) => state.org);
  const [clickOnFilter, setClickOnFilter] = useState(1);

  useEffect(() => {
    if (clickOnFilter === 1) {
      dispatch(getVolApplication());
    } else if (clickOnFilter === 2) {
      dispatch(getRedactorApplication());
    } else if (clickOnFilter === 3) {
      dispatch(getOrgApplication());
    }
  }, [clickOnFilter]);

  // volunteer functions
  const handleClickDeleteVolApp = async (appId) => {
    const res = await dispatch(delVolApplication(appId));
    if (res.type === "vol/delete-vol-application/fulfilled") {
      dispatch(getVolApplication());
    }
  };

  const handleClickAcceptVolApp = async (appId) => {
    console.log(appId);
    const res = await dispatch(
      updateVolApplication({ data: { accepted: true }, id: appId })
    );

    if (res.type === "vol/update-vol-application/fulfilled") {
      handleClickDeleteVolApp(appId);
    }
  };

  useEffect(() => {
    console.log(orgApp, clickOnFilter);
  }, [orgApp]);

  // redactor functions

  const handleClickDeleteRedactorApp = async (appId) => {
    const res = await dispatch(delRedactorApplication(appId));
    if (res.type === "redactor/delete-redactor-application/fulfilled") {
      dispatch(getRedactorApplication());
    }
  };

  const handleClickAcceptRedactorApp = async (appId) => {
    console.log(appId);
    const res = await dispatch(
      updateRedactorApplication({ data: { accepted: true }, id: appId })
    );

    if (res.type === "redactor/update-redactor-application/fulfilled") {
      handleClickDeleteRedactorApp(appId);
    }
  };

  // org functions

  const handleClickDeleteOrgApp = async (appId) => {
    const res = await dispatch(delOrgApplication(appId));
    if (res.type === "org/delete-org-application/fulfilled") {
      dispatch(getOrgApplication());
    }
  };

  const handleClickAcceptOrgApp = async (appId) => {
    console.log(appId);
    const res = await dispatch(
      updateOrgApplication({ data: { accepted: true }, id: appId })
    );

    if (res.type === "org/update-org-application/fulfilled") {
      handleClickDeleteOrgApp(appId);
    }
  };

  return (
    <div className={mr.mod_req}>
      <div className={mr.req_and_filters}>
        <h1>Requests</h1>
        <div className={mr.filters}>
          <p
            className={`${clickOnFilter === 1 && mr.active}`}
            onClick={() => setClickOnFilter(1)}
          >
            Volunteers
          </p>
          <p
            className={`${clickOnFilter === 2 && mr.active}`}
            onClick={() => setClickOnFilter(2)}
          >
            Editors
          </p>
          <p
            className={`${clickOnFilter === 3 && mr.active}`}
            onClick={() => setClickOnFilter(3)}
          >
            Organizations
          </p>
        </div>
      </div>
      <div className={mr.mod_requests}>
        <p>
          Want to
          {(clickOnFilter === 1 && " volunteer") ||
            (clickOnFilter === 2 && " redactor") ||
            (clickOnFilter === 3 && " organization")}
        </p>
        <div className={mr.requests}>
          {clickOnFilter === 1 && volApp && volApp.length > 0 ? (
            volApp.map((item) => (
              <Tooltip
                title={
                  <React.Fragment>
                    {`Instagram: ${item?.instagram || "Unknown"}`} <br />
                    {`Youtube: ${item?.youtube || "Unknown"}`} <br />
                    {`Telegram: ${item?.telegram || "Unknown"}`} <br />
                    {`Facebook: ${item?.facebook || "Unknown"}`} <br />
                    {`City: ${item?.city || "Unknown"}`} <br />
                    {`Country: ${item?.country || "Unknown"}`} <br />
                    {`volonteer_type: ${
                      item?.volonteer_type || "Unknown"
                    }`}{" "}
                    <br />
                  </React.Fragment>
                }
              >
                <div className={mr.request}>
                  <div className={mr.ex_name}>
                    <div className={mr.img__ava_wrapper}>
                      <img src={item.photo || ""} />
                    </div>
                    <p>{item.volonteer_type || "Неизвестно"}</p>
                  </div>
                  <div className={mr.acc_dis}>
                    <p onClick={() => handleClickDeleteVolApp(item.id)}>
                      Dismiss
                    </p>
                    <p onClick={() => handleClickAcceptVolApp(item.id)}>
                      Accept
                    </p>
                  </div>
                </div>
              </Tooltip>
            ))
          ) : clickOnFilter === 2 && redactorApp && redactorApp.length > 0 ? (
            redactorApp.map((item) => (
              <Tooltip
                title={
                  <React.Fragment>
                    {`Instagram: ${item?.instagram || "Unknown"}`} <br />
                    {`Youtube: ${item?.youtube || "Unknown"}`} <br />
                    {`Telegram: ${item?.telegram || "Unknown"}`} <br />
                    {`Facebook: ${item?.facebook || "Unknown"}`} <br />
                    {`City: ${item?.city || "Unknown"}`} <br />
                    {`Country: ${item?.country || "Unknown"}`} <br />
                    {`Bio: ${item?.description || "Unknown"}`} <br />
                  </React.Fragment>
                }
              >
                <div className={mr.request}>
                  <div className={mr.ex_name}>
                    <div className={mr.img__ava_wrapper}>
                      <img src={item.photo || ""} />
                    </div>
                    <p>{item.country || "Неизвестно"}</p>
                  </div>
                  <div className={mr.acc_dis}>
                    <p onClick={() => handleClickDeleteRedactorApp(item.id)}>
                      Dismiss
                    </p>
                    <p onClick={() => handleClickAcceptRedactorApp(item.id)}>
                      Accept
                    </p>
                  </div>
                </div>
              </Tooltip>
            ))
          ) : clickOnFilter === 3 && orgApp && orgApp.length > 0 ? (
            orgApp.map((item) => (
              <Tooltip
                title={
                  <React.Fragment>
                    {`Instagram: ${item?.instagram || "Unknown"}`} <br />
                    {`Youtube: ${item?.youtube || "Unknown"}`} <br />
                    {`Telegram: ${item?.telegram || "Unknown"}`} <br />
                    {`Facebook: ${item?.facebook || "Unknown"}`} <br />
                    {`City: ${item?.city || "Unknown"}`} <br />
                    {`email: ${item?.email || "Unknown"}`} <br />
                    {`Name: ${item?.name || "Unknown"}`} <br />
                    {`INN: ${item?.INN || "Unknown"}`} <br />
                    {`Phone: ${item?.phone_number || "Unknown"}`} <br />
                    {`Position: ${item?.position || "Unknown"}`} <br />
                  </React.Fragment>
                }
              >
                <div className={mr.request}>
                  <div className={mr.ex_name}>
                    <div className={mr.img__ava_wrapper}>
                      <img src={item.logo || ""} />
                    </div>
                    <p>{item.name || "Неизвестно"}</p>
                  </div>
                  <div className={mr.acc_dis}>
                    <p onClick={() => handleClickDeleteOrgApp(item.id)}>
                      Dismiss
                    </p>
                    <p onClick={() => handleClickAcceptOrgApp(item.id)}>
                      Accept
                    </p>
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

export default ModeratorRequest;
