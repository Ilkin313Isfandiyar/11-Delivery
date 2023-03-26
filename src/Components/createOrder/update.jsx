import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import './update.css'

function Update(props) {

    const [order, setOrder] = useState({
        title: "",
        Description: "",
        Location: "",
        Price: null
    })

    const navigate = useNavigate()

    const location = useLocation()
    const orderId = location.pathname.split("/")[2]


    const handleChange = (e) => {
        setOrder((prev)=> ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e =>{
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/orders/" + orderId, order)
            navigate("/orders")
        } catch(err){
            console.log(err)
        }
    }

    console.log(order)

    return (
        <div className='update'>

            <div className='updateMain'>
                <h1>Update this book</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur commodi earum iste praesentium rerum fugiat maiores quaerat! Tenetur corporis illum voluptates minus, repellendus facilis, iste nemo et modi sit quidem.</p>
                <form>
                    <input type="text" placeholder="title" onChange={handleChange} name="title"/>
                    <input type="text" placeholder="Description" onChange={handleChange}    name="Description"/>
                    <input type="text" placeholder="Location" onChange={handleChange}   name="Location"/>
                    <input type="number" placeholder="Price" onChange={handleChange} name="Price"/>
                </form>
                
                <button className='updateBtn' onClick={handleClick}>Update</button>
                <button className='ordersBtn'><Link to='/orders' className='updateGoOrders'>Orders</Link></button>

            </div>
        </div>
    );
}

export default Update;