import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { FcBusinessman, FcLock } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import Cookies from 'js-cookie';


const LoginForm = ({setIsAuth}) => {
  
  
  const navigate = useNavigate();


  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("api/v1/login", userData);
      console.log(data);
      localStorage.setItem("userData",data);
      setLoading(false);
      setSuccess(data.message);
    } catch (error) {
      setError(error?.response?.data?.message);
      setLoading(false);
    }
  };



  if (success) {
    setIsAuth(true)
    alert(success);
    setTimeout(() => setSuccess(false), 3000);
    navigate('employee-table')
  }

  if (error) {
    alert(error);
    setTimeout(() => setError(null), 3000);
  }


  return (
    <Wrapper>
      <form onSubmit={(e)=>handelSubmit(e)}>
        <div className="parent-div">
          <div className="card">
            <div className="mb-3">
              <img
                src="https://elansoltech.com/wp-content/uploads/2023/02/Elansol.png"
                className="card-img-top"
                alt=""
              />
            </div>
            <div className="input-group flex-nowrap mb-3">
              <span className="input-group-text" id="addon-wrapping">
                <FcBusinessman size={25} />
              </span>
              <input
                type="text"
                className="form-control form-control-lg"
                name="userName"
                value={userData.userName}
                onChange={(e) => handelChange(e)}
                placeholder="User Name"
                aria-label="User Name"
                aria-describedby="addon-wrapping"
              />
            </div>
            <div className="input-group flex-nowrap mb-3">
              <span className="input-group-text " id="addon-wrapping">
                <FcLock size={25} />
              </span>
              <input
                type="password"
                className="form-control form-control-lg"
                name="password"
                value={userData.password}
                onChange={(e) => handelChange(e)}
                placeholder="Password"
                aria-label="Password"
                aria-describedby="addon-wrapping"
              />
            </div>
            <div className="d-flex justify-content-between mb-3 text-light">
              <span>
                <input
                  type="checkbox"
                  value="Remeber Me"
                  id="remeber-me"
                  className="form-check-input mx-2"
                />
                <label
                  htmlFor="remeber-me"
                  style={{
                    color: "#42959A",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  Remeber Me
                </label>
              </span>
              <Link className="nav-link">Forgot Your Password?</Link>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-outline-info btn-lg w-100 mb-2"
              >
          {loading ? "Wait Submitting" : "Login"}
              </button>
              <hr className="text-light" />
              <Link
                to="registration"
                className="btn btn-outline-warning btn-lg w-100 mb-2"
              >
                Register Here
              </Link>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .parent-div {
    background-color: #e6e6fa;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    background-color: #202c4d;
    width: 400px;
    padding: 20px;
    transition: 0.2s ease-in-out;
  }

  .form-control-lg {
    background-color: #4e5872;
    color: mintcream !important;
  }

  .nav-link {
    color: #42959a;
    font-size: 13px;
    font-weight: bold;
  }

  .card:hover {
    transform: scale(1.04);
  }
`;
export default LoginForm;
