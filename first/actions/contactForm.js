"use server";
import connectToDatabase from "@/lib/mongodb";
import Contact from "@/lib/models/Contact"; 
export const contactSendAction = async (data) => {
  try {
    await connectToDatabase();
    const newContact = new Contact({
      name: data.name,
      email: data.email,
      message: data.message,
    });
    await newContact.save();
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    return { success: false, message: "Failed to send message." };
  }
};