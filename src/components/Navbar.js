import React, { useEffect } from 'react'
import "../App.css"
import { useState } from 'react'
import { BrowserRouter, Link } from "react-router-dom"
import { useAuth } from './context/Authcontext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2.js'

// import 'sweetalert2/src/sweetalert2.scss'
export default function Navbar() {

  const { signUp, logIn, logout, user } = useAuth()
  const navi = useNavigate()

  const [text, settext] = useState("Signup")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [email1, setemail1] = useState("")
  const [password1, setpassword1] = useState("")
  const [value,setvalue]=useState("")

  const loginbut = () => {
    let login = document.querySelector("#login")
    let signup = document.querySelector("#signup")
    login.style.display = "block"
    signup.style.display = "none"
    settext("Login")
  }

  const signupbut = () => {
    let login = document.querySelector("#login")
    let signup = document.querySelector("#signup")
    login.style.display = "none"
    signup.style.display = "block"
    settext("Signup")
  }

  const handlesignup = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password);

      

      console.log(email);
      setemail("")
      setpassword("")

    } catch (error) {
      console.log(error);
    }
  }

  

  useEffect(()=>{
    setvalue(localStorage.getItem("email"))
  })

  const handlelogin = async (e) => {
    e.preventDefault()
    try {
      await logIn(email1, password1)

      
      setemail1("")
      setpassword1("")


    } catch (error) {
      console.log(error);
    }
  }

  const userlogout=async()=>{
    try {
      await logout()
      navi("/")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div class="container-fluid">

          <img src=''></img>
        <Link to="/"><h2>Picsmania</h2></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div  class="collapse navbar-collapse" id="navbarNav">
            <ul  class="navbar-nav ">
              <li class="nav-item">
              <Link class="nav-link active" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/contact">Contact</Link>
              </li>
              {
                user?<li class='nav-item'><Link class="nav-link active" style={{textDecoration:"none",color:"black"}} to="/coll">Collections</Link></li>:""
              }
              {
                user?<button id='log' style={{border:"none",borderRadius:"8px",backgroundColor:"lightcoral"}}   onClick={userlogout} >Logout</button>: <li class="nav-item">
                <button style={{border:"none",borderRadius:"8px",backgroundColor:"lightgreen",marginLeft:"1rem",width:"8rem"}}  data-bs-toggle="modal" data-bs-target="#exampleModal">

                  <a class="nav-link active" id='sign' href="#">Signup/Login</a>
                </button>
              </li>

              }
             
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div id='mains' class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Join us now</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div id='signup' class="modal-body king">
                      <h2>Signup</h2>
                      <form onSubmit={handlesignup} className='forms' action=''>
                        <div>
                          <label htmlFor=''>Name</label>
                          <input required type='text' placeholder='enter your name' />

                        </div>
                        <div>
                          <label htmlFor=''>Email</label>
                          <input required type='email' onChange={((e) => setemail(e.target.value))} value={email} placeholder='enter your email' />

                        </div>
                        <div>
                          <label htmlFor=''>Password</label>
                          <input required type='text' onChange={((e) => setpassword(e.target.value))} value={password} placeholder='enter your password' />

                        </div>

                        



                        <button className='btn btn-success' style={{ display: "block", margin: "auto" }} type='submit'>{text}</button>

                      </form>
                      <div style={{ display: "flex", justifyContent: "center" }}>


                        <div>Already registered? login now</div><button className='btn btn-outline-dark' onClick={loginbut} type='button'>Login</button>
                      </div>

                    </div>


                    <div id='login' class="modal-body king">
                      <h2>Login</h2>
                      <form onSubmit={handlelogin} className='forms' action=''>

                        <div>
                          <label htmlFor=''>Email</label>
                          <input required type='email' onChange={((e) => setemail1(e.target.value))} value={email1} placeholder='enter your email' />

                        </div>
                        <div>
                          <label htmlFor=''>Password</label>
                          <input required type='text' onChange={((e) => setpassword1(e.target.value))} value={password1} placeholder='enter your password' />

                        </div>



                        <button className='btn btn-success' style={{ display: "block", margin: "auto" }} type='submit'>{text}</button>

                      </form>
                      <div style={{ display: "flex", justifyContent: "center" }}>

                        <div>Not registered yet? Signup now</div><button className='btn btn-outline-dark' onClick={signupbut} type='button'>Signup</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
