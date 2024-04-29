import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const ProtectedRoute = ({children}) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'} />
    }
    return (  
        <div>
            {children}
        </div>
    );
};

export default ProtectedRoute;