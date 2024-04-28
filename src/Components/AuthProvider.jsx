import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';
export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log(user);

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };


    // ovserver
    useEffect(() => {
    onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);


    const allvalues = {
        createUser

    };

    return (
        <div>
            <AuthContext.Provider value={allvalues}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
}

export default AuthProvider;