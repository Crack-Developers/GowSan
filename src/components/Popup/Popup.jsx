import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

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
        setEmail('');
        setName('');
        setMessage('');
      })
      .catch((error) => { 
        console.error('Error Sending Message', error);
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
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <div className="flex justify-center">
                  <button onClick={handleSubmit} className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
