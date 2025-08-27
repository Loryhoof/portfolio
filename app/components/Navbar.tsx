"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

function NavButton({
  text,
  selected = false,
  onClick,
}: {
  text: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`font-bold text-xl ${
        selected && `border-b-4`
      } hover:border-b-4  w-24 p-2 cursor-pointer`}
    >
      {text}
    </button>
  );
}

export default function Navbar() {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="sticky top-0 bg-white p-4 flex flex-row items-center justify-center gap-4 h-18">
      <NavButton
        onClick={() => router.push("/")}
        selected={path == "/"}
        text="Home"
      />

      <NavButton
        onClick={() => router.push("/projects")}
        selected={path.startsWith("/projects")}
        text="Projects"
      />
    </div>
  );
}
