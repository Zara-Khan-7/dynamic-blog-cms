"use client"
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Banner = () => {
    const [text] = useTypewriter({
    words: ['Welcome to ZK Blogs 🤓', 'This is my blog website about Programming 💻', 'And Mental Health 🧠','Compiled and Designed by Zara Yousuf 😎'],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className='w-full bg-banner bg-center h-80 object-cover'>
        <div className='w-full h-80 bg-black opacity-80 text-white z-[-1]'>
            <div className='h-80 max-w-screen-2xl mx-auto flex flex-col justify-center items-center text-4xl md:text-5xl font-extrabold text-center'>
                <motion.div
                className='h-80 max-w-screen-2xl mx-auto flex flex-col justify-center items-center'
                initial={{ x: -1000, opacity:0, scale:0.5 }}
                animate={{ x: [ 0, 900, 0 ]}}
                transition={{
                    duration: 2,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                >
                <h1 className='text-3xl md:text-5xl font-semibold text-[#fff] ml-4 mt-10'>ZK BLOGS</h1>
                <p className='text-xl md:text-3xl font-semibold mt-2 text-[#fff]'>
                {text}
                <Cursor cursorBlinking cursorStyle = "|" cursorColor='#4285f4'/>
                </p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}
export default Banner;
