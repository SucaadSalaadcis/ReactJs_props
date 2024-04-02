import React from 'react'

function Card(props) {
    console.log(props); 
  

  return (
      <div style={{border: "1px solid black",marginTop:"50px",marginLeft: '27px',width: "300px", height: "340px"}}>
        <h2 style={{color: "black",marginLeft: "58px"}}>{props.title}</h2>
        <img src={props.img}  alt="" style={{marginLeft: "30px"}}  />
        <p style={{color: "black",marginLeft: "58px"}}>{props.description}</p>
    </div>
  )
}

export default Card