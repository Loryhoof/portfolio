type ProjectDescriptionSection = {
  contentType: "text" | "image" | "video";
  content: string;
  label?: string | null;
};

type ProjectDescription = {
  sections: ProjectDescriptionSection[];
};

type LinkObject = {
  label: string;
  url: string;
};

export type ProjectData = {
  name: string;
  thumbnail_description: string;
  thumbnail_image: string;
  images: string[];
  year: number;
  technologies: string[];
  path: string;
  description: ProjectDescription;
  links: LinkObject[];
};
