import React, { useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { FaLock, FaUserCircle } from "react-icons/fa";
import { Link} from "react-router-dom";
const RegistrationForm = () => {

  // =========================================Input fields variables======================================//
  // const [userName, setUserName] = useState("");
  // const [dateOfBirth, setDateOfBirth] = useState("");
  // const [emailAddress, setEmailAddress] = useState("");
  // const [password, setPassword] = useState("");

  
    const [userData, setUserData] = useState({
      userName: "",
      dob: "",
      email: "",
      password: "",
    });
  

  
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    

    const handelChange = (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    };

  // ========================================Registration api============================================//
 
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("api/v1/signUp", userData);
      setLoading(false);
      setSuccess(data.message);
    } catch (error) {
      setError(error?.response?.data?.message);
      setLoading(false);
      console.log(error);
    }
  };

  if (success) {
    alert(success);
    setTimeout(() => setSuccess(false), 3000);
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
            <div>
              <img
                src="https://elansoltech.com/wp-content/uploads/2023/02/Elansol.png"
                className="card-img-top"
                alt=""
              />
            </div>
            <div className="">
              <label htmlFor="txtUserName">
                <strong>User Name</strong>
              </label>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  <FaUserCircle size={25} />
                </span>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="txtUserName"
                  name="userName"
                  onChange={(e) => handelChange(e)}
                  value={userData.userName}
                  placeholder="Name"
                  aria-describedby="addon-wrapping"
                  required
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="txtDate">
                <strong>Date Of Birth</strong>
              </label>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  <BsFillCalendar2DateFill size={25} />
                </span>
                <input
                  type="date"
                  className="form-control form-control-lg"
                  id="txtDate"
                  name="dob"
                  onChange={(e) => handelChange(e)}
                  value={userData.dob}
                  placeholder="Date Of Birth"
                  aria-describedby="addon-wrapping"
                  required
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="">
                <strong>Email Address</strong>
              </label>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  <BiLogoGmail size={25} />
                </span>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="txtEmail"
                  name="email"
                  onChange={(e) => handelChange(e)}
                  value={userData.email}
                  placeholder="Enter email address"
                  aria-describedby="addon-wrapping"
                  required
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="idPassword">
                <strong>Password</strong>
              </label>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  <FaLock size={25} />
                </span>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="idPassword"
                  name="password"
                  value={userData.password}
                  onChange={(e) => handelChange(e)}
                  placeholder="Enter password here"
                  aria-describedby="addon-wrapping"
                  required
                />
              </div>
            </div>
            <div className="text-center my-3">
              <button type="submit" disabled={loading} className="btn btn-info btn-lg w-100">
              {loading ? "Wait Submitting" : "Sign In"}
              </button>
              <hr style={{ color: "white" }} />
              <Link to="/" className="btn btn-outline-danger btn-lg w-100">
              Login
              </Link>
            </div>
          </div>
        </div>
      </form>
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
    width: 600px;
    padding: 20px;
    background-color: #202c4d;
    transition: 0.2s ease-in-out;
  }

  label {
    color: #42959a;
    font-size: 20px;
  }
`;
export default RegistrationForm;