import React, { useState } from 'react'
import MyComponent from './Datadog/MyComponent'
import Table from './Datadog/Table';
import './index.css'
import Form from './Datadog/Form';
const App = () => {
  let[dform,setDform] = useState(false);
  let controlform = (option)=>{
    setDform(option)
    console.log(option);
  }
  return (
    <div >
      <Table/>
      <MyComponent prop={controlform}/>
      <Form prop={dform} cform={controlform}/>
    </div>
  )
}

export default App
