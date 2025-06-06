'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const result = await emailjs.sendForm(
        'service_05wfp7s', // e.g., 'service_abc123'
        'template_dxd0ali', // e.g., 'template_xyz456'
        formRef.current!,
        'KeMnEAHfuPvNj02N7' // e.g., 'DiAmPl3k3YxYz'
      );

      console.log(result.text);
      setStatus('Message sent successfully!');
      formRef.current?.reset();
    } catch (error) {
      console.error(error);
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
<form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
  <input name="name" type="text" placeholder="Your Name" required className="input" />
  <input name="title" type="text" placeholder="Your Request Title" required className="input" />
  <input name="email" type="email" placeholder="Your Email" required className="input" />
  <button type="submit" className="btn">Send</button>
  {status && <p className="text-sm text-gray-300">{status}</p>}
</form>


  );
}
