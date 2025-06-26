'use client'
import { useEffect, useState } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import CursorAnimation from "@/components/CursorAnimation";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isClientMounted, setIsClientMounted] = useState(false);

  useEffect(() => {
    setIsClientMounted(true);
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (isClientMounted) {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = '';
      }
    }
  }, [isDarkMode, isClientMounted])

  // Prevent hydration mismatch by not rendering until client is mounted
  if (!isClientMounted) {
    return null;
  }


  return (
    <>
      <CursorAnimation isDarkMode={isDarkMode} />
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}