"use client";
import React from 'react'
import Script from 'next/script'
import { contactSendAction } from '@/actions/contactForm'
import { useRef } from 'react'
const contact = () => {
  let ref = useRef();
  return (
    <div>
      <Script>
        {
          `
          alert('hello from contact page')
          `
        }
      </Script>
      <h1 className='text-white font-bold w-[90vw] text-center mt-7'>Contact Page</h1>
        {/* make contact form */}
        <form action={(e)=>{contactSendAction(e); ref.current.reset();}} className='flex justify-center items-center gap-7 w-[90vw] h-[90vh] flex-col' ref={ref}>
          <input type="text" name="name" placeholder="name" className='text-black'/>
          <input type="email" name="email" placeholder="email" className='text-black'/>
          <textarea name="message" placeholder="message" className='text-black'></textarea>
          <button type="submit" className='border-2 border-white p-2 cursor-pointer'>Send</button>
        </form>

    </div>
  )
}

export default contact
