import devtoolkitLightImg from '../assets/projects/devtoolkit-light.png';
import devtoolkitDarkImg from '../assets/projects/devtoolkit-dark.png';
import isearchLightImg from '../assets/projects/isearch-light.png';
import isearchDarkImg from '../assets/projects/isearch-dark.png';
import woopifyLightImg from '../assets/projects/woopify-light.png';
import woopifyDarkImg from '../assets/projects/woopify-dark.png';

export const sideProjects = [
  {
    id: 'next-devtoolkit',
    name: 'Next Dev Toolkit',
    tagline: 'A curated toolkit for Next.js developers',
    description:
      'A utility hub for Next.js developers — code snippets, config templates, and workflow tools to accelerate development.',
    url: 'https://next-devtoolkit.vercel.app/',
    github: 'https://github.com/HaDiizz/next-devtoolkit',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    status: 'live',
    image: {
      light: devtoolkitLightImg,
      dark: devtoolkitDarkImg,
    },
  },
  {
    id: 'woopify',
    name: 'Woopify',
    tagline: 'Real-time communication platform',
    description:
      'A real-time web application featuring websockets, PWA capabilities, and scalable infrastructure.',
    url: 'https://woopify.vercel.app/',
    github: null,
    tags: [
      'Next.js',
      'Tailwind CSS',
      'Shadcn UI',
      'TypeScript',
      'Express',
      'Socket.io',
      'PWA',
      'Cloudflare Workers',
      'MongoDB',
    ],
    status: 'live',
    image: {
      light: woopifyLightImg,
      dark: woopifyDarkImg,
    },
  },
  {
    id: 'isearch',
    name: 'iSearch',
    tagline: 'RAG-powered intelligent search',
    description:
      'A Retrieval-Augmented Generation (RAG) search platform with team collaboration, user profiles, and document management. Built with vector embeddings and LLM integration.',
    url: null,
    github: null,
    tags: [
      'Next.js',
      'Tailwind CSS',
      'Shadcn UI',
      'TypeScript',
      'FastAPI',
      'Llama CPP',
      'PostgreSQL',
      'RAG',
      'Magic UI',
      'Redis',
    ],
    status: 'private',
    features: [
      'Team workspaces',
      'User profiles',
      'Document ingestion',
      'Semantic search',
    ],
    image: {
      light: isearchLightImg,
      dark: isearchDarkImg,
    },
  },
] as const;
