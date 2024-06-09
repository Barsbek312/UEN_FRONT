import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser } from "../../../redux/user";
import { ClickAwayListener, MenuItem, Select, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FormControl } from "react-bootstrap";
import s from "./signup.module.css";
import ChooseUserType from "./ChooseUserType/ChooseUserType";
import VolunteerApplication from "./VolunteerApplication/VolunteerApplication";
import OrgApplication from "./OrgApplication/OrgApplication";
import RedactorApplication from "./RedactorApplication/RedactorApplication";
import { sendVolApplication } from "../../../redux/volunteer";
import { sendRedactorApp } from "../../../redux/redactor";
import { sendOrgApp } from "../../../redux/org";
import { GoArrowLeft } from "react-icons/go";

const Signup = () => {
  const {
    control,
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Storage of signup info

  const [basicInfo, setBasicInfo] = useState(null);
  const [applicationInfo, setApplicationInfo] = useState(null);
  const [currentUserType, setCurrentUserType] = useState(null);

  // move to next step of registration

  const [isMovedToChooseUserType, setIsMovedToChooseUserType] = useState(false);

  const handleClickAfterChooseUserType = () => {
    const data = getValues();
    if (
      data["user_type"] !== 0 &&
      data["user_type"] !== 1 &&
      data["user_type"] !== 2 &&
      data["user_type"] !== 3
    ) {
      setError("user_type", {
        type: "manual",
        message: "Тип пользователя является обязательным полем",
      });
    } else if (data["user_type"] === 0) {
      handleFormSubmit(basicInfo, null);
    } else {
      setCurrentUserType(data["user_type"]);
    }
  };

  // end move to next step of registration

  // show errors start

  const [errorMessage, setErrorMessage] = useState("");

  const [isOpenTooltip, setIsOpenTooltip] = useState(false);
  const handleCloseTooltip = () => {
    setIsOpenTooltip(false);
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setIsOpenTooltip(true);
    } else {
      setIsOpenTooltip(false);
    }
  }, [errors]);

  const checkOnClickFormSubmit = () => {
    if (Object.keys(errors).length > 0) {
      setIsOpenTooltip(true);
    }
  };

  // show errors end

  // sending form function start

  const handleFormSubmit = async (data, event) => {
    event && event.preventDefault();

    if (!isMovedToChooseUserType) {
      setIsMovedToChooseUserType(true);
      setBasicInfo(data);

      return 0;
    }

    if (data["password"] !== data["password__again"]) {
      setError("password__again", {
        type: "custom",
        message: "Пароли не совпали",
      });

      return 0;
    }

    delete data["password__again"];
    delete data["user_type"];

    const res = await dispatch(createUser(data));

    if (res.type === "user/register/fulfilled") {
      navigate("/verify-email-notification");
    } else {
      setErrorMessage(
        Object.values(res.payload.response.data)?.[0]?.[0] ||
          "Произошла ошибка, попробуйте позже"
      );
    }

    return res;
  };

  const sendVolAppSubmit = async (data) => {
    const res = await dispatch(sendVolApplication(data));

    if (res.type === "vol/send-vol-application/fulfilled") {
    } else {
    }

    return res;
  };

  const sendOrgAppSubmit = async (data) => {
    const res = await dispatch(sendOrgApp(data));

    if (res.type === "org/send-org-app/fulfilled") {
    } else {
    }
    return res;
  };

  const sendRedactorAppSubmit = async (data) => {
    const res = await dispatch(sendRedactorApp(data));

    if (res.type === "redactor/send-redactor-app/fulfilled") {
    } else {
    }

    return res;
  };

  const handleApplicationSubmit = async (
    basicInfo,
    applicationInfo,
    currentUserType
  ) => {
    const basicFormRes = await handleFormSubmit(basicInfo, null);
    console.log(basicFormRes);
    if (basicFormRes.type === "user/register/fulfilled") {
      const user = basicFormRes?.payload?.data?.url || null;
      applicationInfo.append("user", user);
      let appFormRes;
      if (currentUserType === 1) {
        appFormRes = await sendVolAppSubmit(applicationInfo);
      } else if (currentUserType === 2) {
        appFormRes = await sendRedactorAppSubmit(applicationInfo);
      }
    }
  };

  useEffect(() => {
    if (applicationInfo !== null && basicInfo !== null && currentUserType)
      handleApplicationSubmit(basicInfo, applicationInfo, currentUserType);
  }, [applicationInfo]);

  // sending form function end

  const goBack = () => {
    setCurrentUserType(null);
  };

  return (
    <div className="white-bg">
      <div className="sign-up">
        <h1>Sign Up</h1>
        {isMovedToChooseUserType && currentUserType && (
          <div className={s.signup_back} onClick={goBack}>
            <GoArrowLeft />
          </div>
        )}
        {isMovedToChooseUserType ? (
          currentUserType === 1 ? (
            <VolunteerApplication setApplicationInfo={setApplicationInfo} />
          ) : currentUserType === 2 ? (
            <RedactorApplication setApplicationInfo={setApplicationInfo} />
          ) : (
            <ChooseUserType
              control={control}
              handleClickAfterChooseUserType={handleClickAfterChooseUserType}
              errors={errors}
            />
          )
        ) : (
          <div className={s.signup__form_wrapper}>
            <form
              className="sign-up-form"
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                placeholder={
                  errors["username"]
                    ? errors["username"].message
                    : "Введите username"
                }
                {...register("username")}
              />

              <label htmlFor="first_name">First Name</label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                required
                placeholder={
                  errors["first_name"]
                    ? errors["first_name"].message
                    : "Введите имя"
                }
                {...register("first_name")}
              />

              <label htmlFor="last_name">Last Name</label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                required
                placeholder={
                  errors["last_name"]
                    ? errors["last_name"].message
                    : "Введите фамилию"
                }
                {...register("last_name")}
              />

              <label htmlFor="birthday">Birth Date</label>
              <input
                id="birthday"
                name="birthday"
                type="date"
                placeholder={
                  errors["birthday"]
                    ? errors["birthday"].message
                    : "Введите дату рождения"
                }
                required
                {...register("birthday")}
              />

              <label htmlFor="phone_number">Phone Number</label>
              <input
                id="phone_number"
                name="phone_number"
                type="tel"
                required
                placeholder={
                  errors["phone_number"]
                    ? errors["phone_number"].message
                    : "Введите номер телефона"
                }
                {...register("phone_number")}
              />

              <label htmlFor="email">Email</label>
              <Tooltip
                open={isOpenTooltip && errors["email"] && true}
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleCloseTooltip}
                title={errors["email"] && errors["email"].message}
              >
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  {...register("email", {
                    required: "email is a required field",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                  placeholder={
                    errors["email"] ? errors["email"].message : "Введите почту"
                  }
                />
              </Tooltip>

              <label htmlFor="password">Password</label>
              <Tooltip
                open={
                  isOpenTooltip &&
                  (errors["password"] || errors["password_again"]) &&
                  true
                }
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleCloseTooltip}
                title={
                  (errors["password"] && errors["password"].message) ||
                  (errors["password_again"] && errors["password_again"].message)
                }
              >
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder={
                    errors["password"]
                      ? errors["password"].message
                      : "Введите пароль"
                  }
                  required
                  {...register("password", {
                    required: "Password is a required field",
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                      message:
                        "The password must contain at least one digit, one uppercase letter, one special character and have a minimum length of 8 characters",
                    },
                  })}
                  style={{
                    borderColor:
                      errors["password"] || errors["password__again"]
                        ? "red"
                        : "#333333",
                  }}
                />
              </Tooltip>

              <label htmlFor="confirmPassword">Confirm Password</label>
              <Tooltip
                open={
                  isOpenTooltip &&
                  (errors["password"] || errors["password_again"]) &&
                  true
                }
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleCloseTooltip}
                title={
                  (errors["password"] && errors["password"].message) ||
                  (errors["password_again"] && errors["password_again"].message)
                }
              >
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder={
                    errors["password__again"]
                      ? errors["password__again"].message
                      : "Введите пароль снова"
                  }
                  required
                  {...register("password__again")}
                  style={{
                    borderColor:
                      errors["password"] || errors["password__again"]
                        ? "red"
                        : "#333333",
                  }}
                />
              </Tooltip>
              <p
                style={{
                  color: errorMessage ? "red" : "transparent",
                  margin: 0,
                }}
              >
                {errorMessage ||
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, veniam."}
              </p>
              <div className="terms-checkbox">
                <input id="terms" name="terms" type="checkbox" required />
                <label htmlFor="terms">
                  I agree to the <a href="/privacy-policy">Privacy Policy</a>{" "}
                  and <a href="/terms-of-service">Terms of Service</a>.
                </label>
              </div>
              <button type="submit" onClick={checkOnClickFormSubmit}>
                Continue
              </button>
            </form>
          </div>
        )}
        <p>
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
