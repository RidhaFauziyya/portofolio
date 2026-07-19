"use client";
import { ArrowLeft, Home as HomeIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 flex justify-center animate-fade-in">
      <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-3 py-2 shadow-xl">
        <Link
          href="/"
          className="rounded-xl p-3 text-white transition hover:bg-white/10"
        >
          <HomeIcon size={18} />
        </Link>

        <div className="mx-2 h-6 w-px bg-white/10" />

        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-xl px-4 py-2 text-sm text-zinc-200 transition-all duration-300 hover:bg-[#aea2c6]/20 hover:text-white"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
