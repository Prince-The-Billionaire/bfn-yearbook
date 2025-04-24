"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    gsap.fromTo(
      footerRef.current,
      { yPercent: 20, opacity: 0.3, scale: 0.98 },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white px-6 py-12 rounded-t-2xl shadow-[0_-8px_30px_rgba(0,0,0,0.4)] mt-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-4">Zap</h2>
          <p className="text-sm text-gray-400">
            Empowering Nigerian businesses with high-end, lightning-fast websites and SaaS.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li><a href="#" className="hover:text-white transition-all">Home</a></li>
            <li><a href="#" className="hover:text-white transition-all">Products</a></li>
            <li><a href="#" className="hover:text-white transition-all">About</a></li>
            <li><a href="#" className="hover:text-white transition-all">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400 transition"><FaGithub /></a>
            <a href="#" className="hover:text-blue-500 transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 text-xs mt-8">
        © {new Date().getFullYear()} Zap. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
