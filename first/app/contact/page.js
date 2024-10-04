import React from 'react'
import Script from 'next/script'
import fs from 'fs/promises'
const contact = () => {
  const contactSendAction = async(e)=>{
    "use server"
    let name = e.get('name');
    let email = e.get('email');
    let message = e.get('message');
    let a=fs.writeFile('contact.txt', `name: ${name}, email: ${email}, message: ${message}`);
    if(a){
      console.log('message sent')
    }
    else{
      console.log('message not sent')
    }
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
      <h1 className='text-white font-bold w-[90vw] text-center mt-7'>Contact Page</h1>
        {/* make contact form */}
        <form action={contactSendAction} className='flex justify-center items-center gap-7 w-[90vw] h-[90vh] flex-col'>
          <input type="text" name="name" placeholder="name" className='text-black'/>
          <input type="email" name="email" placeholder="email" className='text-black'/>
          <textarea name="message" placeholder="message" className='text-black'></textarea>
          <button type="submit" className='border-2 border-white p-2 cursor-pointer'>Send</button>
        </form>

    </div>
  )
}

export default contact

export const metadata = {
  title: "contact -- first",
  description: "my contact page",
};