import React, { useState, useEffect } from 'react'
import "../App.css"
import { MyContext } from './context/Parent'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

export default function Slider() {
    const [sliderrun, setsliderrun] = useState(0)

    let { query, updateImages, setquery,hits } = useContext(MyContext);

   


useEffect(() => {
  

    updateImages()
  
}, [query])








    function boxleft() {
        if (sliderrun > 0) {
            setsliderrun(sliderrun - 1);
          }
          


    }
    function boxright(params) {
        const slide=document.querySelector(".sd").offsetWidth
        console.log(slide);
        console.log(sliderrun);
        if (sliderrun < 5) {
            setsliderrun(sliderrun + 1);
          }



    }

    return (
        <>
            <div className='sd'>

                <div className='slider' style={{ transform: `translateX(-${sliderrun * 10}%)`, transition: "all 0.5s" }}>
                    <div onClick={()=>setquery("animal")} id='1'>Animals</div>
                    <div onClick={()=>setquery("games")} id='2'>Games</div>
                    <div onClick={()=>setquery("sports")}  id='3'>Sports</div>
                    <div onClick={()=>setquery("entertainment")} id='4'>Entertainment</div>
                    <div onClick={()=>setquery("movies")} id='5'>Movies</div>
                    <div onClick={()=>setquery("nature")} id='6'>Nature</div>
                    <div onClick={()=>setquery("love")} id='7'>Love</div>
                    <div onClick={()=>setquery("comics")} id='8'>Comics</div>
                    <div onClick={()=>setquery("plants")} id='9'>Plants</div>
                    <div onClick={()=>setquery("festivals")} id='10'>Festivals</div>
                    <div onClick={()=>setquery("books")} id='11'>Books</div>
                    <div onClick={()=>setquery("music")} id='12'>Music</div>
                    <div onClick={()=>setquery("sounds")} id='13'>Sounds</div>
                    <div onClick={()=>setquery("food")} id='14'>Food</div>
                    <div onClick={()=>setquery("instrument")} id='15'>Instrument</div>

                </div>
                <div className='btns' id='br'>
                    <i onClick={boxright} class=" fa fa-solid fa-circle-right"></i>

                </div>
                <div className='btns' id='bl'>
                    <i onClick={boxleft} class=" fa fa-solid fa-circle-left"></i>

                </div>
                {/* <div className='btns'>slide over categories</div> */}
            </div>
        </>
    )
}
