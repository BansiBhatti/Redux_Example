import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData, deleteAll, deleteData, editData, search, select, selectAll, sort } from "./Actions";
import { Checkbox, } from "antd";
import { DeleteFilled } from "@ant-design/icons";



export const StateManagement = () => {


    const [user, setUser] = useState({ fname: "", lname: "", age: "" });
    const [edit, setEdit] = useState(null);

    const selector = useSelector((e) => e);

    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleEdit = (data) => {
        setUser(data);
        setEdit(data.id);
    }

    const handleSubmit = () => {
        if (edit !== null) {
            dispatch(editData(user, edit));
            setEdit(null);
        }
        else {
            const newUser = {
                id: Date.now(),
                checked: false,
                ...user,
            }
            dispatch(addData(newUser))
        }
        setUser({ fname: "", lname: "", age: "" });
    }

    const filterdUsers = selector?.formReducer.users.filter((u) =>
        u.fname.toLowerCase().includes(selector.formReducer.search.toLowerCase()) ||
        u.lname.toLowerCase().includes(selector.formReducer.search.toLowerCase()) ||
        u.age.toString().includes(selector.formReducer.search)
    ).sort(
        (a, b) => {
            if (!selector.formReducer.sort) {
                return 0;
            }

            return a[selector.formReducer.sort] > (b[selector.formReducer.sort]) ? 1 : -1;
        }
    )

    return (
        <>
            <div className="container mt-5 ">
                <div className="w-50 mx-auto border border-secondary p-5">
                    <h1 className="text-emerald-300 border border-primary border-2 rounded-sm max-[700px]:text-pink-400  ">Google Form</h1>

                    <div className="m-3">
                        <label htmlFor="fname">First Name</label>
                        <input className="m-2" type="text" id="fname" name="fname" value={user.fname}
                            onChange={(e) => handleOnChange(e)}>
                        </input>
                    </div>

                    <div className="m-2">
                        <label htmlFor="lname">Last Name</label>
                        <input className="m-2" type="text" id="lname" name="lname" value={user.lname} onChange={(e) => handleOnChange(e)} />
                    </div>

                    <div className="m-3">
                        <label htmlFor="age">Age</label>
                        <input className="m-2" type="text" id="age" name="age" value={user.age} onChange={(e) => handleOnChange(e)} />
                    </div>

                    <button className="mt-3" onClick={() => handleSubmit()}>
                        {edit === null ? "Submit" : "Update"}
                    </button>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center my-3">
                <input
                    type="text"
                    placeholder="Search..."
                    value={selector.formReducer.search}
                    onChange={(e) => dispatch(search(e.target.value))}
                />

                <select className="ms-3" onChange={(e) => dispatch(sort(e.target.value))}>
                    <option value="">Select</option>
                    <option value="fname">First Name</option>
                    <option value="lname">Last Name</option>
                    <option value="age">Age</option>
                </select>
            </div>

            <div>
                <table className="table table-bordered w-75 mx-auto">
                    <thead>
                        <tr>
                            <th>
                                <Checkbox
                                    checked={selector.formReducer.users.length > 0 &&
                                        selector.formReducer.users.every((item) => item.checked)}
                                    onChange={(e) => dispatch(selectAll(e.target.checked))}
                                />
                                <button
                                    style={{
                                        border: "none",
                                        background: "transparent"
                                    }}
                                    onClick={() => dispatch(deleteAll())}>
                                    <DeleteFilled style={{ color: "red" }} />
                                </button>
                            </th>
                            <th>No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterdUsers.length > 0 ?
                            filterdUsers.map((u, index) => (
                                <tr key={index}>
                                    <th>
                                        <Checkbox checked={u.checked} onChange={() => dispatch(select(u.id))} />
                                    </th>
                                    <td>{index + 1}</td>
                                    <td>{u.fname}</td>
                                    <td>{u.lname}</td>
                                    <td>{u.age}</td>
                                    <td>
                                        <button className="mx-2" onClick={() => dispatch(deleteData(u.id))}>Delete</button>
                                        <button onClick={() => handleEdit(u)}>Edit</button>
                                    </td>
                                </tr>
                            ))
                            :
                            (<tr>
                                <td colSpan="6" style={{ textAlign: "center" }}>No Match Found</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}