"use client";

import Link from "next/link";
import { Navigation } from "../components/nav";
import { ArrowUpRight } from "lucide-react";

import { Card } from "../components/card";
import { TechIcons } from "../lib/techicon";

const contacts = [
  {
    title: "Email",
    description: "For job opportunities or collaborations.",
    value: "ridhafauziyyar123@gmail.com",
    href: "mailto:ridhafauziyyar123@gmail.com",
    icon: "Email",
    action: "Send Email",
  },
  {
    title: "LinkedIn",
    description: "Let's connect professionally.",
    value: "linkedin.com/in/ridha",
    href: "https://www.linkedin.com/in/ridha-fauziyya-rahma-bb1a49221/",
    icon: "LinkedIn",
    action: "View Profile",
  },
  {
    title: "GitHub",
    description: "Explore my projects and source code.",
    value: "github.com/ridha",
    href: "https://github.com/RidhaFauziyya",
    icon: "GitHub",
    action: "Visit GitHub",
  },
  {
    title: "Resume",
    description: "Download my latest resume.",
    value: "PDF Resume",
    href: "/#",
    icon: "Resume",
    action: "Download CV",
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <Navigation />
      <section className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-[#aea2c6]">
          Contact
        </p>

        <h1 className="mt-4 text-5xl font-bold text-white">
          Let's Work Together
        </h1>

        <p className="mt-6 leading-8 text-zinc-400">
          I'm currently open to Software QA, Manual Testing, Automation Testing,
          and Web Development opportunities. Feel free to contact me if you'd
          like to discuss a project, collaboration, or job opportunity.
        </p>
      </section>

      <section className="mt-20 grid gap-8 md:grid-cols-2">
        {contacts.map((contact) => {
          const Icon = TechIcons[contact.icon];

          return (
            <Card key={contact.title}>
              <div className="relative z-20 flex h-full flex-col p-8">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#aea2c6]/10">
                  <Icon size={28} className="text-[#aea2c6]" />
                </div>

                <h2 className="text-2xl font-semibold text-white">
                  {contact.title}
                </h2>

                <p className="mt-3 text-zinc-400">{contact.description}</p>

                <p className="mt-8 break-all text-white">{contact.value}</p>

                <Link
                  href={contact.href}
                  target="_blank"
                  className="group mt-8 inline-flex items-center gap-2 text-[#aea2c6] transition"
                >
                  {contact.action}

                  <ArrowUpRight
                    size={18}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </Card>
          );
        })}
      </section>

      <footer className="mt-24 text-center">
        <p className="text-zinc-500">Thanks for visiting my portfolio.</p>
      </footer>
    </main>
  );
}
