import { ProjectData } from "../types/types";

export const ProjectThumbnail = ({
  project,
  onClick,
}: {
  project: ProjectData;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="group border border-gray-200 border-2 rounded-lg hover:border-gray-300 hover:shadow-xl cursor-pointer transition-all"
    >
      <img
        className="rounded-t-lg w-full h-48 object-cover"
        src={project.thumbnail_image}
        alt={project.name}
      />
      <div className="p-4">
        <p className="font-bold text-lg mb-2">{project.name}</p>
        <p className="text-sm text-gray-600 mb-3">
          {project.thumbnail_description}
        </p>

        {/* Technologies Section */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <p
              key={index}
              className="bg-gray-50 p-2 border border-gray-200 text-xs rounded-md group-hover:bg-gray-100"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
