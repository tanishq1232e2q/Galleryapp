import React, { createContext, useState } from 'react';

import Searchresults from '../Searchresults';
const MyContext=createContext();

const Parent=({children})=>{
    const [query, setquery] = useState("")
    const [hits, sethits] = useState([])
    const [text, settext] = useState(true)

    const [first, setfirst] = useState()

    const updateImages=async()=>{
        const apikey = process.env.REACT_APP_API_KEY;
        const url = `https://pixabay.com/api/?key=${apikey}&q=${query}&image_type=photo`

        const data = await fetch(url);
        const datajson = await data.json()
        let op = datajson.hits
        sethits(op)
    

        console.log(op);
        console.log("hi");
    }
    const imgid=(id)=>{
      console.log(id);
    }
    return (
        <>
        

        
        <MyContext.Provider value={{first,setfirst,setquery,query,hits,updateImages}}>
          {children}
        </MyContext.Provider>
        </>
      );
}
export {Parent,MyContext} 