import Link from "next/link";
import Socials from "./components/Socials";
import { IoMdDownload } from "react-icons/io";

export default function Home() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center p-8 sm:p-20 gap-12 ">
      {/* Profile Image */}
      <img
        src="/projects/headshot.jpg"
        alt="Kevin Klatt"
        className="w-32 h-32 sm:w-48 sm:h-48 rounded-full shadow-lg object-contain"
      />

      {/* Text Content */}
      <div className="flex flex-col text-center sm:text-left max-w-xl">
        <h1 className="font-extrabold text-4xl sm:text-6xl mb-2">
          Hi, I&apos;m Kevin Klatt
        </h1>
        <p className="text-lg sm:text-2xl text-gray-600 italic mb-4">
          Full-Stack Engineer • 3D x Web
        </p>
        <p className="text-lg sm:text-xl mb-6">
          With over <span className="font-semibold">4 years</span> of
          experience, I specialize in{" "}
          <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">TypeScript</span>, and{" "}
          <span className="font-semibold">Three.js</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <Link
            href="/projects"
            className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 border-b-8 border-yellow-500"
          >
            View Projects
          </Link>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1TfcQnHIUeo2K6Wb5df4JEPmRjULcCTMv/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gray-800 text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-700"
          >
            <IoMdDownload className="text-xl" />
            Resume / CV
          </a>
        </div>

        <Socials />
      </div>
    </section>
  );
}
