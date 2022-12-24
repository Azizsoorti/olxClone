import React, { createContext, useState } from "react";


export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  
  const API_URL = "http://olxapibyaziz-env.eba-yewm3pzm.ap-northeast-1.elasticbeanstalk.com"
    const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={ {auth,setAuth,API_URL} } >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;