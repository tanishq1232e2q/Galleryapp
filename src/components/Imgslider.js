import React from 'react'
import { useContext } from 'react'
import { MyContext } from "./context/Parent"
export default function Imgslider() {
    const { updateImages, hits, query, setquery } = useContext(MyContext);
  return (
    
    <div>
      <div className='main'>

        {
            hits.map((elem,index)=>{
                return <>
                <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>

                <img style={{display:"flex",justifyContent:"center",flexDirection:"column"}}src={elem.largeImageURL}></img>

                </div>

                </>
            })
        }
      </div>
    </div>
  )
}
