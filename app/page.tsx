import Link from "next/link";
import React from "react";
import { Navigation } from "./components/nav";
import Particles from "./components/particles";
import {
  Home as HomeIcon,
  FolderOpen,
  Mail,
  User,
  Sparkles,
  Github,
  Linkedin,
  FileText,
  FolderGit2,
  ArrowRight,
} from "lucide-react";
import MoreButton from "./components/more";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-40 w-full lg:w-4/5 mx-auto overflow-hidden">
      <Navigation />
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="flex flex-col items-center" id="hero">
        <h1 className="text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display lg:text-6xl md:text-5xl whitespace-nowrap bg-clip-text ">
          Hi! I'm Ridha Fauziyya Rahma
        </h1>
        <div className="hidden animate-glow md:block animate-fade-right" />
        <h3 className="mt-6 text-xl text-transparent duration-1000 bg-[#d1bfda] cursor-default animate-title font-display lg:text-2xl md:text-3xl whitespace-nowrap bg-clip-text ">
          Software Engineering Technology Graduate
        </h3>
        <div className="mt-10 text-center animate-fade-in w-9/12">
          <h2 className="text-xl text-white ">
            Interested in <b> Software Quality Assurance </b> with a background
            in Web Development and Technical Education.
          </h2>
        </div>
        <div className="flex gap-10 animate-fade-in">
          <a
            href="/projects"
            className="
              mt-10 inline-flex items-center gap-2
              rounded-xl
              border-white/90
              bg-[#aea2c6]/50
              px-3 py-2
              font-sm
              text-[#ffffff]
              transition
              hover:scale-105
            "
          >
            <FolderOpen size={20} />
            View Projects
          </a>
          <a
            href="#"
            className="
              mt-10 inline-flex items-center gap-2
              rounded-xl
              border-white/90
              bg-[#aea2c6]/50
              px-3 py-2
              font-sm
              text-[#ffffff]
              transition
              hover:scale-105
            "
          >
            <FileText size={20} />
            My CV
          </a>
        </div>
      </div>

      <div className="my-20 w-full flex items-center justify-center gap-4">
        <div className="h-px w-3/4 bg-white/10" />
        <Sparkles size={24} color="white" />
        <div className="h-px w-3/4 bg-white/10" />
      </div>
      <div
        className="flex flex-col lg:flex-row w-full px-20 lg:gap-10 gap-5"
        id="about"
      >
        <h1 className="text-2xl w-full text-transparent duration-1000 bg-white cursor-default animate-title font-display lg:text-6xl md:text-5xl bg-clip-text ">
          About Me
        </h1>
        <div>
          <p className="text-white text-justify mb-4 lg:text-xl">
            I am a Software Engineering Technology graduate with experience in
            software development, software testing, and technical education. I
            enjoy understanding how systems work, solving problems, and
            improving software quality through structured testing and continuous
            learning. Currently, I am focusing on building my career in Software
            Quality Assurance while leveraging my background in web development
            and teaching.
          </p>
          <MoreButton
            href="/about"
            title="About Me"
            subtitle="Ridha Rahma"
            imageSrc="/profile.jpg"
          />
        </div>
      </div>

      <section className="mx-auto max-w-3xl py-24 text-center">
        {/* Separator */}
        <div className="mb-16 flex items-center justify-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-white/10" />
          <div className="mx-4 h-2 w-2 rounded-full bg-[#aea2c6]" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-white/10" />
        </div>

        <p className="text-sm uppercase tracking-[0.3em] text-[#aea2c6]">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Let's Work Together
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-zinc-300 leading-8">
          I'm currently open to opportunities as a QA Engineer, Software Tester,
          or Web Developer. Feel free to reach out if you'd like to collaborate.
        </p>

        <a
          href="mailto:ridha@example.com"
          className="
      mt-10 inline-flex items-center gap-2
      rounded-xl
      bg-[#aea2c6]
      px-6 py-3
      font-medium
      text-slate-900
      transition
      hover:scale-105
    "
        >
          <Mail size={18} />
          Email Me
        </a>

        <div className="mt-10 flex justify-center gap-4">
          <a className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur transition hover:border-[#aea2c6]/50 hover:bg-white/10">
            <Github size={20} />
          </a>

          <a className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur transition hover:border-[#aea2c6]/50 hover:bg-white/10">
            <Linkedin size={20} />
          </a>

          <a className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur transition hover:border-[#aea2c6]/50 hover:bg-white/10">
            <FileText size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
