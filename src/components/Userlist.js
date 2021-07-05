import React from "react";
import { useState, useEffect } from "react";
import "./Userlist.css";
import { LinkContainer } from "react-router-bootstrap";

const Userlist = () => {
  let pageNum = 1;
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState(pageNum);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/?page=${pagination}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data.data);
      });
  }, [pagination]);

  const nextPage = () => {
    setPagination(pagination + 1);
  };

  const prevPage = () => {
    setPagination(pagination - 1);
  };
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Avatar</th>
            <th scope="col">E-mail</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            return (
              <LinkContainer to={`/Userlist/${item.id}`}>
                <tr>
                  <td>{item.id}</td>
                  <td>
                    <img src={item.avatar} className="avatar" alt="avatar" />
                  </td>
                  <td>{item.email}</td>
                  <td className="first-name">{item.first_name}</td>
                  <td className="last-name">{item.last_name}</td>
                </tr>
              </LinkContainer>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        {pagination != 1 && (
          <button className="btn btn-outline-danger" onClick={prevPage}>
            Previous
          </button>
        )}

        <button className="btn btn-outline-success" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Userlist;
