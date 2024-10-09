import React, { useState } from 'react'
import DisplayItems from './DisplayItems';
import './home.css'
import { IoMdAdd } from "react-icons/io";

export default function Home() {
    const [value, setValue] = useState("");
    const [data,setData] = useState([]);
    function handleSubmit(e){
        e.preventDefault();
        setData([...data,value]);
        setValue("");
    }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='formcontainer'>
            <input className='getInput' placeholder='Enter Anything' type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button className='modernButton' type='submit'>
              <IoMdAdd />
            </button>
        </div>
      </form>
      <div className='displayworking'>
        {data.map(item=>(
          <DisplayItems key={item} item={item} data={data} setData={setData}/>
        ))}
      </div>
    </div>
  )
}

