import React from "react";
import { useState, useEffect } from "react";
import "./Userdetails.css";
const Userdetails = (props) => {
  let userId = props.match.params.id;

  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${userId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUserDetails(data.data);
      });
  }, []);
  console.log(props);

  return (
    <div>
      <div className="header">
        <img className="avatar" src={userDetails.avatar} alt="" />
        <h2 className="full-name">{`${userDetails.first_name} ${userDetails.last_name}`}</h2>
      </div>
      <div className="user-details-container">
        <h2 className="text-center">General Information</h2>
        <hr />
        <div className="info-container">
          <ul>
            <li>
              <p className="info-data-styling">id</p>
              <p style={{ fontWeight: "600", fontSize: "1.2rem" }}>
                {userDetails.id}
              </p>
            </li>
            <li>
              <p className="info-data-styling">E-mail</p>
              <p style={{ fontWeight: "600", fontSize: "1.2rem" }}>
                {userDetails.email}
              </p>
            </li>
            <li>
              <p className="info-data-styling">First Name</p>
              <p style={{ fontWeight: "600", fontSize: "1.2rem" }}>
                {userDetails.first_name}
              </p>
            </li>
            <li>
              <p className="info-data-styling">Last Name</p>
              <p style={{ fontWeight: "600", fontSize: "1.2rem" }}>
                {userDetails.last_name}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Userdetails;
