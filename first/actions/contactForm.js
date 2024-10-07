"use server";
import clientPromise from "@/lib/mongodb";
import Contact from "@/lib/models/Contact"; 
export const contactSendAction = async (data) => {
  try {
    const client = await clientPromise;
    const db = client.db("messages");
    const newContact = new Contact({
      name: data.name,
      email: data.email,
      message: data.message,
    });
    console.log(newContact);     
    
    await db.collection("contacts").insertOne(newContact); 
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    return { success: false, message: "Failed to send message."+error.message };
  }
};