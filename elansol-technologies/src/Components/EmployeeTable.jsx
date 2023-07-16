import React from "react";
import { styled } from "styled-components";
import { FcSettings, FcDisapprove } from "react-icons/fc";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const EmployeeTable = () => {
  const staticDataArray = [
    {
      name: "Shubham Pathade",
      date: "14/7/2023",
      role: "Admin",
      status: "Active",
    },
    {
      name: "Roshan Chavan",
      date: "15/7/2023",
      role: "Publisher",
      status: "Suspended",
    },
    {
      name: "Nawaz Sayyad",
      date: "15/7/2023",
      role: "Admin",
      status: "Active",
    },
    {
      name: "Pratik Pathade",
      date: "15/7/2023",
      role: "Moderator",
      status: "Active",
    },
    {
      name: "Shivam Jagdale",
      date: "15/7/2023",
      role: "Admin",
      status: "Suspended",
    },
  ];

  return (
    <Wrapper>
      <div className="parent-div">
        <div className="table-responsive p-2">
          <table className="table table-striped table-hover table-bordered align-middle text-center">
            <thead className="table-info">
              <tr>
                <th colSpan="6">
                  <div className="d-flex justify-content-between">
                    <h2 className="text-secondary">Employee Table</h2>
                    <Link to="/" className="nav-link text-danger">
                      <FaSignOutAlt size={40} />
                    </Link>
                  </div>
                </th>
              </tr>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Date Created</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {staticDataArray.map((d, k) => (
                <tr key={k}>
                  <td>{k + 1}</td>
                  <td>{d.name}</td>
                  <td>{d.date}</td>
                  <td>{d.role}</td>
                  <td>{d.status}</td>
                  <td>
                    <button type="button" className="btn btn-link mx-3">
                      <FcSettings size={25} />
                    </button>
                    <button type="button" className="btn btn-link">
                      <FcDisapprove size={25} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .parent-div {
    height: 100vh;
    background-color: #e6e6fa;
  }

  th {
    color: #42959a;
  }

  td {
    color: #42959a;
    font-size: 15px;
  }
`;
export default EmployeeTable;
