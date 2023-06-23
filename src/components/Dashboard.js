import React from 'react'

const Dashboard = (props) => {
  return (
   <>
    <div>Dashboard</div>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <h2>{props.name ? `welcome  - ${props.name}` : "login please"}</h2>
   </>
  )
}

export default Dashboard