import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css"
import { useNavigate } from "react-router-dom";
const SignupForm = () => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [pincode, setPincode] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(first_name,last_name,phone,address,email);
        if (phone && first_name && last_name && email && address) {

            let arr = JSON.parse(localStorage.getItem("user_data")) || [];
            let user_obj = {
                f_name: first_name,
                l_name: last_name,
                email: email,
                address: address,
                phone: phone,
                pincode: pincode,
            }

            arr.push(user_obj);
            console.log(arr)

            localStorage.setItem("user_data", JSON.stringify(arr));
            navigate("/dashboard");


        }
        else {
            toast("please enter Valid details")
        }

    }
    return (
        <div>
            <div className="main_div1">
                <div className="box1">
                    <span className="bordreLine1"></span>
                    <form action="" onSubmit={handleSubmit}>
                        <h2>User Entry Form</h2>
                        <div className="inputBox1">
                            <input
                                type="text"
                                onChange={(e) => setFirstName(e.target.value)}
                                value={first_name}
                            />

                            <span>First Name</span>
                            <i></i>
                        </div>
                        <div className="inputBox1">
                            <input
                                type="text"
                                onChange={(e) => setLastName(e.target.value)}
                                value={last_name}
                            />
                            <span>Last Name</span>
                            <i></i>
                        </div>
                        <div className="inputBox1">
                            <input
                                type="text"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                            />
                            <span>Phone Number</span>
                            <i></i>
                        </div>
                        <div className="inputBox1">
                            <input
                                type="text"
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                            />
                            <span>Address</span>
                            <i></i>
                        </div>
                        <div className="inputBox1">
                            <input
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <span>Email</span>
                            <i></i>
                        </div>
                        <div className="inputBox1">
                            <input
                                type="text"
                                onChange={(e) => setPincode(e.target.value)}
                                value={pincode}
                            />
                            <span>Pincode</span>
                            <i></i>
                        </div>
                        <input type="submit" />
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default SignupForm;
;