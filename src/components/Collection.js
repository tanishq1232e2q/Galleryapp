import React from 'react'
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from './Firebase/Firebase'
import { useAuth } from './context/Authcontext'
import { useState, useEffect } from 'react'
import Searchresults from './Searchresults'
import man from "../components/image/man-6623242_1280.png"
export default function Collection() {
  const [hits, sethits] = useState([])
  const { user } = useAuth()



  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "myusers", `${user.email}`), (doc) => {
        if (doc.data()) {
          sethits(doc.data().downloads)
        }
      })
    }


  }, [user?.email])
  return (
    <><h2 style={{ marginTop: "2rem", textAlign: "center" }}>Your saved images</h2>
      <div id='snap'>
        <div className='df' >


          {hits.length == 0 ? <div ><img style={{ width: "50rem" }} src={man}></img></div> : hits.map((elem, id) => {
            return <Searchresults likes={elem.likes} tags={elem.tags} preview={elem.webformatURL} userimg={elem.largeImageURL} />
          })}





        </div>
      </div>
    </>
  )
}
