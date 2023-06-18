import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css"
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/add-oem");
    };

    return (
        <div>
            <div className="main_div">
                <div className="box">
                    <span className="bordreLine"></span>
                    <form action="" onSubmit={handleSubmit}>
                        <h2>Sign in</h2>
                        <div className="inputBox">
                            <input
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />

                            <span>Email</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input
                                type="text"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div className="links">
                            <a href="#">Forgot Password</a>
                            <a href="./Signup">Signup</a>
                        </div>
                        <input type="submit" />
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default Login