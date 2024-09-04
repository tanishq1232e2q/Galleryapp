import React,{useState} from 'react';
import "../App.css"
import eye from "./image/eye-removebg-preview.png"
import {BrowserRouter,Link} from "react-router-dom"
import Page from './Page';
import { MyContext } from './context/Parent';
import { useContext } from 'react';
export default function Searchresults(props) {
    const ids = localStorage.getItem("mainid")
  
    const {query,userimg}=props;
   
  
    
    return (
        <>
       
        <div className='op'>
            <div class="imgsection" style={{ width: "18rem", fontFamily: "cursive" }}>
                <div className='main' >

                    <img id='hh' src={props.userimg} class="imgs" alt="..." />
                    <div class="details">
                        {/* <h5 class="card-title">{props.query}</h5> */}
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                            <Link to={`/page/:${ids}`}><img  style={{ width: "10rem" }} src={eye} /></Link>
                            <Link to={props.preview}  style={{ marginTop: "-3rem", opacity: 1,textDecoration:"none",color:"black" }}>See Image</Link>
                        </div>
                    </div>
                </div>
                <p style={{ color: "brown",marginTop:"2rem"}} >Likes: {props.likes}</p>
                <p style={{ color: "red" }} >Tags: {props.tags}</p>
            </div>
        </div>
        </>
    )
}
