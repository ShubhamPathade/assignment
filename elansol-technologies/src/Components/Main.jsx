import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import EmployeeTable from "./EmployeeTable";
import axios from "axios";


const Main = () => {



  const[isAuth,setIsAuth] =useState(false);


const getLogged = async()=>{
  try {
    await axios.get(`api/v1/logged`);
   setIsAuth(true)
  } catch (error) {
    setIsAuth(false)
   
  }
}


  useEffect(()=>{getLogged()},[])


  return (
    <>
      <Router>
        <Routes>
          <Route exact path="" element={<LoginForm key={1} setIsAuth={setIsAuth}/>} />
          <Route
            exact
            path="registration"
            element={<RegistrationForm key={2} />}
          />
          <Route
            exact
            path="employee-table"
            element={isAuth ? <EmployeeTable key={3} /> : <LoginForm/>}
          />
        </Routes>
      </Router>
    </>
  );
};

export default Main;
