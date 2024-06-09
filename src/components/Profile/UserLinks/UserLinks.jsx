import React, { useEffect, useState } from "react";
import p from "./../Profile.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { getUser } from "../../../redux/user";
import { changeRedactor } from "../../../redux/redactor";
import { changeOrg } from "../../../redux/org";
import { changeVol } from "../../../redux/volunteer";
import { useDispatch, useSelector } from "react-redux";

const UserLinks = ({ whoIsThat = null }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [isEditMode, setIsEditMode] = useState(false);

  const handleClickButton = async (data) => {
    if (!isEditMode) {
      setIsEditMode(true);
      console.log(data);
      return 0;
    }

    setIsEditMode(false);
    for (let key in data) {
      if (!data[key]) delete data[key];
    }
    let res;
    if (whoIsThat === "volonteer") {
      res = await dispatch(changeVol({ volId: user.volonteer.id, data }));
    } else if (whoIsThat === "organization") {
      res = await dispatch(changeOrg({ orgId: user.orgnanization.id, data }));
    } else if (whoIsThat === "redactor") {
      res = await dispatch(
        changeRedactor({ redactorId: user.redactor.id, data })
      );
    }

    console.log(res);

    if (res.payload.status === 200) {
      dispatch(getUser());
    }
    console.log(data);
  };

  useEffect(() => {
    console.log(user[whoIsThat])
  }, [user])

  return (
    <div className={p.user__links}>
      <div className={p.input__wrapper}>
        <div className={p.link__logo_wrapper}>
          <FaInstagram size={"32px"} />
        </div>
        <input
          type="text"
          placeholder="Instagram"
          disabled={isEditMode ? false : true}
          defaultValue={user && whoIsThat && user[whoIsThat].instagram}
          {...register("instagram")}
        />
      </div>
      <div className={p.input__wrapper}>
        <div className={p.link__logo_wrapper}>
          <FaFacebookF size={"32px"} />
        </div>
        <input
          type="text"
          placeholder="Facebook"
          disabled={isEditMode ? false : true}
          defaultValue={user && whoIsThat && user[whoIsThat].facebook}
          {...register("facebook")}
        />
      </div>
      <div className={p.input__wrapper}>
        <div className={p.link__logo_wrapper}>
          <FaYoutube size={"32px"} />
        </div>
        <input
          type="text"
          placeholder="Youtube"
          disabled={isEditMode ? false : true}
          defaultValue={user && whoIsThat && user[whoIsThat].youtube}
          {...register("youtube")}
        />
      </div>
      <div className={p.input__wrapper}>
        <div className={p.link__logo_wrapper}>
          <FaTelegramPlane size={"32px"} />
        </div>
        <input
          type="text"
          placeholder="Telegram"
          disabled={isEditMode ? false : true}
          defaultValue={user && whoIsThat && user[whoIsThat].telegram}
          {...register("telegram")}
        />
      </div>
      <div className={p.button__wrapper}>
        <button onClick={handleSubmit(handleClickButton)}>
          {isEditMode ? "Save" : "Change"}
        </button>
      </div>
    </div>
  );
};

export default UserLinks;
