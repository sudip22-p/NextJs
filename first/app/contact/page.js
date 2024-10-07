"use client";
import React from 'react'
import Script from 'next/script'
import { contactSendAction } from '@/actions/contactForm'
import { useRef } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const contact = () => {
  let ref = useRef();
  const handleSubmit = async(e) => {
    e.preventDefault(); 
    // Get the form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const response = await contactSendAction(data);
    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }

    ref.current.reset();
  }
  return (
    <div>
      <Script>
        {
          `
          alert('hello from contact page')
          `
        }
      </Script>
      <ToastContainer />
      <h1 className='text-white font-bold w-[90vw] text-center mt-7'>Contact Page</h1>
        {/* make contact form */}
        <form onSubmit={handleSubmit} className='flex justify-center items-center gap-7 w-[90vw] h-[90vh] flex-col' ref={ref}>
          <input type="text" name="name" placeholder="name" className='text-black'/>
          <input type="email" name="email" placeholder="email" className='text-black'/>
          <textarea name="message" placeholder="message" className='text-black'></textarea>
          <button type="submit" className='border-2 border-white p-2 cursor-pointer'>Send</button>
        </form>

    </div>
  )
}

export default contact
