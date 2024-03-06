'use client';
import React, { useState } from 'react';
import './Adddata.css';


const AddData = () => {
    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const handlechange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handlesubmit = async (e) => {
        e.preventDefault();

        if (!data.name || !data.phone || !data.email || !data.message) {
            alert("Please filled the required field");
            return;
        }

        console.log("Form Data:", data);
        try {
            const res = await fetch(
                "https://sheet.best/api/sheets/32875b71-31ff-4211-b207-4c4d6cf861c8",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
            if (!res.ok) {
                throw new Error(`Failed to submit form. Status: ${res.status}`);
            } else {
                console.log('Form submitted successfully!');
            }
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div className='container'>
            <div className='box'>
                <div className='field'>
                    <label>Name:</label>
                    <input type="text" name='name' placeholder='Enter your name' onChange={handlechange} />
                </div>
                <div className='field'>
                    <label>Phone:</label>
                    <input type="text" name='phone' placeholder='Enter your phone' onChange={handlechange} />
                </div>
                <div className='field'>
                    <label>E-Mail</label>
                    <input type="text" name='email' placeholder='Enter your Email' onChange={handlechange} />
                </div>
                <div className='field'>
                    <label>Message:</label>
                    <input type="text" name='message' placeholder='Enter your message' multiple onChange={handlechange} />
                </div>
                <div className='btn'>
                    <button type="button" onClick={handlesubmit}>Submit</button>
                    <button type="button">Back</button>
                </div>
            </div>
        </div>
    )
}

export default AddData;