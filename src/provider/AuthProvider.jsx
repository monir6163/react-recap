/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const createUser = async (email, password) => {
    try {
      setLoading(true);
      const newuser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Registration success");
      return newuser;
    } catch (error) {
      toast.error(
        error?.customData?._tokenResponse?.error?.message ||
          "Registration faield"
      );
    }
  };

  const signIn = async (email, password) => {
    try {
      setLoading(true);
      const signin = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login success");
      return signin;
    } catch (error) {
      toast.error(error?.code || "Login faield");
    }
  };

  const googleLogin = async () => {
    try {
      const googlelogin = await signInWithPopup(auth, googleProvider);
      toast.success("Login success");
      return googlelogin;
    } catch (error) {
      toast.error("Login faield");
    }
  };

  const logOut = async () => {
    try {
      const logout = signOut(auth).then(() => setUser(null));
      toast.success("logout success");
      return logout;
    } catch (error) {
      toast.error("Something else");
    }
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    googleLogin,
    createUser,
    signIn,
    logOut,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
