import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail
  } from "firebase/auth";
  import { auth } from "../lib/firebase";
  
  // Sign up new users
  export const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  // Sign in existing users
  export const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  // Sign out
  export const logout = () => {
    return signOut(auth);
  };
  
  // Password reset
  export const resetPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };