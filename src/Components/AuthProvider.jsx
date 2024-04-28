import { createUserWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types'
import { createContext } from 'react';
import auth from '../Firebase/Firebase.init';
export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

      // create user
      const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };


    const allvalues = { createUser

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