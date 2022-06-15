/* eslint-disable react/prop-types */
import { Redirect, Route  } from 'react-router-dom'
import Config from "./Config"

const PrivateRoute = ({ component: Component, data, ...rest }) => {
    if(data) localStorage.setItem("credentials", JSON.stringify(data))
    const user = localStorage.getItem("credentials");
    const isAuthenticated = user && JSON.parse(user)!==null && JSON.parse(user).email ? true : false;
    const canAccessFrameDirectly  = String(document.referrer).includes(Config.NX_IP)
    
    return (
        <Route {...rest} render={props =>
            // If user is not authenticated and he is not from nutanix
            !isAuthenticated &&  !canAccessFrameDirectly ? (
                <Redirect to="/auth/login" />
            ) : 
            // If user is not authenticated and he is from nutanix
            canAccessFrameDirectly ? (
                <Component {...props} />
            ) :
            // If user is authenticated and he is not from nutanix
            isAuthenticated && !canAccessFrameDirectly && 
            (
                <Component {...props} />
            )
        }
        />
    )
}

export default PrivateRoute