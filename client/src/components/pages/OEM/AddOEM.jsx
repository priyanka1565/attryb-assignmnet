import React, { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./OEM.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const CreateOEM = () => {

    const formData = {
        model_name: "",
        year_of_model: "",
        price_of_new_vehicle: "",
        available_colors: "",
        mileage: "",
        power: "",
        max_speed: ""
    }

    const [getinput, Setinput] = useState(formData);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        Setinput({ ...getinput, [name]: value })
    };

    console.log(getinput, "ffff")

    const craeteSeat = async () => {
        if (!getinput?.model_name) {
            toast.error("Please Enter Seat Name")
        }
        else if (!getinput?.year_of_model) {
            toast.error("Please Enter Seat Number")
        }
        else if (!getinput?.price_of_new_vehicle) {
            toast.error("Please Enter Seat Row Number")
        }
        else {
            try {
                let url = "https://atrryb-backend.onrender.com/buycars/add_oem_detail"
                const config = {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }

                axios.post(url, getinput, { headers: config }).then((res) => {
                    if (res) {
                        toast.success(res?.data?.message)
                        navigate("/search-oem")
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
                        <h2>Add OEM Detail</h2>
                        <div className="inputBox">
                            <input
                                type="text"
                                name='model_name'
                                onChange={handleSubmit}
                                value={getinput?.model_name}
                                placeholder='Enter Model Name'
                            />
                            <span>Model Name</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input
                                type="text"
                                name="year_of_model"
                                onChange={handleSubmit}
                                value={getinput?.year_of_model}
                            />
                            <span>Year Of Model</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input
                                type="text"
                                name='price_of_new_vehicle'
                                onChange={handleSubmit}
                                value={getinput?.price_of_new_vehicle}
                            />
                            <span>Price of new vehicle</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input
                                type="text"
                                name='available_colors'
                                onChange={handleSubmit}
                                value={getinput?.available_colors}
                                placeholder='enter availablem colors'
                            />
                            <span>availablem colors</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input
                                type="text"
                                name='mileage'
                                onChange={handleSubmit}
                                value={getinput?.mileage}
                                placeholder='enter mileage'
                            />
                            <span>Mileage</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input
                                type="text"
                                name='power'
                                onChange={handleSubmit}
                                value={getinput?.power}
                                placeholder='enter power'
                            />
                            <span>Power</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input
                                type="text"
                                name='max_speed'
                                onChange={handleSubmit}
                                value={getinput?.max_speed}
                                placeholder='enter max speed'
                            />
                            <span>max speed</span>
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

export default CreateOEM;