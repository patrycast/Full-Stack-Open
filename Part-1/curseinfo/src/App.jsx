// import { useState } from 'react'
// import Mensaje  from "./Mensaje"

const Header=({name})=>{
  return(
    <div>
     <h1> {name} </h1>
    </div>
  )
}
const Content=({parts})=>{
  return(
    <div>
      {parts.map((part,index)=>(
        <p key={index}>{part.name} {part.exercises}</p>
      ))}

    </div>
  )


}
const Total=({parts})=>{
  let total=0;

  for(let i = 0; i < parts.length; i++) {
    total += parts[i].exercises;
  }

  return(
    <div>
     <p>Number of exercises: {total}</p>
     
    </div>
  )
  
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}


export default App

