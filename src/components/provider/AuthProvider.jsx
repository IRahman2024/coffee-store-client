import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, pass) =>{
        setLoading(true);
        return createUserWithEmailAndPassword( auth, email, pass )
    }

    const signInUser = (email, pass) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }
    
    const userInfo = {
        user,
        loading,
        createUser,
        setUser,
        signInUser
    };
    
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;