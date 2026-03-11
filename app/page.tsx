"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    "/photos/_DSC2897.jpg",
    "/photos/IMG_4548_SnapseedCopy.JPG",
    "/photos/IMG_5064.jpeg",
    "/photos/IMG_5601.JPG",
    "/photos/IMG_5636.jpeg",
    "/photos/IMG_5788.jpeg",
    "/photos/IMG_7948.jpeg",
    "/photos/IMG_9706_SnapseedCopy.jpeg",
    "/photos/FullSizeRender.jpeg",
    "/photos/IMG_1014_SnapseedCopy.jpg",
    "/photos/Image.PNG",
    "/photos/ld-export-2453f4fd-03302025.JPG",
  ];

  return (
    <>
      <Head>
        <title>Ektara - Kaustubh Gera</title>
        <meta name="description" content="Photography portfolio of Kaustubh Gera" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet" />
      </Head>
      <div className="bg-black text-white min-h-screen font-inter">
      <div
      className="pointer-events-none fixed inset-0 opacity-10 mix-blend-overlay"
      style={{backgroundImage:"url('https://grainy-gradients.vercel.app/noise.svg')"}}
    />

    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-colors duration-300 ${scrolled ? 'bg-black/70' : 'bg-black/40'}`}>

  <div className="max-w-6xl mx-auto flex justify-between items-center p-4 md:p-6">

    <motion.h1
      className="text-xl font-bold tracking-wider"
      whileHover={{ scale: 1.05 }}
    >
      Ektara
    </motion.h1>
    {/* mobile menu toggle */}
    <button
      className="ml-4 md:hidden text-2xl focus:outline-none"
      onClick={() => setMobileMenu(!mobileMenu)}
      aria-label="toggle menu"
    >
      {mobileMenu ? '✕' : '☰'}
    </button>

    <div className={`flex space-x-8 text-sm ${mobileMenu ? 'flex flex-col absolute top-full left-0 w-full bg-black/90 py-6 px-4 space-y-4 md:static md:flex-row md:bg-transparent md:py-0 md:px-0 md:space-y-0' : 'hidden md:flex'}`}>

      <motion.a href="#about" className="relative group py-2 md:py-0" whileHover={{ scale: 1.05 }}>
        <span className="hover:text-gray-300 transition">About</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
      </motion.a>
      <motion.a href="#specialties" className="relative group py-2 md:py-0" whileHover={{ scale: 1.05 }}>
        <span className="hover:text-gray-300 transition">Specialties</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
      </motion.a>
      <motion.a href="#gallery" className="relative group py-2 md:py-0" whileHover={{ scale: 1.05 }}>
        <span className="hover:text-gray-300 transition">Gallery</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
      </motion.a>
      <motion.a href="#contact" className="relative group py-2 md:py-0" whileHover={{ scale: 1.05 }}>
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
      by Kaustubh Gera — Capturing stories through light
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
      <motion.section id="about" className="py-32 px-6 max-w-4xl mx-auto" initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:0.8 }} viewport={{ once:true }}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl mb-6 font-bold">The Visual Storyteller</h2>
            <p className="opacity-80 leading-relaxed text-lg">
              I'm Kaustubh Gera — a visual storyteller obsessed with capturing raw emotions and unscripted moments. With a keen eye for light and composition, I specialize in bringing stories to life through the lens. From mountain landscapes to candid street photography, I believe every frame has a story waiting to be told. My work is driven by a passion for authentic moments and the beauty found in simplicity.
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
              <p className="text-3xl font-bold text-white">1000+</p>
              <p className="text-gray-400 mt-2">Photos Captured</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 hover:border-white/30 transition">
              <p className="text-3xl font-bold text-white">6y</p>
              <p className="text-gray-400 mt-2">Photography Journey</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 hover:border-white/30 transition">
              <p className="text-3xl font-bold text-white">∞</p>
              <p className="text-gray-400 mt-2">Passion for Stories</p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* SPECIALTIES */}
      <motion.section id="specialties" className="py-32 px-6 bg-gradient-to-r from-black via-gray-900 to-black" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8 }} viewport={{ once:true }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16"
          >
            What I Specialize In
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🏔️", title: "Landscape Photography", desc: "Capturing breathtaking natural beauty and majestic vistas" },
              { icon: "👥", title: "Candid Moments", desc: "Unscripted, authentic moments that tell real stories" },
              { icon: "🌃", title: "Street Photography", desc: "Urban exploration through the lens of everyday life" }
            ].map((spec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="p-8 rounded-2xl border border-white/10 transition-all duration-300 cursor-pointer"
              >
                <p className="text-5xl mb-4">{spec.icon}</p>
                <h3 className="text-2xl font-bold mb-3">{spec.title}</h3>
                <p className="text-gray-400 leading-relaxed">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <motion.section id="gallery" className="px-6 pb-32" initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:0.8 }} viewport={{ once:true }}>

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

      </motion.section>


      {/* QUOTE */}
      <motion.section className="h-[60vh] flex items-center justify-center text-center px-6 relative bg-gradient-to-r from-black via-gray-900 to-black" initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:0.8 }} viewport={{ once:true }}>
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
          <p className="text-gray-500 mt-6">— Kaustubh Gera</p>
        </motion.div>
      </section>


      {/* CONTACT */}
      <motion.section id="contact" className="py-32 px-6 max-w-3xl mx-auto text-center bg-gradient-to-r from-black via-gray-900 to-black" initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:0.8 }} viewport={{ once:true }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-6 font-bold">Ready to Work Together?</h2>

          <p className="opacity-80 mb-4 text-lg">
            I'm always excited about new projects and collaborations. Let's create something amazing together.
          </p>

          <p className="text-gray-500 mb-12">
            Whether you have a specific project in mind or just want to chat about photography, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="https://www.instagram.com/ektarabykaustubh?igsh=dW9uYWRhejBuOWZx&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="px-8 py-3 border border-white rounded-lg hover:border-gray-300 transition text-lg font-medium"
            >
              Instagram
            </motion.a>
            <motion.a 
              href="mailto:ektarabykaustubh@gmail.com" 
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition text-lg font-medium"
            >
              Email Me
            </motion.a>
          </div>
        </motion.div>

      </section>


      {/* FOOTER */}
      <footer className="py-16 px-6 text-center border-t border-white/10 bg-gradient-to-r from-black via-gray-900 to-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="opacity-60 mb-4">© {new Date().getFullYear()} Ektara by Kaustubh Gera</p>
          <p className="text-gray-600 text-sm">Crafted with passion for authentic storytelling</p>
        </motion.div>
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