"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    "/photos/_DSC2897.jpg",
    "/photos/IMG_4548_SnapseedCopy.JPG",
    "/photos/IMG_5064.jpeg",
    "/photos/IMG_5601.JPG",
    "/photos/IMG_5788.jpeg",
    "/photos/IMG_9706_SnapseedCopy.jpeg",
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div
      className="pointer-events-none fixed inset-0 opacity-10 mix-blend-overlay"
      style={{backgroundImage:"url('https://grainy-gradients.vercel.app/noise.svg')"}}
    />

    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/60 to-black/20 backdrop-blur-md">

  <div className="max-w-6xl mx-auto flex justify-between items-center p-4 md:p-6">

    <motion.h1 
      className="text-xl font-bold tracking-wider"
      whileHover={{ scale: 1.05 }}
    >
      Ektara
    </motion.h1>

    <div className="flex space-x-8 text-sm">

      <motion.a href="#about" className="relative group" whileHover={{ scale: 1.05 }}>
        <span className="hover:text-gray-300 transition">About</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
      </motion.a>
      <motion.a href="#gallery" className="relative group" whileHover={{ scale: 1.05 }}>
        <span className="hover:text-gray-300 transition">Gallery</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
      </motion.a>
      <motion.a href="#contact" className="relative group" whileHover={{ scale: 1.05 }}>
        <span className="hover:text-gray-300 transition">Contact</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
      </motion.a>

    </div>

  </div>

</nav>

      {/* HERO */}
      
      <section id="hero" className="h-screen flex items-center justify-center relative">

  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute w-full h-full object-cover"
    src="/videos/1772951505833722.mov"
  />

  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative text-center space-y-6">

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="inline-block px-4 py-2 rounded-full border border-white/30 mb-6"
    >
      <p className="text-xs tracking-widest uppercase">Visual Storytelling</p>
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
    >
      Ektara
    </motion.h1>

    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="text-lg md:text-xl opacity-80 tracking-wide"
    >
      by Kaustubh — Capturing stories through light
    </motion.p>

    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="mt-16 opacity-70 text-sm tracking-widest"
    >
      scroll ↓
    </motion.div>

  </div>

</section>


      {/* ABOUT */}
      <section id="about" className="py-32 px-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl mb-6 font-bold">The Photographer</h2>
            <p className="opacity-80 leading-relaxed text-lg">
              I'm Kaustubh — a photographer drawn to mountains,
              quiet streets and fleeting moments. Photography for me
              is about learning to notice beauty that most people
              walk past.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-lg border border-white/10 hover:border-white/30 transition">
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-gray-400 mt-2">Photos Captured</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 hover:border-white/30 transition">
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-gray-400 mt-2">Countries Explored</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 hover:border-white/30 transition">
              <p className="text-3xl font-bold text-white">7y</p>
              <p className="text-gray-400 mt-2">Photography Journey</p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* GALLERY */}
      <section id="gallery" className="px-6 pb-32">

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl text-center mb-4 font-bold"
        >
          Selected Frames
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16"
        >
          A curated collection of moments that moved me
        </motion.p>

        <div className="columns-1 md:columns-3 gap-6 max-w-6xl mx-auto space-y-6">

          {images.map((src) => (

            <motion.div
              key={src}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="overflow-hidden rounded-2xl break-inside-avoid cursor-pointer group relative"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt="Gallery photo"
                width={500}
                height={500}
                className="w-full object-cover group-hover:brightness-75 transition-all duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">View Fullscreen</p>
              </div>
            </motion.div>

          ))}

        </div>

      </section>


      {/* QUOTE */}
      <section className="h-[60vh] flex items-center justify-center text-center px-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-3xl md:text-4xl italic font-light opacity-90 leading-relaxed">
            "Somewhere between the mountains and silence,
            I realised photography was never about the camera —
            it was about learning to see."
          </p>
          <p className="text-gray-500 mt-6">— Kaustubh</p>
        </motion.div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 max-w-3xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-6 font-bold">Let's Connect</h2>

          <p className="opacity-80 mb-12 text-lg">
            Interested in collaborations or have a project in mind?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="px-8 py-3 border border-white rounded-lg hover:border-gray-300 transition text-lg font-medium"
            >
              Instagram
            </motion.a>
            <motion.a 
              href="mailto:contact@ektara.com" 
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition text-lg font-medium"
            >
              Email Me
            </motion.a>
          </div>
        </motion.div>

      </section>


      {/* FOOTER */}
      <footer className="py-10 text-center opacity-60">

        © {new Date().getFullYear()} Ektara by Kaustubh

      </footer>

{selectedImage && (

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    onClick={() => setSelectedImage(null)}
  >

    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative max-h-[90vh] max-w-[90vw] rounded-2xl overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        src={selectedImage}
        alt="Full gallery photo"
        width={1200}
        height={1200}
        className="w-full h-auto"
      />
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition"
      >
        <span className="text-white text-2xl">×</span>
      </button>
    </motion.div>

  </motion.div>

)}


    </div>
  );
}