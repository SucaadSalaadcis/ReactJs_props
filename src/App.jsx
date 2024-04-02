import React from 'react'
import Card from './components/Card'
import img1 from "../src/images/s2.jpg"

function App() {

  const data = [
   {title: "This is card one" , desc: "This is desc one", image: img1 },
   {title: "This is card two" , desc: "This is desc two", image: img1 },
   {title: "This is card three" , desc: "This is desc three", image: img1 },
   {title: "This is card four" , desc: "This is desc four", image: img1 }

  ]


  return (
    <div style={{display: "flex"}}>

                          {/* way 1 */}
    {/* <Card title = {data[0].title} description = {data[0].desc} img = {data[0].image}  />
    <Card title = {data[1].title} description = {data[1].desc} img = {data[0].image} />
    <Card title = {data[2].title} description = {data[2].desc} img = {data[0].image} />
    <Card title = {data[2].title} description = {data[2].desc} img = {data[0].image} /> */}

                          {/* way 2 */}
    {
      data.map((item , index)=> {
        return (
        <Card key = {index} title = {item.title} description = {item.desc} img = {item.image}  />
        )
      })
    }
    </div>
  )
}

export default App