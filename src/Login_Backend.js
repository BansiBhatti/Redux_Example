import { useState, useEffect } from "react";
import { NavLink } from 'react-router';
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


export const LoginBackend = () => {

    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [loggedUsers, setLoggedUsers] = useState([]);
    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({});
    const [sortBy, setSortBy] = useState("name");
    const [search, setSearch] = useState("");

    useEffect(() => {
        getUsers();

    }, []);

    const getUsers = async (sort = sortBy) => {
        const res = await axios.post(
            `http://localhost:3000/login/get-logged-users`,
            {
                search: search,
                sortBy: sort,
            }
        );

        setLoggedUsers(res.data.users);
    };


    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!loginData.email || !loginData.password) {
            alert("Please enter email and password");
            return;
        }

        axios.post("http://localhost:3000/login/login", {
            email: loginData.email,
            password: loginData.password
        })
            .then((res) => {
                alert(res.data.message);
            })
            .catch((w) => alert("Failed"));
    };

    const handelDelete = (userId) => {

        axios.delete(`http://localhost:3000/login/delete/${userId}`)
            .then((res) => {
                alert(res.data.message);

                setLoggedUsers(
                    loggedUsers.filter((user) => user._id !== userId)
                );
            })
            .catch((e) => {
                alert("Data Successfully Deleted.")
            })
    }

    const handleUpdate = () => {

        axios.put(
            `http://localhost:3000/login/update-user/${editData._id}`,
            {
                name: editData.name,
                email: editData.email,
                role: editData.role,
                department: editData.department
            }
        )
            .then((res) => {
                alert(res.data.message);

                setLoggedUsers(
                    loggedUsers.map((user) =>
                        user._id === editData._id ? { ...user, ...editData } : user
                    ));

                setEditId(null);
                setEditData({});
            })
            .catch((err) => {
                alert("Update failed");
            });
    };



    return (
        <>
            <div className="container d-flex justify-content-center align-items-center my-5 ">
                <div className="col-md-6 card shadow p-3">
                    <div className="p-4">
                        <h3 className="text-center mb-4">Login</h3>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" name="email" value={loginData.email} onChange={handleChange} className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" value={loginData.password} onChange={handleChange} className="form-control" />

                    </div>

                    <button className="btn btn-primary w-100" onClick={handleSubmit}>Login</button>
                    <p>Don't have an Account?<span><b><NavLink to="/Singup" end>create</NavLink></b></span></p>

                </div>
            </div>

            <div className="w-1/2 mx-auto d-flex justify-content-end gap-2 align-items-center mt-4">

                <Select
                    size="small"
                    value={sortBy}
                    onChange={(e) => {
                        setSortBy(e.target.value);
                        getUsers(e.target.value);
                    }}
                    style={{ width: "100px" }}
                >
                    <MenuItem value="name">Name</MenuItem>
                    <MenuItem value="email">Email</MenuItem>
                </Select>

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    className="form-control"
                    style={{ width: "250px" }}
                />
                <button onClick={() => getUsers()}>
                    Search
                </button>

            </div>

            {loggedUsers && (
                <TableContainer
                    component={Paper}
                    className="!w-1/2 mx-auto mt-8 overflow-hidden rounded-xl shadow-lg"
                >
                    <Table>
                        <TableHead className="bg-gray-300">
                            <TableRow>
                                <TableCell className="!font-bold !text-gray-700">Name</TableCell>
                                <TableCell className="!font-bold !text-gray-700">Email</TableCell>
                                <TableCell className="!font-bold !text-gray-700">Role</TableCell>
                                <TableCell className="!font-bold !text-gray-700">Department </TableCell>
                                <TableCell className="!font-bold !text-gray-700">Action</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {loggedUsers.map((user) => (
                                <TableRow key={user._id}
                                    className=" transition duration-200 hover:bg-gray-50 "
                                >

                                    <TableCell className="!font-medium !text-gray-800">
                                        {editId === user._id ? (
                                            <input
                                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                                value={editData.name}
                                                onChange={(e) =>
                                                    setEditData({
                                                        ...editData,
                                                        name: e.target.value
                                                    })
                                                }
                                            />
                                        ) : (
                                            user.name
                                        )}
                                    </TableCell>

                                    <TableCell className="!text-gray-600">
                                        {editId === user._id ? (
                                            <input
                                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                                value={editData.email}
                                                onChange={(e) =>
                                                    setEditData({
                                                        ...editData,
                                                        email: e.target.value
                                                    })
                                                }
                                            />
                                        ) : (
                                            user.email
                                        )}
                                    </TableCell>

                                    <TableCell>
                                        {editId === user._id ? (
                                            <input
                                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                                value={editData.role}
                                                onChange={(e) =>
                                                    setEditData({
                                                        ...editData,
                                                        role: e.target.value
                                                    })
                                                }
                                            />
                                        ) : (
                                            <span className=" py-1 text-sm font-medium ">
                                                {user.role}
                                            </span>
                                        )}
                                    </TableCell>

                                    <TableCell className="!text-gray-600">
                                        {editId === user._id ? (
                                            <input
                                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                                value={editData.department}
                                                onChange={(e) =>
                                                    setEditData({
                                                        ...editData,
                                                        department: e.target.value
                                                    })
                                                }
                                            />
                                        ) : (
                                            user.department
                                        )}
                                    </TableCell>

                                    <TableCell>
                                        {editId === user._id ? (
                                            <div className="flex gap-2">
                                                <button
                                                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                                                    onClick={handleUpdate}
                                                >
                                                    Save
                                                </button>

                                                <button
                                                    className="rounded-md bg-gray-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-600"
                                                    onClick={() => setEditId(null)}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="flex gap-2">
                                                <button
                                                    className="rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-600"
                                                    onClick={() => {
                                                        setEditId(user._id);
                                                        setEditData(user);
                                                    }}
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                                                    onClick={() =>
                                                        handelDelete(user._id)
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

        </>
    )
}

