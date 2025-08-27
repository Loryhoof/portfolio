import { ProjectData } from "./types/types";

export const PROJECTS: ProjectData[] = [
  {
    name: "Kubegame",
    thumbnail_description: "A multiplayer sandbox game",
    thumbnail_image: "/projects/kube.jpg",
    images: [],
    year: 2025,
    technologies: [
      "TypeScript",
      "Three.js",
      "Node.js",
      "Express",
      "React",
      "Rapier3D",
      "Socket.io",
    ],
    path: "kubegame",
    description: {
      sections: [
        {
          contentType: "text",
          content: `Kubegame is a browser-based multiplayer sandbox game inspired by open-world titles like GTA. It\"s the biggest Three.js project I\"ve worked on so far and was my way of really diving deep into web-based 3D, multiplayer networking, and game systems.`,
        },
        { contentType: "image", content: "/projects/kube.jpg" },
        {
          contentType: "text",
          content: `The frontend is built with Three.js + TypeScript for rendering, input, and UI, while the backend runs on Node.js with Rapier3D handling server-authoritative physics. The game server runs at a 30Hz tick rate and uses prediction and reconciliation to keep controls feeling responsive while dealing with latency and desync.`,
        },
        {
          contentType: "text",
          content: `Real-time communication is handled with Socket.io, and the whole thing runs on a DigitalOcean droplet. Working on Kubegame taught me a lot about multiplayer architecture, physics simulation, and techniques like interpolation, extrapolation, and lag compensation to make online play feel smooth.`,
        },

        {
          contentType: "video",
          content: "https://www.youtube.com/embed/Qao9tyvp9SA ",
        },

        {
          contentType: "text",
          content:
            'I"m also currently running a YouTube devlog series on the project, where I share progress, challenges, and technical breakdowns as I continue developing the game.',
        },
      ],
    },
    links: [
      {
        label: "Demo link:",
        url: "https://kubegame.com/",
      },
    ],
  },
  {
    name: "CrookTown",
    thumbnail_description: "A GTA-inspired sandbox game",
    thumbnail_image: "/projects/crook.jpg",
    images: [],
    year: 2022,
    technologies: ["TypeScript", "Three.js", "Node.js", "Express", "Socket.io"],
    path: "crooktown",
    description: {
      sections: [
        {
          contentType: "text",
          content: `CrookTown is a GTA-inspired sandbox game built in the browser with Three.js. It was the first big Three.js project I worked on, and it taught me a ton about web-based 3D, from rendering and assets to multiplayer systems. The game had vehicles, weapons, and a small open world you could mess around in with other players.`,
        },
        { contentType: "image", content: "/projects/crook.jpg" },

        {
          contentType: "text",
          content: `The backend ran on Node.js with Socket.io handling multiplayer sync, while the frontend used Three.js for all the rendering and interaction. It even picked up a small community of players (~300), which made it fun to see people actually playing something I had built.`,
        },

        {
          contentType: "video",
          content: "https://www.youtube.com/embed/v12txz36WXg",
          label: "CrookTown Gameplay Teaser",
        },

        {
          contentType: "text",
          content: `The backend ran on Node.js with Socket.io handling multiplayer sync, while the frontend used Three.js for all the rendering and interaction. It even picked up a small community of players (~300), which made it fun to see people actually playing something I had built.`,
        },
      ],
    },
    links: [
      {
        label: "Demo link:",
        url: "https://crooktown.github.io/",
      },
    ],
  },
  {
    name: "Bonkers",
    thumbnail_description: "A first-person survival game",
    thumbnail_image: "/projects/bonkers.jpg",
    images: [],
    year: 2024,
    technologies: ["TypeScript", "Three.js", "Node.js", "Rust"],
    path: "bonkers",
    description: {
      sections: [
        {
          contentType: "text",
          content: `Bonkers is a first-person survival game inspired by Rust. The idea was to build a proper survival experience directly in the browser, complete with infinite terrain, resource gathering, and survival mechanics. It’s one of the most technically challenging projects I’ve worked on so far.`,
        },
        { contentType: "image", content: "/projects/bonkers.jpg" },
        {
          contentType: "text",
          content: `The core feature is the infinite procedurally generated terrain. The generation itself runs in Rust for speed and efficiency, then the data is streamed to the frontend where it gets rendered in Three.js. This setup makes it possible to generate massive worlds without choking performance in the browser.`,
        },

        {
          contentType: "video",
          content: `https://www.youtube.com/embed/LBvc4l86Z_w`,
          label:
            "A short demo showing the infinite terrain system in action, powered by Rust on the backend and streamed into Three.js on the frontend.",
        },
        {
          contentType: "text",
          content: `I built the rendering pipeline, terrain system, and player controls, making sure the game stays responsive even while loading new terrain chunks. The terrain system uses quadtrees and other tricks to manage level of detail and keep frame rates stable. On top of that I added basic survival mechanics like movement, resource gathering, and interaction with the environment.`,
        },
      ],
    },
    links: [],
  },

  {
    name: "Cuti.ai",
    thumbnail_description: "AI Chatbot platform",
    thumbnail_image: "/projects/cuti.jpg",
    images: [],
    year: 2023,
    technologies: ["React", "Next.js", "Node.js", "Tailwind", "LLMs"],
    path: "cuti",
    description: {
      sections: [
        {
          contentType: "text",
          content: `Cuti.ai is an AI-powered chatting platform that scaled to over 10,000 registered users within a year. It supports AI bot conversations, image generation, and voice messaging.`,
        },
        { contentType: "image", content: "/projects/cuti.jpg" },
        {
          contentType: "text",
          content: `I built the frontend in React/Next.js with Tailwind for a clean, responsive UI. The backend runs on Node.js and integrates large language models along with text-to-speech and speech-to-text APIs. I also implemented infrastructure to handle millions of messages efficiently.`,
        },

        {
          contentType: "text",
          content: `The project received funding and grew rapidly, giving me experience in scaling systems, integrating AI services, and building user-facing applications at production scale.`,
        },

        {
          contentType: "video",
          content: `https://www.youtube.com/embed/9jxIfCoepSQ`,
        },

        {
          contentType: "text",
          content: `The project was eventually shut down in late 2023, but it gave me the opportunity to experiment, solve complex problems, and gain experience I continue to apply in my work.`,
        },
      ],
    },
    links: [
      {
        label: "Live link:",
        url: "https://cuti-acc-test.vercel.app/",
      },
    ],
  },

  {
    name: "Portrait AI Art",
    thumbnail_description: "AI Portrait Generator SaaS",
    thumbnail_image: "/projects/portrait.jpg",
    images: [],
    year: 2023,
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Tailwind",
      "Stable Diffusion",
      "LLMs",
    ],
    path: "portraitaiart",
    description: {
      sections: [
        {
          contentType: "text",
          content: `Portrait AI Art was a SaaS product I built that let users generate unique AI portraits of themselves or as a couple. The app supported 12 different styles, ranging from anime and cartoon to astronaut, wedding, and zombie.`,
        },
        { contentType: "image", content: "/projects/portrait.jpg" },
        {
          contentType: "text",
          content: `The process was simple: users uploaded 10 photos, selected their preferred style, and within an hour received 24+ AI-generated portraits. It was designed to be easy to use while offering high quality results that could be used as profile pictures or keepsakes.`,
        },
        {
          contentType: "text",
          content: `I built the frontend with React/Next.js and Tailwind for a fast and responsive UI. The backend ran on Node.js and integrated image generation pipelines using models like Stable Diffusion. I also implemented automated photo cleanup and deletion policies to ensure user privacy and security.`,
        },
        {
          contentType: "text",
          content: `The project gave me experience in building SaaS applications from scratch, integrating AI generation workflows, and handling payments and user management for a consumer-facing product.`,
        },
      ],
    },
    links: [
      {
        label: "Live link:",
        url: "https://fantasysnaps-git-main-kevins-projects-190bf2e4.vercel.app/",
      },
    ],
  },

  {
    name: "Language Learning Webapp",
    thumbnail_description: "Language learning site inspired by Duolingo",
    thumbnail_image: "/projects/thai.jpg",
    images: [],
    year: 2023,
    technologies: ["React", "Next.js", "Node.js", "Tailwind"],
    path: "languagelearning",
    description: {
      sections: [
        {
          contentType: "text",
          content: `This is a simple language learning webapp I built because I wanted to practice Thai, which wasn\"t available on Duolingo. I decided to create my own tool with a few other languages included as well (Thai, Russian, Arabic, and Vietnamese).`,
        },
        { contentType: "image", content: "/projects/thai.jpg" },
        {
          contentType: "text",
          content: `The app focuses on learning the 100 most common words in each language. It has multiple types of exercises: listening and picking the correct word from 4 options, as well as writing out the word to practice spelling and recall.`,
        },
        {
          contentType: "text",
          content: `I built the frontend with React/Next.js and Tailwind for a clean and responsive design, and a Node.js backend to handle content and exercises. Even though it\"s a small project, it was fun to build and useful for my own studies, while giving me practice in structuring interactive learning tools for the web.`,
        },
      ],
    },
    links: [
      {
        label: "Live link:",
        url: "https://thai-learn.vercel.app/",
      },
    ],
  },
];
