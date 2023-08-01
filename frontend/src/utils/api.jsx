import React from 'react';
import axios from "axios";

export const DataPost = (props) => {
    const { queue, nim, nama, keperluan } = props.Data
    axios.post("http://localhost:3030/api/number", {
        number: queue,
        nama: nama,
        nim: nim,
        keperluan: keperluan
    })
    .then((response) => {
        console.log(response.data)
    })
    .catch((error)=>{
        console.error(error)
    })
}