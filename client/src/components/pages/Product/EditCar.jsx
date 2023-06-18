import React, { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./Product.css"
import axios from "axios"
import { useLocation } from 'react-router-dom';
const Edit_Car = () => {

    const formData = {
        image: "",
        title: "",
        description: ""
    }

    const [getinput, Setinput] = useState(formData);
    // get id from location 
    const location = useLocation();
    const { id } = location.state;
    console.log(id, "locat_id")

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        Setinput({ ...getinput, [name]: value })
    };

    if (id) {
        getinput["_id"] = id;
    }

    console.log(getinput,"getinput")

    const craeteSeat = async () => {
        if (!getinput?.image) {
            toast.error("Please Enter Seat Name")
        }
        else if (!getinput?.title) {
            toast.error("Please Enter Seat Number")
        }
        else if (!getinput?.description) {
            toast.error("Please Enter Seat Row Number")
        }
        else {
            try {
                let url = "https://atrryb-backend.onrender.com/buycars/update_car_detail"
                const config = {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }

                axios.post(url, getinput, { headers: config }).then((res) => {
                    if (res) {
                        toast.success(res?.data?.message)
                    }
                }).catch((err) => {
                    console.log(err, "err")
                })
            }
            catch (err) {
                console.log(err, "err-cath")
            }
        }
    }
    console.log(getinput, "ssssss");
    return (
        <div>
            <div className="main_div">
                <div className="box">
                    <span className="bordreLine"></span>
                    <form >
                        <h2>Edit Car Detail</h2>
                        <div className="inputBox">
                            <input
                                type="text"
                                name='image'
                                onChange={handleSubmit}
                                value={getinput?.image}
                            />
                            <span>Image</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input
                                type="text"
                                name="title"
                                onChange={handleSubmit}
                                value={getinput?.title}
                            />
                            <span>Title</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input
                                type="text"
                                name='description'
                                onChange={handleSubmit}
                                value={getinput?.description}
                            />
                            <span>Description</span>
                            <i></i>
                        </div>
                        <button type='button' onClick={craeteSeat}>Submit</button>
                    </form>

                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}

export default Edit_Car