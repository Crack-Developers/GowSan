import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { IoCloseOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false); // State to track validation errors

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if any fields are empty
    if (!name || !email || !message) {
      setError(true);
      toast.error('Please fill in all fields');
      return;
    }

    const serviceId = 'service_e4u54mx'; // Replace with your EmailJS service ID
    const templateId = 'template_823cbmc'; // Replace with your EmailJS template ID
    const userId = 'uil1ViUiT9_TzhRts'; // Replace with your EmailJS user ID

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'GowSan',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email Sent Successfully', response);
        toast.success('Your message has been sent successfully');
        setEmail('');
        setName('');
        setMessage('');
      })
      .catch((error) => { 
        console.error('Error Sending Message', error);
        toast.error('Failed to send the message');
      });
  }

  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              {/* header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1>Contact US</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer "
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              {/* form section */}
              
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setError(false); }}
                  className={`w-full rounded-full border px-2 py-1 mb-4 ${error && !name ? 'border-red-500' : 'border-gray-300 dark:border-gray-500 dark:bg-gray-800'}`}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(false); }}
                  className={`w-full rounded-full border px-2 py-1 mb-4 ${error && !email ? 'border-red-500' : 'border-gray-300 dark:border-gray-500 dark:bg-gray-800'}`}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={message}
                  onChange={(e) => { setMessage(e.target.value); setError(false); }}
                  className={`w-full rounded-full border px-2 py-1 mb-4 ${error && !message ? 'border-red-500' : 'border-gray-300 dark:border-gray-500 dark:bg-gray-800'}`}
                />
                <div className="flex justify-center">
                  <button onClick={handleSubmit} className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Toast notification container */}
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default Popup;
