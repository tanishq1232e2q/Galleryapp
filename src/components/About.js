import React from 'react'
import "../App.css"
import about from "../components/image/about.jpg"
export default function About() {
    return (
        
        <div className='about'>
            <div>
                <img src={about}></img>


            </div>

            <div className='boxu'>
                <h2 id='hw'>About us</h2>
                <p>Welcome to Picsmania where the beauty of the world is captured in pixels! We are a dedicated team of photographers, artists, and digital creators who believe in the power of images to tell stories, evoke emotions, and inspire creativity.</p>

                <h2>Our Mission</h2>
                <p>Our mission is to provide a platform that showcases stunning images from around the globe, making high-quality visual content accessible to everyone. Whether you are a designer looking for the perfect image for your project, a business in need of eye-catching visuals, or a photography enthusiast seeking inspiration, we have something for you.</p>


                <p>We invite you to join our community of photography lovers. Whether you want to contribute your own images or simply enjoy the works of others, Picsmania is the perfect place to explore and share your passion for photography.

                    Thank you for visiting Picsmania. We look forward to helping you find the perfect image and inspiring your next creative project.</p>
                <p>Got questions or need assistance? Feel free to reach out to our friendly support team at @tpalkhe@gmail.com. We’re here to help.</p>
            </div>
        </div>
    )
}
