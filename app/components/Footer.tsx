"use client";

import { usePathname, useRouter } from "next/navigation";
import Socials from "./Socials";
import YellowButton from "./YellowButton";
import { useEffect, useState } from "react";

export default function Footer() {
  const [buttonText, setButtonText] = useState<string>("View Projects");
  const path = usePathname();
  const router = useRouter();
  //

  const handleButtonClick = () => {
    if (path == "/") router.push("/projects");
    if (path == "/projects") router.push("/");
    if (path.startsWith("/projects/")) router.push("/projects");
  };

  useEffect(() => {
    if (path == "/") setButtonText("View Projects");
    if (path == "/projects") setButtonText("Go to Home");
    if (path.startsWith("/projects/")) setButtonText("Other Projects");
  }, [path]);

  return (
    <div className="bottom-0 flex flex-col justify-center items-center mb-24">
      <Socials />
      <YellowButton text={buttonText} onClick={handleButtonClick} />
    </div>
  );
}
