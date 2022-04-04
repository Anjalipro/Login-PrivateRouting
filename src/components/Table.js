import React, { useState, useEffect } from "react";
import "./../styles/table.css";

const Table = () => {
  const [users, setUsers] = useState([]);
  const getUsersData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
    setUsers(users);
  };
  useEffect(() => {
    getUsersData();
  }, []);
  return (
    <div>
      <table id="tableData">
        <caption style={{textAlign:"left" }}><h2>My recent complexity assesments</h2></caption>
        <thead>
          <tr>
            <th>OCOD Opportunity name</th>
            <th>Nickname</th>
            <th>Account</th>
            <th>Next Assesment gate</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            const { id, name, username, website, email } = item;
            return (
              <>
                <tr key={id}></tr>
                <td>{name}</td>
                <td>{username}</td>
                <td>{website}</td>
                <td>{email}</td>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
