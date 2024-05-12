import axios from 'axios';
import React, { useState } from 'react'

const Form = ({prop,cform}) => {

    let [data,setData]=useState({
        "Message":" ","Name":" ","Query":" ","Type":" "
    });

    let{Message,Name,Query,Type} = data;

    let handleChange=(e)=>{
        const{name,value} = e.target;
        setData({...data,[name]:value});
        console.log(data);
    }
     
    let handleClick=(e)=>{
        e.preventDefault()
        cform(false)
        let paylaod = data;
        axios.post('http://localhost:3001/Data',paylaod)
    }

  return (
  <> { prop &&(
    <div className='form'>
    <form>
      <label >Message</label>
      <input type="text" name='Message' value={Message} onChange={handleChange}/>
      <label htmlFor="">Name</label>
      <input type="text" name='Name' value={Name} onChange={handleChange}/>
      <label htmlFor="">Query</label>
      <input type="text" name='Query' value={Query} onChange={handleChange}/>
      <label htmlFor="">Type</label>
      <input type="text" name='Type' value={Type} onChange={handleChange}/>
      <button onClick={handleClick}>Submit</button>
      </form>
      </div>
  )}
  </>)
}

export default Form
