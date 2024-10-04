"use client";
import React from 'react'
const about = () => {
  const data={name:'saurabh',age:25}
  const handleClick = async () => {
    const res = await fetch('/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const response = await res.json()
    console.log(response)
  }
  return (
    <div>
      This is about page...
      <h2>click below button for api call</h2>
      <button className='border-2 border-white ' onClick={handleClick}>click me </button>
    </div>
  )
}

export default about