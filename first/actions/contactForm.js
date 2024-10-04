"use server"
import fs from 'fs/promises'
export const contactSendAction = async(e)=>{
    let name = e.get('name');
    let email = e.get('email');
    let message = e.get('message');
    console.log(name, email, message);
    let a= await fs.writeFile('contact.txt', `name: ${name}, email: ${email}, message: ${message}`);
  }