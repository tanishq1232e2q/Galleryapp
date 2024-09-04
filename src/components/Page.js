import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import sr from "./image/mountains-190055_1280.jpg"
import { useContext, useState } from 'react'

import { useEffect } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { MyContext } from "./context/Parent"

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useParams } from 'react-router-dom';
import "../App.css"
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  TelegramShareButton,
  OKShareButton,

  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  OKIcon

} from "react-share";
import { useLocation } from 'react-router-dom';
import { useAuth } from './context/Authcontext';
import Imgslider from './Imgslider';
import { FaShareAlt } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from './Firebase/Firebase';

export default function Page(props) {
  const { updateImages, query, setquery } = useContext(MyContext);
  const { user } = useAuth()
  const location = useLocation()
  const { ids } = useParams()
  // window.addEventListener("beforeunload")
  const hits = JSON.parse(localStorage.getItem("hits"))
  const [incre, setincre] = useState(0)
  let state = {
    value: '',
    copied: false,
  };
  console.log(location.pathname);


  const an = localStorage.getItem("url")
  const id = localStorage.getItem("id")
  const user1 = localStorage.getItem("user")
  console.log(an);
  console.log(id);
  // const mainid = localStorage.getItem("mainid")

  const url = `http://localhost:3000${location.pathname}`


  console.log(user);

  setquery(hits[id].tags)

  console.log(query);

  useEffect(() => {
    updateImages()


  }, [query])

  const boxright = () => {
    if (incre < hits.length - 1) {
      setincre(incre + 1);
    }



  }

  console.log(hits.length);

  const boxleft = () => {
    if (incre > 0) {
      setincre(incre - 1);

    }

  }

  const savedimg = async () => {
    const useremail = user?.email
    if (useremail) {
      const userDoc = doc(db, "myusers", useremail);
      // setlike(!like)
      await updateDoc(userDoc, { //updating in cloud firestore
        downloads: arrayUnion({ ...hits[id] })
      })
    }
    Swal.fire({
      title: 'Success',
      text: "Image saved",
      icon: 'success',
      confirmButtonText: 'ok'
    })
  }




  return (
    <div className='conts'>

      <div id='sec' className='section '>
        <div className='login'>

          <img src={an}></img>


          <div style={{ color: "black", listStyle: "none", margin: "1rem 0rem" }}>
            {hits[id].tags}

          </div>
          <div className='log'>
            <p >Join us to download and explore exciting images</p>
            <button className='butt'><Link style={{ textDecoration: "none", color: "white" }} to='/contact'>Join us</Link></button>
          </div>

          <div className='imgsec' style={{ marginBottom: "2rem" }}>


            <div className='boon'>


              {
                hits.map((elem, index) => {
                  return <>
                    <div index={index} style={{ transform: `translateX(-${incre * 100}%)`, transition: "all 0.5s" }} className='imglist'>


                      <Link to="/"><img src={elem.largeImageURL}></img></Link>
                    </div>


                  </>
                })
              }
            </div>
            <div className='btns' id='bll'>
              <i onClick={boxleft} class=" fa-2x fa-solid fa-circle-left"></i>

            </div>
            <div className='btns' id='brr'>
              <i onClick={boxright} class=" fa-2x fa-solid fa-circle-right"></i>

            </div>

          </div>
        </div>

        <div className='box'>
          <div>
            <img style={{ width: "4rem", height: "4rem", borderRadius: "20px", marginRight: "1rem" }} src={an}></img>

            {
              user ? <button onClick={savedimg} className='btn btn-success'>Save</button> : <button className='btn btn-success' disabled={true}>Save</button>
            }



          </div>

          <div style={{ margin: "0rem 2rem" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <span><CiHeart /></span> <a style={{ marginRight: "1rem" }} href=''>{hits[id].likes}</a>
              <span>Share </span>

              <button type="button" class="btn btn-dark-outline" data-bs-toggle="modal" data-bs-target="#staticBackdrop">

                <span><FaShareAlt size={23} /></span>
              </button>

            </div>


            <div >

              <div className="modal fade xcc" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog align-middle">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="staticBackdropLabel">Share</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div id='arrange' class="modal-body">

                      <div>
                        <FacebookShareButton url={url}>
                          <FacebookIcon size={55} />
                        </FacebookShareButton>

                      </div>
                      <div>
                        <WhatsappShareButton url={url}>
                          <WhatsappIcon size={55} />
                        </WhatsappShareButton>
                      </div>
                      <div>
                        <LinkedinShareButton url={url}>
                          <LinkedinIcon size={55} />
                        </LinkedinShareButton>
                      </div>
                      <div>
                        <TwitterShareButton url={url}>
                          <TwitterIcon size={55} />
                        </TwitterShareButton>
                      </div>
                      <div>
                        <TelegramShareButton url={url}>
                          <TelegramIcon size={55} />
                        </TelegramShareButton>
                      </div>


                    </div>
                    <div style={{ margin: "1rem",display:"flex",justifyContent:"center" }}>
                      <input value={url}></input>
                      <CopyToClipboard text={url}>
                        <button className='btn btn-outline-success'>Copy</button>
                      </CopyToClipboard>
                    </div>


                  </div>
                </div>
              </div>


            </div>

          </div>

          <div>
            <ul style={{ color: "black", listStyle: "none" }}>
              <li>Views: {hits[id].views}</li>
              <li>Downloads: {hits[id].downloads}</li>
              <li>Tags:{hits[id].tags} </li>
              <li>Collections: {hits[id].collections}</li>
              <div >


                <div><img style={{ width: "20%" }} src={user1}></img><span style={{ marginLeft: "2rem" }}>{hits[id].user}</span></div>

              </div>

            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
