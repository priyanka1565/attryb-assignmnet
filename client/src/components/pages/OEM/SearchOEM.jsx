import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
import "./SearchOEM.css"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
const SearchOEM = () => {
    const [data, setData] = useState([]);
    const [search_key, setSearchKey] = useState("");
    const navigate = useNavigate()

    console.log(search_key, "seearch ")
    const getData = async () => {
        try {
            let url = `https://atrryb-backend.onrender.com/buycars/search_oem_detail`;
            const config = {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
            await axios.post(url, { model_name: search_key }, { headers: config }).then((res) => {
                console.log(res?.data?.data, "res")
                if (res) {
                    setData(res?.data?.data)
                }
            })

        } catch (error) {
            console.log(error);
        }

    }

    const handleClick = () => {
        navigate("/addcar")
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div >
            <div className="container">
                <div>
                    <h1>Search OEM</h1>
                </div>
                <div>
                    <div>
                        <Input type="text"
                            style={{
                                width: "30%"
                            }}
                            placeholder='Search OEM' onChange={(e) => setSearchKey(e.target.value)} />
                    </div>
                    <br />
                    <Stack spacing={4} direction='row' align='center'>
                        <Button colorScheme='teal' size='md' onClick={getData}>
                            Search
                        </Button>
                        <Button colorScheme='teal' size='lg' onClick={handleClick}>
                            Add Second Hand Car Detail
                        </Button>
                    </Stack>
                </div>
            </div>
            <div>
                {data?.map((value) => {
                    return (
                        <div>
                            <TableContainer>
                                <Table variant='striped' colorScheme='teal'>
                                    <TableCaption>OEM Detail</TableCaption>
                                    <Thead>
                                        <Tr>
                                            <Th>Model Name</Th>
                                            <Th>Year Of Model</Th>
                                            <Th isNumeric>Price of new vehicle</Th>
                                            <Th>Available Colors</Th>
                                            <Th>Mileage</Th>
                                            <Th>Power</Th>
                                            <Th>Max Speed</Th>

                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>{value?.model_name}</Td>
                                            <Td>{value?.year_of_model}</Td>
                                            <Td isNumeric>{value?.price_of_new_vehicle}₹</Td>
                                            <Td>{value?.available_colors}</Td>
                                            <Td isNumeric>{value?.mileage} per/ltr</Td>
                                            <Td>{value?.power} per/BPH</Td>
                                            <Td isNumeric>{value?.max_speed} KM/HOUR</Td>
                                        </Tr>
                                      

                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchOEM;