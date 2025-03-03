import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import fullstack from '../pages/images/fullstack.png';
import cloud from '../pages/images/cloud.png';
import web from '../pages/images/web.png';
import ai from '../pages/images/ai.png';

const slides = [
  {
    id: 1,
    image: fullstack,
    title: 'Guide your career with Full Stack Development',
    description: 'Empowering businesses with cutting-edge technology solutions for digital transformation and innovation.',
    path: '/frontend-development',
  },
  {
    id: 2,
    image: cloud,
    title: 'Guide your career with Cloud Computing Technologies',
    description: 'Learn industry-leading technologies with expert guidance to boost your career growth.',
    path: '/cloud-Technologies',
  },
  {
    id: 3,
    image: web,
    title: 'Upskill your career by doing projects',
    description: 'project goal, requirements, and deliverables to ensure alignment with business needs and user expectations.',
    path: '/',
  },
  {
    id: 4,
    image: ai,
    title: 'Guide your career with AI Technologies',
    description: 'Connect, collaborate, and grow with like-minded professionals in the tech industry.',
    path: '/',
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(slides[0]); // Track the active slide

  return (
    <div id="home" className="relative h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        className="h-full"
        onSlideChange={(swiper) => setActiveSlide(slides[swiper.realIndex])} // Update active slide
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-screen">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-white mb-8">{slide.description}</p>
                  
                  {/* Get Started Button (Dynamic Link) */}
                  <button
                    className="text-white px-8 py-3 rounded-lg border-2 border-white transition duration-300 hover:bg-white hover:text-black"
                    onClick={() => navigate(activeSlide.path)} // Navigate dynamically
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
