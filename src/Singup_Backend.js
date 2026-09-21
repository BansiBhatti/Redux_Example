import { useState } from "react";
import { NavLink } from "react-router";
import axios from "axios"


export const SingupBackend = () => {

    const [inputValue, setInputValue] = useState({ name: "", email: "", password: "", role: "", department: "", });

    const onChangeUpdate = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    }

    const submitData = async (e) => {
        e.preventDefault();

        if (!inputValue.name ||
            !inputValue.email ||
            !inputValue.password ||
            !inputValue.role ||
            !inputValue.department
        ) { alert("please fill fields"); return }


        axios.post("http://localhost:3000/users/create", {
            name: inputValue.name,
            email: inputValue.email,
            password: inputValue.password,
            role: inputValue.role,
            department: inputValue.department
        })
            .then((res) => {
                alert(res.data.message);
            })
            .catch((w) => console.log(w));


    }


    return (
        <>
            <div className="container d-flex justify-content-center align-items-center my-5">

                <div className=" col-md-3 card shadow p-3" >

                    <div className="p-4">
                        <h3 className="text-center mb-4"  /* style={{ color: getColor }}*/  >Signup</h3>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">First Name</label>
                        <input type="text" id="name" name="name" value={inputValue.name} className="form-control"
                            onChange={(e) => onChangeUpdate(e)}>
                        </input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" name="email" value={inputValue.email} className="form-control"
                            onChange={(e) => onChangeUpdate(e)}>
                        </input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id="password" name="password" value={inputValue.password} className="form-control"
                            onChange={(e) => onChangeUpdate(e)}>
                        </input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">Role</label>
                        <input type="text" id="role" name="role" value={inputValue.role} className="form-control"
                            onChange={(e) => onChangeUpdate(e)}>
                        </input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="department" className="form-label">Department</label>
                        <input type="text" id="department" name="department" value={inputValue.department} className="form-control"
                            onChange={(e) => onChangeUpdate(e)}>
                        </input>
                    </div>

                    <button type="submit" className="btn btn-primary my-2 t" onClick={submitData}>
                        Singup
                    </button>
                    <p>Already have an account?<span><NavLink to="/" end>Login</NavLink></span></p>

                </div>

            </div>

        </>
    )
}