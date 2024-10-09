import React from 'react'
import './displayitems.css'

export default function DisplayItems({item,data,setData}) {
  function handleDelete(item){
    setData(data.filter((value)=>value !== item));
  }
  return (
    <div className='item'>
        <div className='itemsname'>
          {item}
          <span>
            <button onClick={()=>handleDelete(item)} className='deletebutton'>X</button>
          </span>
        </div>
        <hr/>
    </div>
  )
}
