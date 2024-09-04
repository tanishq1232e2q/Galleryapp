import React, { useEffect, useState } from 'react'
import "../../App.css"
import css from "../../App.css"
import { FaSearch } from "react-icons/fa";
import Searchresults from '../Searchresults'
import clip from "../video/clipv.mp4"
import Page from '../Page'
import { useContext } from 'react'
import { MyContext, Parent } from "../context/Parent"
import Slider from '../Slider'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



export default function Search(props) {
    // const [query, setquery] = useState("")
    const { updateImages, hits, query, setquery } = useContext(MyContext);
    localStorage.setItem("hits",JSON.stringify(hits))

    // let mystyle={
    //      marginLeft: "5rem", width: "20rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gridGap: "1.3rem",
         
    // }
    

    

    




    useEffect(() => {


        updateImages()

    }, [])
    const searchbtn = async (e) => {
        e.preventDefault()
        if (hits.length==0) {
            toast.warning("No images found",{
                theme: "colored"
              })
        }
        if (!query) {
            toast.info("Seach for a query",{
                
                    theme: "colored"
                
            })
            
        }
        updateImages()



    }
   
    function imgid(index,i,img,mainid) {
        console.log(i);
        
        localStorage.setItem("url",i)
        localStorage.setItem("mainid",mainid)
        localStorage.setItem("id",index)
        localStorage.setItem("user",img)
    }


    // const onchange = (e) => {
    //     setquery(e.target.value)
    // }

    return (
        <>

            <div className='cont cvvs'>
                <div className='section' style={{ marginBottom: "3rem" }}>
                    <h1>Awesome images are here</h1>
                    <div className='videos'>

                        <video style={{ width: "100%", background: "cover", backgroundPosition: "12px" }} autoPlay loop muted>
                            <source src={clip} type="video/mp4" />

                        </video>
                    </div>
                    <form class="d-flex ground"style={{backgroundColor:"white",padding:"1rem",borderRadius:"8px"}}>
                        <FaSearch color='black' size={43}/>
                        <input style={{width:"30rem"}} class="form-control me-2" value={query} onChange={onchange = (e) => setquery(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" style={{ backgroundColor: "lightgreen" }} onClick={searchbtn}>Search</button>
                    </form>
                </div>
                <Slider/>

                <div  className='boxy' >
                    <div className='lool'>

                    {
                        hits.map((elem,index) => {
                            return <div onClick={()=>imgid(index,elem.largeImageURL,elem.userImageURL,elem.id)} style={{ width: "20rem" }} key={elem.id} >
                                <Searchresults k={props.first} query={query} likes={elem.likes} tags={elem.tags} preview={elem.webformatURL} userimg={elem.largeImageURL} />

                            </div>

                        })
                    }
                    </div>
                    
                </div>


            </div>
        </>

    )
}




