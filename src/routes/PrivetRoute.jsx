import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading){
         return <Spinner animation="border" />;
    }
      if (user) {
        return children;
      }

     return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivetRoute;



/*
 * 
 * 
 * --------------------
 *     STEPS
 * __________________
 * 
 * 1. check user is logged in or not;
 * 2. if user is logged in, then allow to visit the route;
 * 3. Else redirect the user to the login page;
 * 4. setup the privet route
 *  * 
 * 
 * 
 * 
 * 
 */ 