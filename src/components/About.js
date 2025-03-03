import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About A - IT</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              A - IT is a leading technology solutions provider, offering comprehensive services in software development, cloud computing, and digital transformation. Our expert team delivers innovative solutions tailored to meet your business needs.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Technology illustration"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;