import { useState } from "react"
import { NavLink } from 'react-router';


export const LoginPage = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || []
    );

    const [loginData, setLoginData] = useState({ email: "", password: "" });


    const handleOnChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const foundUser = user.find(
            (u) => u.email === loginData.email && u.password === loginData.password
        );

        if (foundUser) {
            localStorage.setItem( "currentUser",JSON.stringify(foundUser));
            window.location.href = "/dashboard";
        } else {
            alert("Invalid data")
        }
    }



    return (
        <>
            <div className="container d-flex justify-content-center align-items-center my-5 ">
                <div className="col-md-6 card shadow p-3">
                    <div className="p-4">
                        <h3 className="text-center mb-4">Login</h3>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" onChange={handleOnChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" onChange={handleOnChange} />

                    </div>

                    <button className="btn btn-primary w-100" onClick={handleSubmit}>Login</button>
                    <p>Don't have an Account?<span><b><NavLink to="/Singup" end>create</NavLink></b></span></p>

                </div>
            </div>
        </>
    )
}

