import { ProjectData } from "./types/types";

export const PROJECTS: ProjectData[] = [
  {
    name: "Kubeverse",
    thumbnail_description:
      "AI-powered 3D multiplayer game creation platform",
    thumbnail_image: "/projects/kubeverse.jpg",
    images: [],
    year: 2026,
    technologies: [
      "TypeScript",
      "Three.js",
      "React",
      "WebSockets",
      "AI",
      "3D Generation",
      "Multiplayer",
    ],
    path: "kubeverse",
    description: {
      sections: [
        {
          contentType: "text",
          content: `Kubeverse is an AI-powered game creation platform I worked on for making 3D multiplayer games directly in the browser. The idea was to let someone go from a rough game idea to a playable shared world without needing to code everything from scratch or open a traditional 3D modeling tool.`,
        },
        { contentType: "image", content: "/projects/kubeverse.jpg" },
        {
          contentType: "text",
          content: `Instead of being one game, Kubeverse is the platform underneath many games: a place where creators can generate assets, build worlds, add mechanics, test with other players, and publish a link people can join instantly. It takes the game systems I have spent years experimenting with and turns them into tools other people can build with.`,
        },
        {
          contentType: "text",
          content: `A big part of the project is keeping the experience lightweight. Kubeverse runs on desktop and mobile in the browser, so players do not need to download anything or install a client. You can send someone a world link and they can jump in, which makes playtesting and sharing feel much closer to sending a website than shipping a game build.`,
        },
        {
          contentType: "text",
          content: `The creator side was built around speed. The goal was that someone could build, playtest, and publish in one session. Casual creators got a visual editor for placing objects, editing terrain, switching between edit mode and play mode, and wiring simple interactions together. The platform was also designed with an SDK-style path for more advanced creators who wanted deeper custom game logic.`,
        },
        {
          contentType: "text",
          content: `The thing I cared about most was that the games should actually be fun to play. A lot of UGC platforms end up producing static worlds, asset galleries, or walking simulators with generic interactions. I built Kubeverse around reusable gameplay systems, so creators could start from mechanics that already felt good instead of trying to rebuild vehicles, combat, AI, physics, and multiplayer networking on their own.`,
        },
        {
          contentType: "text",
          content: `The current engine already includes real-time WebSocket multiplayer, a world browser, FPS-style combat with weapons and inventory, explosions, physics-based driving and flight, NPC behavior, pathfinding, and procedural terrain with biome support. All of that is meant to become a shared foundation creators can reuse across very different game ideas.`,
        },
        {
          contentType: "text",
          content: `AI was used where it helped creators move faster, but the goal was never to let it replace game feel. The gameplay systems were still hand-tuned. AI helped with generating assets and the larger world-generation direction, while the vehicle handling, combat, physics, NPCs, and interaction systems were built manually so the result played well instead of only looking interesting in a screenshot.`,
        },
        {
          contentType: "text",
          content: `One of the working AI features is text-to-mesh generation. You can describe an object in plain language and get a 3D model back, then drop it straight into a world. These examples are generated objects from the platform: a house, a castle, and a snowman.`,
        },
        { contentType: "image", content: "/projects/kubeverse-house.png" },
        { contentType: "image", content: "/projects/kubeverse-castle.png" },
        { contentType: "image", content: "/projects/kubeverse-snowman.png" },
        {
          contentType: "text",
          content: `The next big step is text-to-world generation. Instead of generating a single object, the creator should be able to describe the game they want, like a parkour obstacle course or a 10v10 battlefield, and get a playable multiplayer world with the right terrain, layout, objects, and rules. That is the part of the project that connects the AI layer directly to the game engine.`,
        },
        { contentType: "image", content: "/projects/kubeverse-world-gen-before.png" },
        {
          contentType: "text",
          content: `The visual editor became a big part of the workflow. Creators could edit terrain, place objects, move and scale assets, use generated meshes or library assets, and immediately switch back into play mode to test what they had just changed. The target was a loop fast enough that building a world felt more like sketching than compiling.`,
        },
        { contentType: "image", content: "/projects/kubeverse-terrain-carve.gif" },
        { contentType: "image", content: "/projects/kubeverse-editor-placement.gif" },
        {
          contentType: "text",
          content: `There is also a visual logic layer for simple trigger-to-action behavior. That is meant for creators who want to make interactive worlds without writing code, while still leaving room for more advanced scripting later. The platform should be approachable first, but not boxed in once someone wants to build more complicated game rules.`,
        },
        {
          contentType: "text",
          content: `To prove out the platform, I also built a flagship demo game called CrookTown. It is a GTA-style multiplayer open-world game made with the same systems that creators got access to: generated cities, multiple biomes, drivable cars, flyable planes, AI traffic, pedestrians, missions, and open-world chaos.`,
        },
        { contentType: "image", content: "/projects/kubeverse-desert-flight.gif" },
        { contentType: "image", content: "/projects/kubeverse-city-drive.gif" },
        { contentType: "image", content: "/projects/kubeverse-walk-grass.gif" },
        {
          contentType: "text",
          content: `CrookTown is useful because it forces the platform to be real. If driving feels bad, if flight is boring, if NPCs are lifeless, or if multiplayer sync falls apart, that becomes obvious immediately in the demo game. Building the flagship game alongside the editor keeps the tools grounded in actual gameplay instead of becoming a nice-looking sandbox with nothing to do.`,
        },
        {
          contentType: "text",
          content: `The planned economy was cosmetics-only. Paid items were meant to stay visual instead of making players stronger or turning creator worlds into pay-to-win games. The idea was to use Koins as a cross-world currency for things like weapon skins, vehicle skins, clothing, accessories, and creator-made cosmetic items, with revenue sharing for creators who sold items in their worlds.`,
        },
        {
          contentType: "text",
          content: `I worked on Kubeverse from August 2025, and the version shown here reached a live alpha. The roadmap at that stage was to push text-to-world generation further, launch the Koins economy, expand the creator tools, and add the Creator SDK for people who wanted to write deeper custom logic.`,
        },
        {
          contentType: "text",
          content: `This was easily one of the most technically challenging things I worked on because it combined a web game engine, multiplayer infrastructure, AI generation, editor UX, publishing, and a creator economy direction into one product. A lot of the work was shaped by live feedback from Discord and X, with features tested directly against what creators were actually trying to build.`,
        },
      ],
    },
    links: [
      {
        label: "Live Alpha",
        url: "https://www.kubeverse.com/",
      },
      {
        label: "X",
        url: "https://x.com/kubeverse_",
      },
      {
        label: "Discord",
        url: "https://discord.gg/WrmQpFN5um",
      },
    ],
  },
  {
    name: "xArena",
    thumbnail_description: "A competitive 1v1 arena shooter for the web",
    thumbnail_image: "/projects/xArena.jpg",
    images: [],
    year: 2026,
    technologies: [
      "TypeScript",
      "React",
      "Vite",
      "Three.js",
      "Rapier3D",
      "WebSockets",
      "PostgreSQL",
    ],
    path: "xarena",
    description: {
      sections: [
        {
          contentType: "text",
          content: `xArena is a fast 1v1 arena shooter for the web built by a small team. It started in early May 2026 and was designed as a lightweight competitive shooter that people could try instantly in the browser, with X users as the initial go-to-market wedge.`,
        },
        { contentType: "image", content: "/projects/xArena.jpg" },
        {
          contentType: "text",
          content: `The main mode is ranked 1v1. Players queue into serious duels, climb through ranks, and gain or lose Elo based on match results. The whole game is built around short, intense matches where aim, movement, and positioning matter more than unlocks or progression systems.`,
        },
        {
          contentType: "text",
          content: `There is also a casual warmup mode where players can just jump in and shoot each other without the pressure of a ranked match. It works more like a free-for-all practice space: useful for testing weapons, warming up aim, or just messing around before playing the serious 1v1 mode.`,
        },
        {
          contentType: "text",
          content: `A big part of the product is making duels easy to share. Players can invite friends with lobby links and play direct head-to-head matches instead of always going through ranked matchmaking. That made the game feel more social and gave it a natural loop for sharing on X.`,
        },
        {
          contentType: "text",
          content: `The networking is server-authoritative, with the game server owning the important simulation state instead of trusting the client. The client and server both run class-based game runtimes, both initialize Rapier physics, and the shared package keeps protocol and config code consistent between them.`,
        },
        {
          contentType: "text",
          content: `The stack is split into a Vite/React/Tailwind/Three.js client, a Node + TypeScript WebSocket game server using ws, and shared TypeScript code for protocol and runtime constants. Postgres backs the database-driven parts of the app, including ranked history, lobbies, and replay metadata, while the game server focuses on low-latency match simulation.`,
        },
        {
          contentType: "text",
          content: `xArena also has replay support for ranked matches and lobby duels. Replays are stored in S3-compatible object storage and can be watched back later, which is useful for reviewing close fights, sharing highlights, or checking what happened in a match after the fact.`,
        },
        {
          contentType: "text",
          content: `The project already works and is playable at xArena.io. Even in its early version, it includes the core loop I wanted: join quickly, warm up, challenge a friend, play a ranked 1v1, and rewatch old matches when something interesting happens.`,
        },
      ],
    },
    links: [
      {
        label: "Play",
        url: "https://xarena.io/",
      },
    ],
  },
  {
    name: "RoomSketch",
    thumbnail_description: "A 2D floor planner with real-time 3D preview",
    thumbnail_image: "/projects/roomsketch_thumb.png",
    images: [],
    year: 2025,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Three.js",
      "React Three Fiber",
      "Tailwind",
      "Zustand",
    ],
    path: "roomsketch",
    description: {
      sections: [
        {
          contentType: "text",
          content: `RoomSketch is a small tech demo I built to explore interactive floor planning in 2D with real-time 3D visualization. It started as a simple prototype but grew into a functional planner where you can draw, resize, and edit room layouts directly in the browser.`,
        },
        { contentType: "image", content: "/projects/roomsketch2d_1.png" },
        {
          contentType: "text",
          content: `The 2D mode is written in React with SVG and Zustand for state management. Users can drag vertices, add points by double-clicking edges, and see wall lengths in real-time, all aligned to a customizable grid.`,
        },
        { contentType: "image", content: "/projects/roomsketch3d_1.png" },
        { contentType: "image", content: "/projects/roomsketch3d_2.png" },
        {
          contentType: "text",
          content: `The 3D mode uses Three.js and React Three Fiber to render walls, floor, and the full layout in real-time. Switching between 2D and 3D views is instant, letting users edit a plan and immediately preview it as a 3D model. They can also export it directly as a GLB/GLTF file.`,
        },
        {
          contentType: "text",
          content: `This project was built as a proof-of-concept but demonstrates a full stack of modern web tools for interactive design. It could easily be extended with texture mapping, AI-assisted planning, or export to CAD formats.`,
        },
      ],
    },
    links: [
      {
        label: "Demo",
        url: "https://client-demo-two.vercel.app/",
      },
    ],
  },
  {
    name: "Chatapp",
    thumbnail_description: "A real-time chat application written in Go",
    thumbnail_image: "/projects/chatapp.png",
    images: [],
    year: 2025,
    technologies: [
      "Go",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "SQLite",
      "WebSockets",
    ],
    path: "chatapp",
    description: {
      sections: [
        {
          contentType: "text",
          content: `Chatapp is a small real-time chat app I built while learning Go. I wanted to see how Go feels in practice and ended up with a working backend and frontend that talk over WebSockets.`,
        },
        { contentType: "image", content: "/projects/chatapp.png" },
        {
          contentType: "text",
          content: `The backend is written in Go and uses channels and goroutines to manage multiple clients at the same time. It handles WebSocket connections, basic JWT authentication, and saves messages into a SQLite database.`,
        },
        {
          contentType: "text",
          content: `The frontend is built with Next.js, TypeScript, and Tailwind. It connects to the Go server over WebSockets and shows live messages, user nicknames, and colors in a minimal chat interface.`,
        },
        {
          contentType: "text",
          content: `This project was mainly about me experimenting with Go. Along the way I learned how useful channels and goroutines can be for handling concurrent work, and I found out I actually enjoy writing Go.`,
        },
      ],
    },
    links: [
      {
        label: "Demo",
        url: "https://chatapp-amber-nine.vercel.app/",
      },
      {
        label: "GitHub (Frontend)",
        url: "https://github.com/Loryhoof/chatapp",
      },
      {
        label: "GitHub (Backend)",
        url: "https://github.com/Loryhoof/webserver",
      },
    ],
  },
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
          content: `Kubegame is a browser-based multiplayer sandbox game inspired by open-world titles like GTA. It\'s the biggest Three.js project I\'ve worked on so far and was my way of really diving deep into web-based 3D, multiplayer networking, and game systems.`,
        },
        { contentType: "image", content: "/projects/kube.jpg" },
        {
          contentType: "text",
          content: `The frontend is built with Three.js + TypeScript for rendering, input, and UI, while the backend runs on Node.js with Rapier3D handling server-authoritative physics. The game server runs at a 30Hz tick rate and uses prediction and reconciliation to keep controls feeling responsive while dealing with latency and desync.`,
        },
        { contentType: "image", content: "/projects/kube_2.png" },
        { contentType: "image", content: "/projects/kube_3.png" },
        { contentType: "image", content: "/projects/kube_4.png" },
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
            "I'm also currently running a YouTube devlog series on the project, where I share progress, challenges, and technical breakdowns as I continue developing the game.",
        },
      ],
    },
    links: [
      {
        label: "Demo link",
        url: "https://kubegame.com/",
      },
      {
        label: "GitHub",
        url: "https://github.com/Loryhoof/kubegame",
      },
    ],
  },
  {
    name: "CrookTown (2022)",
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
        label: "Demo link",
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
    technologies: ["TypeScript", "Three.js", "Node.js", "Rust", "WebAssembly"],
    path: "bonkers",
    description: {
      sections: [
        {
          contentType: "text",
          content: `Bonkers is a first-person survival game inspired by the game called Rust. The idea was to build a proper survival experience directly in the browser, complete with infinite terrain, resource gathering, and survival mechanics. It\'s one of the most technically challenging projects I\'ve worked on so far.`,
        },
        { contentType: "image", content: "/projects/bonkers.jpg" },
        { contentType: "image", content: "/projects/bonkers_2.jpg" },
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
    links: [
      { label: "Demo link", url: "https://bonkers-ts.vercel.app/" },
      { label: "GitHub", url: "https://github.com/Loryhoof/bonkers2/" },
    ],
  },

  {
    name: "Cuti.ai",
    thumbnail_description: "AI Chatbot platform",
    thumbnail_image: "/projects/cuti.jpg",
    images: [],
    year: 2023,
    technologies: ["React", "Next.js", "Node.js", "Tailwind", "LLMs", "Stripe"],
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
        label: "Live link",
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
      "Stripe",
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
          content: `I built the frontend with React/Next.js and Tailwind for a fast and responsive UI. The backend ran on Node.js and integrated image generation pipelines using models like Stable Diffusion. For payments, I integrated Stripe, handling subscriptions and one-time purchases securely.`,
        },
        {
          contentType: "text",
          content: `The project gave me experience in building SaaS applications from scratch, integrating AI generation workflows, payment systems, and user management for a consumer-facing product.`,
        },
      ],
    },
    links: [
      {
        label: "Live link",
        url: "https://fantasysnaps-git-main-kevins-projects-190bf2e4.vercel.app/",
      },
      { label: "GitHub", url: "https://github.com/Loryhoof/nextjs-saas" },
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
          content: `This is a simple language learning webapp I built because I wanted to practice Thai, which wasn\'t available on Duolingo. I decided to create my own tool with a few other languages included as well (Thai, Russian, Arabic, and Vietnamese).`,
        },
        { contentType: "image", content: "/projects/thai.jpg" },
        {
          contentType: "text",
          content: `The app focuses on learning the 100 most common words in each language. It has multiple types of exercises: listening and picking the correct word from 4 options, as well as writing out the word to practice spelling and recall.`,
        },
        {
          contentType: "text",
          content: `I built the frontend with React/Next.js and Tailwind for a clean and responsive design, and a Node.js backend to handle content and exercises. Even though it\'s a small project, it was fun to build and useful for my own studies, while giving me practice in structuring interactive learning tools for the web.`,
        },
      ],
    },
    links: [
      {
        label: "Live link",
        url: "https://thai-learn.vercel.app/",
      },
    ],
  },

  {
    name: "Video Transcriber",
    thumbnail_description: "YT video transcriber Node.js library",
    thumbnail_image: "/projects/transcriber.png",
    images: [],
    year: 2023,
    technologies: ["TypeScript", "Node.js"],
    path: "yt-transcribe",
    description: {
      sections: [
        {
          contentType: "text",
          content: `yt-transcribe is a small Node.js library I built to fetch and transcribe captions from YouTube videos programmatically. The goal was to make it easy for developers to pull transcripts directly into their applications without needing to deal with the raw XML YouTube provides.`,
        },
        { contentType: "image", content: "/projects/transcriber.png" },
        {
          contentType: "text",
          content: `The package uses node-fetch for HTTP requests, xmldom for parsing XML captions, and he for decoding special characters. It returns clean, ready-to-use transcript text through a simple async API.`,
        },
        {
          contentType: "text",
          content: `Its available on npm (yt-transcribe) and has been downloaded and used by other developers in their projects. Building this library gave me more experience in publishing Node.js packages, API design, and handling external data formats.`,
        },
      ],
    },
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Loryhoof/yt-transcribe",
      },
      {
        label: "npm Package",
        url: "https://www.npmjs.com/package/yt-transcribe",
      },
    ],
  },

  {
    name: "Portfolio Website",
    thumbnail_description: "A Next.js portfolio website",
    thumbnail_image: "/projects/portfolio.png",
    images: [],
    year: 2025,
    technologies: ["TypeScript", "Next.js", "React", "Tailwind"],
    path: "portfolio",
    description: {
      sections: [
        {
          contentType: "text",
          content: `This is the personal portfolio website I built to showcase my projects, skills, and experience. It\'s designed to be simple, fast, and easy to navigate, while still being visually appealing.`,
        },
        { contentType: "image", content: "/projects/portfolio.png" },
        {
          contentType: "text",
          content: `The site is built with Next.js and TypeScript, with Tailwind used for styling and responsive design. It features dynamic project pages, reusable components, and a clean layout optimized for both desktop and mobile.`,
        },
        {
          contentType: "text",
          content: `Building this portfolio gave me a chance to refine my frontend workflow, practice modern React patterns, and organize my work into a professional presentation for clients and employers.`,
        },
      ],
    },
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Loryhoof/portfolio",
      },
    ],
  },
];
