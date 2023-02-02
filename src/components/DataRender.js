import React, { useState } from 'react'

const DataRender = (props) => {
  
  const [show,setShow] = useState(false);
  return (
    <>  

          <div key={props.item.id} className='list__single__item '>
           <div className='size'>
                <li className='each__list'>{props.item.name}</li>
            </div>
            <div className='company__location size'>

              <p style={{fontWeight:'bolder'}}>CONTACT</p>
              <p >{props.item.name}</p>
            </div>
            <div className='company__location size'>
              <p style={{fontWeight:'bolder'}}>CITY</p>
              <p >{props.item.address.city}</p>
            </div>
            <div className='company__location size'>

              <p style={{fontWeight:'bolder'}}>STATE</p>
              <p >{props.item.address.city}</p>
            </div>
            <div className='size'>
               <button key={props.item.id} className='btn' onClick={()=>setShow(!show)}>
                 view details
                </button>
            </div>
          </div>
            {
            show &&<div className='detailed__data'>
              <div className='description'>
                  <p className='desp__heading'>Description</p>
                  <p>
                       xyz......
                  </p>
              </div>
              <div className='desp_grid'>
                  <p>{props.item.name}</p>
              </div>
           </div>
            }
       </>
                )
}

export default DataRender