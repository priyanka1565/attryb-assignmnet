import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./GetCar.css"

const GetCar = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            let url = `https://atrryb-backend.onrender.com/buycars/get_car_detail`
            await axios.get(url).then((res) => {
                console.log(res?.data?.data, "res")
                if (res) {
                    setData(res?.data?.data)
                }
            })
            
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getData();
    }, [])
  return (
      <div>
          
          <div >
              <div>
                  <h1>Online Seat Booking Application</h1>
            
              </div>
              <div className='container'>
                  {data?.map((value) => {
                      return (
                          <div className='car_main'>
                          <div className='getcar'><img src={value.image} alt="" /> </div>
                              <div className='attri'>
                                  <h2>{value?.title}</h2>
                                  <p>{value?.description}</p>
                                  <button>Edit</button>
                                  <button>Delete</button>


                              </div>
                          </div>
                          
                      )
                      
                      
                  })}
              </div>
              <ToastContainer />
          </div>
    </div>
  )
}

export default GetCar