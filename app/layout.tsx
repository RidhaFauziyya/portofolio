import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Analytics } from "./components/analytics";
import "yet-another-react-lightbox/styles.css";
import Link from "next/link";
import { Github, Linkedin, Mail, FileText, PhoneCall } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-body ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
        <footer className="mt-32 border-t border-white/10 py-10">
          <div className="mx-auto flex justify-between items-center gap-5">
            <p className="text-center text-xs text-white">
              © {new Date().getFullYear()} Ridha Rahma • Built with Next.js &
              Tailwind CSS
            </p>
            <div className="flex items-center gap-4 text-white">
              <Link
                href="https://github.com/RidhaFauziyya"
                target="_blank"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-zinc-400 transition hover:border-[#aea2c6]/40 hover:text-white"
              >
                <Github size={18} color="white" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/ridha-fauziyya-rahma-bb1a49221/"
                target="_blank"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-zinc-400 transition hover:border-[#aea2c6]/40 hover:text-white"
              >
                <Linkedin size={18} color="white" />
              </Link>

              <Link
                href="mailto:ridhafauziyyar123@gmail.com"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-zinc-400 transition hover:border-[#aea2c6]/40 hover:text-white"
              >
                <Mail size={18} color="white" />
              </Link>
              <Link
                href="https://wa.me/6285604748674"
                target="_blank"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-zinc-400 transition hover:border-[#aea2c6]/40 hover:text-white"
              >
                <PhoneCall size={18} color="white" />
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
