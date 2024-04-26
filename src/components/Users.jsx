import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDel = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remainingUsers = users.filter(user => user._id !== id);
                setUsers(remainingUsers);
            })
    }

    return (
        <div>
            <h2>Users: {loadedUsers.length} </h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, idx) => <tr key={idx}>
                                <th></th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>
                                    <button
                                        onClick={() => handleDel(user._id)}
                                        className="btn">X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;