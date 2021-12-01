import React, { useState, useEffect } from "react";
import TableUsers from "./TableUsers";

function ListUsers() {
    const [users, setUsers] = useState({
        users: []
    });

    useEffect(() => {
        fetch("http://localhost:8080/user/all")
        .then(res => res.json())
        .then(data => setUsers({...users, users: data }));
    }, [users]);

    return (
        <>
        <table border="1" width="40%" cellPadding="10">
            <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        {users.users.map((item, index) => {
            return(
                <TableUsers
                    id={item.id}
                    name={item.name}
                    email={item.email}
                />
            )
        })}
        </table>
        </>
      );
    }

export default ListUsers;