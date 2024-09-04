import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div className='foot'>
            <div className='jk'>

                <h1>Picsmania</h1>
                <p>Welcome to the world of images in Picsmania</p>

            </div>
            <div className='pops'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Join</Link></li>
                    <li><Link to="/">Images</Link></li>
                    <li><Link to="/about">Aboutus</Link></li>
                    <li><Link to="/coll">Collections</Link></li>
                </ul>
            </div>

        </div>
    )
}
