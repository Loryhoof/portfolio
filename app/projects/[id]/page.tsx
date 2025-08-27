"use client";

import Footer from "@/app/components/Footer";
import YellowButton from "@/app/components/YellowButton";
import { PROJECTS } from "@/app/constants";
import { ProjectData } from "@/app/types/types";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function prettyUrl(u: string) {
  try {
    const url = new URL(u);
    return url.host + url.pathname.replace(/\/$/, "");
  } catch {
    // If it's missing protocol, show raw trimmed
    return u.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
}

export default function ProjectPage() {
  const router = useRouter();
  const { id } = useParams();

  const project: ProjectData | undefined = PROJECTS.find((p) => p.path === id);

  useEffect(() => {
    if (!project) router.push("/projects");
  }, [project]);

  return (
    <>
      {project && (
        <div className="flex flex-col items-center p-4 gap-8 py-8 w-full max-w-5xl mx-auto">
          {/* Title */}
          <p className="font-extrabold text-3xl sm:text-5xl text-center">
            {project.name}
          </p>

          {/* Year + Tech tags */}
          <div className="flex flex-wrap gap-2 justify-center">
            <p className="bg-blue-200 px-3 py-1 text-lg sm:text-xl rounded-md">
              {project.year}
            </p>
            {project.technologies.map((item, index) => (
              <div
                className="bg-gray-100 px-3 py-1 text-lg sm:text-xl rounded-md"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Links top */}
          {project.links?.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white px-4 py-2 border border-gray-300 hover:border-blue-400 hover:bg-blue-50 
                 font-medium flex flex-row items-center gap-2 rounded-lg cursor-pointer shadow-sm transition text-xl"
                >
                  <FaExternalLinkAlt className="text-blue-600" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          )}

          {/* Description sections */}
          {project.description.sections.map((section, index) => (
            <div
              className="w-full sm:w-4/5 lg:w-2/3 flex flex-col items-center gap-4"
              key={index}
            >
              {section.contentType === "text" ? (
                <div className="text-lg sm:text-2xl leading-relaxed text-center sm:text-left">
                  {section.content}
                </div>
              ) : section.contentType === "image" ? (
                <img
                  className="w-full rounded-lg shadow-md"
                  src={section.content}
                  alt={`section-${index}`}
                />
              ) : section.contentType === "video" ? (
                <div className="w-full py-4">
                  {section.label && (
                    <p className="text-lg sm:text-2xl py-2 text-center sm:text-left">
                      {section.label}
                    </p>
                  )}
                  {/* Responsive YouTube Embed */}
                  <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={section.content}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ) : (
                <div>Unknown type</div>
              )}
            </div>
          ))}

          {/* Links btm */}
          {project.links?.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white px-4 py-2 border border-gray-300 hover:border-blue-400 hover:bg-blue-50 
                 font-medium flex flex-row items-center gap-2 rounded-lg cursor-pointer shadow-sm transition text-xl"
                >
                  <FaExternalLinkAlt className="text-blue-600" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      <Footer />
    </>
  );
}
