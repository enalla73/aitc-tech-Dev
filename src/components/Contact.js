import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com)$/;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    // Name validation
    if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
      isValid = false;
    }

    // Email validation
    if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address (gmail.com, yahoo.com, outlook.com, or hotmail.com)';
      isValid = false;
    }

    // Message validation
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!validateForm()) {
  //     toast.error('Please fix the errors in the form');
  //     return;
  //   }

  //   try {
  //     const result = await emailjs.sendForm(
  //       'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  //       'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  //       form.current!,
  //       'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
  //     );

  //     if (result.text === 'OK') {
  //       toast.success('Message sent successfully!');
  //       setFormData({ name: '', email: '', message: '' });
  //     }
  //   } catch (error) {
  //     toast.error('Failed to send message. Please try again.');
  //     console.error('EmailJS Error:', error);
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    // if (errors[name as keyof typeof errors]) {
    //   setErrors(prev => ({
    //     ...prev,
    //     [name]: ''
    //   }));
    // }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={()=>{}} className="space-y-8">
              <div className="relative">
                <label 
                  htmlFor="name"
                  className="absolute -top-2 left-2 bg-white px-2 text-sm font-medium text-gray-600"
                >
                  Full Name
                </label>
                <div className="flex items-center">
                  <User className="w-5 h-5 text-gray-400 absolute left-3" />
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    placeholder="Full Name"
                    required
                  />
                </div>
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="relative">
                <label 
                  htmlFor="email"
                  className="absolute -top-2 left-2 bg-white px-2 text-sm font-medium text-gray-600"
                >
                  Email Address
                </label>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3" />
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    placeholder="Email@example.com"
                    required
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="relative">
                <label 
                  htmlFor="message"
                  className="absolute -top-2 left-2 bg-white px-2 text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <div className="flex">
                  <MessageSquare className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <div className="flex justify-end space-x-4">
                <button 
                  type="button"
                  className="px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => {
                    setFormData({ name: '', email: '', message: '' });
                    setErrors({ name: '', email: '', message: '' });
                  }}
                >
                  Clear
                </button>
                <button 
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;