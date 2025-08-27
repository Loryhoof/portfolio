"use client";

import Footer from "@/app/components/Footer";
import YellowButton from "@/app/components/YellowButton";
import { PROJECTS } from "@/app/constants";
import { ProjectData } from "@/app/types/types";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

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

          {/* Links section */}
          <div className="font-extrabold text-2xl sm:text-3xl w-full sm:w-4/5 lg:w-2/3 flex flex-col gap-2">
            {project.links.map((link, index) => (
              <div
                className="flex flex-col sm:flex-row gap-1 sm:gap-2"
                key={index}
              >
                <div className="flex flex-col">
                  <p className="font-normal">{link.label}</p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-normal break-all"
                    href={link.url}
                  >
                    {link.url}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
