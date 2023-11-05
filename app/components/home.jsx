"use client"
import React from 'react'
import Hoodie from './hoodie'
import Sweater from './sweater'
import Trouser from './trouser'
import data from "./data"
import Intro from './intro'

const Homes = () => {
  return (
    <div>
      {
        data.map((items, index) => {
          if (items.category === "Hoodies") {
            return (
              <>
                <Hoodie data={items} key={index}/>
                <br />
                <hr />
                <br />
              </>
            )
          }
          if (items.category === "Sweaters") {
            return (
              <>
                <Sweater data={items}  key={index}/>
                <br />
                <hr />
                <br />              </>
            )
          }
          if (items.category === "Trousers") {
            return (
              <>
                <Trouser data={items}  key={index}/>
                <br />
                <hr />
                <br />              </>
            )
          }
          else {
            return <h1>we are ran out of items</h1>
          }
        })
      }
    </div>
  )
}

export default Homes;
