import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, } from 'firebase/auth';
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';
export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log(user);
    const googleProvider = new GoogleAuthProvider();

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };


      // sign in user
      const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
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
        createUser,signInUser,googleLogin

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