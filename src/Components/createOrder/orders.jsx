import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './orders.css'

function Orders() {

    const [orders,setOrders] = useState([])

    useEffect(()=>{
        const fetchAllOrders = async () =>{
            try{
                const res = await axios.get("http://localhost:8800/orders")
                console.log(res)
                setOrders(res.data)
            } catch(err){
                console.log(err)
            }
        }
        fetchAllOrders()
    },[])

    const handleDelete = async (idOrders) => {
        try{
            await axios.delete(`http://localhost:8800/orders/${idOrders}`)
            console.log(idOrders)
            window.location.reload()
        } catch(err){
            console.log(err)    
        }
    }

  return (
    <div className='orders'>

    
    <div style={{color: 'black'}} className='mainDivOrders'>
        <div className='orderDesc'>
            <h1>Orders</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, totam consequuntur     temporibus quos id fugit aliquid, rerum tempora doloremque eos optio enim? Repellat     voluptatem dolorem accusantium soluta, laudantium ipsa aspernatur.</p>
            <div>
        </div>
        
         <div>
            
                <table className='ordersTable'>
                
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Description</th>
                    {/* <th>idOrders</th> */}
                    <th>Location</th>
                    <th>Price</th>
                    {/* <th>final_destination</th> */}
                    </tr>
                    
                </thead>
                <tbody>
                {orders.map(order=>(
                <tr key={order.idOrders}>
                    {/* {order.title && <th>{order.title}</th>} */}
                    <td>{order.title}</td>
                    <td>{order.Description}</td>
                    <td>{order.Location}</td>
                    <td>{order.Price}</td>
                    {/* <td>{order.final_destination}</td> */}
                    <td><button onClick={()=>handleDelete(order.idOrders)} className='deleteBtn'>Delete<i class="fa-solid fa-trash"></i></button>
                    <button className='editBtn'><Link className='updateLink' to={`/updateorder/${order.idOrders}`}><span className='spanUpdate'>Update</span><i class="fa-sharp fa-solid fa-pen"></i></Link></button></td>
                </tr>
                
               ))}
               </tbody>
                </table>
            
        </div>
        </div>            
        
    </div>
    </div>
  )
}

export default Orders