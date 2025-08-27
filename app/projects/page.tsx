"use client";

import { useRouter } from "next/navigation";
import { ProjectThumbnail } from "../components/ProjectThumbnail";
import { PROJECTS } from "../constants";
import Footer from "../components/Footer";

export default function Projects() {
  const router = useRouter();

  const handleNavigateToProject = (path: string) => {
    router.push(`/projects/${path}`);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-8">
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-2xl sm:text-3xl font-extrabold mb-8 text-center">
            Personal Projects
          </p>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {PROJECTS.map((project, index) => (
              <ProjectThumbnail
                onClick={() => handleNavigateToProject(project.path)}
                key={index}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
