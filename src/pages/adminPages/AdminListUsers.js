import React, { useState, useEffect } from 'react'
//import { useHistory } from 'react-router-dom';
import axios from 'axios'
import userService from '../../components/jwtComponents/services/user-service'
import EventBus from '../../components/jwtComponents/EventBus';

export default function ListUsers() {
    const [users, setUsers] = useState([]);
  //  let history = useHistory();

    useEffect(() => {
        userService.getListUsersBoard().then(
            (res) => {
                setUsers(res.data)
                console.log(res)
            },
            (error) => {
               // history.replace("/")
                const _content =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
        
                setUsers(_content);
        
                if (error.response && error.response.status === 401) {
                  EventBus.dispatch("logout");
                }
              }
        )
    }, [])

     const totalUsers = users.length;

    return (
        <div className="pt-2 d-flex justify-content-center">
        <div className="border w-75 p-3">
            <label className="font" style={{ fontWeight: "bold" }}>List of users</label><br />
            <label className="font">List of all users: {totalUsers}</label>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
                {users.map((item) => 
              <tr>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
        </div>
    )
}
