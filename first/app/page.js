import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Image
        src="https://cdn.imagecomics.com/assets/i/series/1051676/1024IM294_83163661841cffc2fecf05c4d36b5571.jpg"//external image ,need to add domain in next.config.js
        alt="Avatar"
        width={500}
        height={500}
        style={{ width: 'auto', height: 'auto' }}
        priority
      />
    Home page here....
    </div>
  )
}

export default page
