import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { verifyUser } from '../redux/user';

export const WithAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        const navigate = useNavigate();
        const dispatch = useDispatch();

        const checkAuth = async () => {
            const res = await dispatch(verifyUser());
            console.log(res);
            if (res.type !== "user/verify-user/fulfilled") {
                navigate('/login');
            }
        }

        useEffect(() => {
            checkAuth();
        }, []);

        return <Component {...props} />;
    };

    return RedirectComponent;
};
