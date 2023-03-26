import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import './createOrder.css'

function CreateOrder(props) {

    const [val,setVal]=useState([]);
   const handleAdd2=()=>{
       const abc=[...val,[]]
       setVal(abc)
   }
   const handleChange2=(onChangeValue,i)=>{
    const inputdata=[...val]
    inputdata[i]=onChangeValue.target.value;
    setVal(inputdata)
   }
   const handleDelete2=(i)=>{
       const deletVal=[...val]
       deletVal.splice(i,1)
       setVal(deletVal)  
   }
   console.log(val,"data-")

    const [order, setOrder] = useState({
        title: "",
        Description: "",
        Location: "",
        final_destination: "",
        Price: null        
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setOrder((prev)=> ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e =>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/orders", order)
            navigate("/orders")
        } catch(err){
            console.log(err)
        }
    }

    console.log(order)

    return (
        <div className='mainCreateOrderDiv'>

        
            <div className='createOrder mainHeaderDiv1'>
                <div className='createOrderHeader'>
        
                    <h1 className='addOrderH1'>Add Order</h1>
                    
                    
                </div>
                
        
                <div className='inputDiv'>
                    
                    <input className='input' type="text" placeholder="title"    onChange={handleChange} name="title"/>
                    <input className='input' type="text"    placeholder="Description" onChange={handleChange}  name="Description"/>

                    <input className='input' type="text"    placeholder="Location"onChange={handleChange}     name="Location"/>
                    {/* <input className='input' type="text"    placeholder="Location"onChange={handleChange}     name="Location"/><span>+</span>  */}

                    <div className='finalDestDiv'>
                        {/* <div>
                            <input className='input' type="text"    placeholder="Location"onChange={handleChange}     name="Location"/>
                        </div> */}
                        <div className='finalLoc'>

                            <button className='addFinalBtn' onClick={()=>handleAdd2()}>Add Final Location</button>

                                {val.map((data,i)=>{
                                  return(
                                     <div className='inputAndBtn'>
                                        {/* <input className='input' type="text"    placeholder="Location"onChange={handleChange}     name="Location"/><span>+</span>  */}
                                            <input className='inputFinalL' value={data} onChange={e=>handleChange2(e,i)} />
                                            <button className='xBtn' onClick={()=>handleDelete2(i)}>x</button>
                                    </div>
                                    )
                                })}
                        </div>
                        
                    </div>

                    <input className='input' type="number"  placeholder="Price" onChange={handleChange} name="Price"/>
                    <div className='buttonDiv'>
                        <button className='add' onClick={handleClick}>ADD</ button>
                        <button className='goOrders'><Link className='goOrdersBtn' to='/orders'>Orders</Link></button>
                    </div>

                    </div>

                </div>
            <div className='mainHeaderDiv2'>   
                <h1 className='sifarisH1'>Sifaris Vererken</h1>
                <p className='sifarisP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maxime quidem, perferendis fugiat neque eaque reprehenderit natus doloribus exercitationem non, libero tempore illum nostrum minima delectus ipsum. Magni, voluptatem beatae?</p>
            </div>
        </div>
    );
}

export default CreateOrder;