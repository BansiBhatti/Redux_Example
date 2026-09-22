import { useState } from "react";
import { Button } from "antd";
import { NavLink } from "react-router";
// import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  
    const [inputValue, setInputValue] = useState({ email: "",password: "",});

    const onChangeUpdate = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value, });
    };

    const submitData = () => {
        const users = JSON.parse(localStorage.getItem("user")) || [];

        const foundUser = users.find(
            (u) =>
                u.email === inputValue.email &&
                u.password === inputValue.password
        );

        if (!foundUser) {
            alert("Invalid Email or Password");
            return;
        }

        localStorage.setItem("currentUser",JSON.stringify(foundUser));
        alert("Login Successful");
    };

    return (
        <div className="container d-flex justify-content-center align-items-center my-5">
            <div className="col-md-3 p-3">
                <div className="py-4">
                    <h3>Sign In</h3>
                    <p style={{ fontSize: "14px", color: "#373737" }}>
                        Continue using exciting feature
                    </p>
                </div>

                <label style={{ fontSize: "14px" }}>
                    <b>Select System</b>
                </label>

                <div className="mt-2 mb-5">
                    <Button
                        color="default"
                        variant="filled"
                        className="me-3"
                    >
                        Agency Bolt
                    </Button>

                    <Button
                        color="default"
                        variant="outlined"
                    >
                        MGA Bolt
                    </Button>
                </div>

                <div className="mb-3 field-wrapper">
                    <label className="form-label">
                        E-mail
                    </label>

                    <input
                        type="email"
                        name="email"
                        value={inputValue.email}
                        className="form-control"
                        onChange={onChangeUpdate}
                    />
                </div>

                <div className="mb-3 field-wrapper">
                    <label className="form-label">
                        Password
                    </label>

                    <input
                        type="password"
                        name="password"
                        value={inputValue.password}
                        className="form-control"
                        onChange={onChangeUpdate}
                    />
                </div>

                <Button
                    color="default"
                    variant="solid"
                    className="w-100 my-4"
                    onClick={submitData}
                >
                    <NavLink to="/Program"> Sign In</NavLink>
                </Button>

                <p style={{ fontSize: "14px" }}>
                    Don't have an account?{" "}
                    <NavLink to="/Singup">
                        Create Account
                    </NavLink>
                </p>
            </div>
        </div>
    );
};