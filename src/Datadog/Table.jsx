import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    const resp = axios.get("http://localhost:3001/Data").then((resp)=>{
        setData(resp.data)
        
    })
  },[])

  return (
    <div className='table_main'>
      <table className='tble'>
        <thead className='thead'>
          <tr>
            <th>Message</th>
            <th>Name</th>
            <th>Query</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
            {data.map((d,index)=>{
                return(
                    <tr key={index}>
                        <td>{d.Message}</td>
                        <td>{d.Name}</td>
                        <td>{d.Query}</td>
                        <td>{d.Type}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;