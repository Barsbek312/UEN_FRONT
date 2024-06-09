import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Authorization/Login/Login.jsx";
import Signup from "./components/Authorization/Signup/Signup.jsx";
import Organizations from "./components/Organizations/Organizations.jsx";
import WasteManagement from "./components/WasteManagement/WasteManagement.jsx";
import Volunteers from "./components/Volunteers/Volunteers.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import VerifyNotification from "./components/Authorization/VerifyNotification/VerifyNotification.jsx";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Verify from "./components/Authorization/Verify/Verify.jsx";
import { getUser } from "./redux/user.js";
import UserProfile from "./components/Profile/Profile.jsx";
import ModeratorRoles from "./components/ModeratorRoles/ModeratorRoles.jsx";
import ModeratorRequest from "./components/ModeratorRequest/ModeratorRequest.jsx";
import VolunteerProfile from "./components/Volunteers/VolunteerProfile/VolunteerProfile.jsx";

function App() {

  const dispatch = useDispatch();

  const { loadingUser, isModerator } = useSelector(state => state.user);
  const { loadingVol } = useSelector(state => state.vol);
  const { loadingOrg } = useSelector(state => state.org);
  const { loadingRedactor } = useSelector(state => state.redactor);
  const [isShowLoader, setIsShowLoader] = useState(false);


  useEffect(() => {
    const fetchUser = async () => {
      const res = await dispatch(getUser());
    };

    fetchUser();
  }, [])

  useEffect(() => {
    setIsShowLoader(loadingUser || loadingOrg || loadingRedactor || loadingVol);
  }, [loadingUser, loadingOrg, loadingRedactor, loadingVol])


  return (
    <BrowserRouter>
      <div className={'body__wrapper'}>
        {isShowLoader &&
          <div className="circular__progress_wrapper">
            <CircularProgress size={'60px'} color="success" />
          </div>
        }
        <div>

          <Header />
          <div className='start-gap' />
          {
            isModerator ?
              <Routes>
                <Route path="/moderator-roles" element={<ModeratorRoles />} />
                <Route path="/moderator-request" element={<ModeratorRequest />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/wastemanagement" element={<WasteManagement />} />
                <Route path="*" element={<Navigate to="/moderator-roles" />} />
              </Routes>
              :
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/organizations" element={<Organizations />} />
                <Route path="/wastemanagement" element={<WasteManagement />} />
                <Route path="/volunteers" element={<Volunteers />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/verify-email-notification" element={<VerifyNotification />} />
                <Route path='/activate/:uid/:token' element={<Verify />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path='volunteer/:volId' element={<VolunteerProfile />} />
              </Routes>
          }
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
