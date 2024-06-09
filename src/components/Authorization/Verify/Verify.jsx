import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { verifyEmail } from "../../../redux/user";

const Verify = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVerifyEmail = async (uid, token) => {
      const res = await dispatch(verifyEmail({ uid, token }));
      if(res.type === "user/verify/fulfilled") {
        navigate('/login');
      }
    };
    if (params && params.uid && params.token) {
      fetchVerifyEmail(params.uid, params.token);
    }
  }, []);

  return <div></div>;
};

export default Verify;
