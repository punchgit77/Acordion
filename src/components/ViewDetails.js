import React, { useEffect, useState } from 'react';
import DataRender from './DataRender';
import { getData } from './handle';

const colors = ['green'];

const ViewDetails = () => {
  const [data,setData] = useState([]);
  const [page,setPage] = useState(1);

  const render = async ()=>{
    const x = await getData();
    setData(x);
  }
  


  useEffect(()=>{
    render();
  },[])

  
  const setHandler=(e)=>{
     setPage(e.target.textContent);
  }
                    
  return (
    <div className="App">
         <div className='list__items'>

          {
            data.length>0 && data.slice(page*3-3,page*3).map((item)=>{
                   const {id} = item;
                   return <DataRender key={id} item={item} />
                    
            })
          }
          </div>

            
          <div className='pagination'>

           {
             
             [...Array(Math.ceil(data.length/3))].map((_,i)=>{
              
              return( 
                  <p className={page===i+1?"selected":""} key={i} onClick={setHandler}>
                   {i+1}
                  </p>
                )

               })
              }
              
              </div>
          
          
    </div>
  );
}

export default ViewDetails;