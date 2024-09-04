import React from 'react'
import "../App.css"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import op from "../components/image/op.jpg"
import { useState } from 'react';
import { getDatabase, ref, set } from "firebase/database";
export default function Contact() {

    const [forms, setforms] = useState({
        name: "",
        email: "",
        address1: "",
        address2: "",
        city: "",
        country: "",
        zip: ""
    })

    const handlechange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setforms({ ...forms, [name]: value })
        console.log(forms);

    }

    const database = getDatabase();

    const contactsub = async (e) => {
        e.preventDefault();
        const { name,
            email,
            address1,
            address2,
            city,
            country,
            zip } = forms

        const res = await fetch("https://galleryapp-68642-default-rtdb.firebaseio.com/conatctusers.json", {
            method: "POST",
            headers: {

                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                name, email, address1, address2, city, country, zip
            })

        })

        if (res.ok) {
            Swal.fire({
                title: 'Success',
                text: "User logged in",
                icon: 'success',
                confirmButtonText: 'ok'
            })
            setforms({
                name: "",
                email: "",
                address1: "",
                address2: "",
                city: "",
                country: "",
                zip: ""
            })
        }

    }
    return (
        <>
            <div className='kl'>

                <h1 id='conv' >Get in Touch</h1>
            </div>
            <div className='contact'>
                <div className='nimg'>
                    <img src={op}></img>
                </div>

                <div>


                    <form onSubmit={contactsub} class="row g-3">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Name</label>
                            <input name='name' onChange={handlechange} value={forms.name} required type="text" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Email</label>
                            <input name='email' onChange={handlechange} value={forms.email} required type="email" class="form-control" id="inputPassword4" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input name='address1' onChange={handlechange} value={forms.address1} required type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Address 2</label>
                            <input name='address2' onChange={handlechange} required type="text" value={forms.address2} class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">City</label>
                            <input name='city' onChange={handlechange} required type="text" class="form-control" value={forms.city} id="inputCity" />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Country</label>
                            <input name='country' onChange={handlechange} required type="text" class="form-control" value={forms.country} id="inputCity" />
                        </div>
                        <div class="col-md-2">
                            <label for="inputZip" class="form-label">Zip</label>
                            <input name='zip' onChange={handlechange} required type="text" class="form-control" value={forms.zip} id="inputZip" />
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input required class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Send message</button>
                        </div>
                    </form>
                </div>
            </div></>
    )
}
