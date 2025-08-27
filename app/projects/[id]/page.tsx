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
          <div className="text-center">
            <h1 className="font-extrabold text-4xl sm:text-6xl tracking-tight">
              {project.name}
            </h1>
            <p className="mt-2 text-gray-500 text-lg">{project.year}</p>
          </div>

          {/* Year (small, subtle) */}
          {/* <div className="text-center">
            <span className="inline-block rounded-md bg-blue-100 px-3 py-1 text-sm sm:text-base text-blue-800">
              {project.year}
            </span>
          </div> */}

          {/* Primary Links — make these the star */}
          {project.links?.length > 0 && (
            <div className="w-full sm:w-4/5 lg:w-2/3">
              <div className="flex flex-wrap justify-center gap-3">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white
                               hover:bg-blue-700 active:bg-blue-800 transition shadow"
                  >
                    <FaExternalLinkAlt aria-hidden />
                    <span className="font-semibold">{link.label}</span>
                  </a>
                ))}
              </div>
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

          {/* Tech stack (secondary, muted, same width as links to keep the pyramid) */}
          {project.technologies?.length > 0 && (
            <div className="w-full sm:w-4/5 lg:w-2/3">
              <h3 className="text-base font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((item, index) => (
                  <span
                    key={index}
                    className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs sm:text-sm text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <Footer />
    </>
  );
}
