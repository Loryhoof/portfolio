import { ReactNode } from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function SocialsButton({
  path,
  children,
}: {
  path: string;
  children: ReactNode;
}) {
  return (
    <a
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className="w-18 h-18 border-2 border-gray-200 items-center justify-center flex rounded-lg hover:border-gray-300 cursor-pointer"
    >
      {children}
    </a>
  );
}

export default function Socials() {
  return (
    <div className="flex flex-row gap-3 py-8">
      <SocialsButton path="mailto:klattkev@gmail.com">
        <MdOutlineMailOutline className="w-8 h-8" />
      </SocialsButton>

      <SocialsButton path="https://www.linkedin.com/in/kevinklatt/">
        <FaLinkedin className="w-8 h-8" />
      </SocialsButton>

      <SocialsButton path="https://github.com/Loryhoof">
        <FaGithub className="w-8 h-8" />
      </SocialsButton>

      <SocialsButton path="https://www.youtube.com/@sirklatt">
        <FaYoutube className="w-8 h-8" />
      </SocialsButton>
    </div>
  );
}
