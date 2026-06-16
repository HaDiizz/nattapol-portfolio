export const experience = [
  {
    id: "inet",
    company: "Internet Thailand Public Company Limited",
    shortName: "INET",
    role: "Software Engineer",
    period: "Jun 2024 – Present",
    type: "fulltime",
    description: "Contributing to government and healthcare identity platforms at scale — covering API management, digital signatures, OAuth 2.0/OIDC, and multi-service verification systems.",
    projects: [
      {
        name: "Provider ID",
        desc: "Designed and implemented multiple web applications for medical personnel identification, patient health record (PHR) management and census information. Developed key functionalities, including admin dashboards, admin management, digital signature integration using digital certificates and implemented the OAuth 2.0 system for the Provider ID.",
        tags: ["Vue 3", "Vuetify", "Express"],
        url: "https://provider.id.th/",
      },
      {
        name: "Moph API Mx",
        desc: "Designed and enhanced an API request management platform used for Health ID and Provider ID services. Built administrative dashboards, error monitoring, document handling, and system configuration features across frontend and backend. Improved system usability and branding, including UI refinements and platform assets.",
        tags: ["Angular", "NG-ZORRO", "Go"],
        url: "https://moph-api-mx.id.th/",
      },
      {
        name: "DTAM ID",
        desc: "Set up project architecture and frontend structure for a service provider registration platform. Implemented onboarding and registration features for traditional massage service providers.",
        tags: ["Angular", "NG-ZORRO", "Go"],
        url: "https://dtam.id.th/",
      },
      {
        name: "Driver Verify",
        desc: "Developed a driver identity verification platform with registration and profile management workflows. Implemented OTP-based authentication and improved password recovery and consent management features. Enhanced overall user experience and security for the verification process.",
        tags: ["OTP Auth", "User Management"],
      },
      {
        name: "E-Contract",
        desc: "Developed a digital contract management system supporting both B2B and B2C workflows. Implemented user profile management, contract tracking, and digital signature features. Built interfaces for contract status monitoring and system usage information.",
        tags: ["E-Signature", "B2B", "B2C"],
      },
      {
        name: "ID Connect",
        desc: "Designed and developed an identity federation and service management platform for organizations and business entities. Integrated multiple identity providers (IdPs) such as ThaID, SAML-based providers, Microsoft Azure AD, LINE, ONE ID, and MOPH DID. Enhanced security and interoperability for enterprise authentication and single sign-on (SSO) services.",
        tags: ["OIDC", "SAML", "SSO", "Azure AD"],
      },
      {
        name: "One Authorized",
        desc: "Designed and developed a centralized identity verification and onboarding platform for services integrated with the ONE ID ecosystem. Built user onboarding and account linking mechanisms for users without existing ONE ID accounts. Integrated with User Management (UM) systems to provision and synchronize user information.",
        tags: ["ONE ID", "Identity Federation", "User Management"],
      },
    ],
  },
  {
    id: "tong-a-travel",
    company: "Tong A Travel Company Limited",
    shortName: "Tong A Travel",
    role: "Software Engineer (Freelance)",
    period: "Oct 2025 – Dec 2025",
    type: "freelance",
    description: "Designed and deployed a full backend for a multi-role travel booking and referral platform.",
    projects: [
      {
        name: "Tong A Travel Platform",
        desc: "Designed and implemented backend APIs for a travel booking and referral platform supporting four roles: admin, partner, driver, and tourist. Built core systems including booking management, referral tracking, payouts, accounting, and automated receipt generation. Integrated Stripe, PromptPay, Google Pay, Apple Pay. Deployed on DigitalOcean App Platform with monitoring via Sentry and Cloudflare Workers.",
        tags: ["Next.js", "Shadcn UI", "Hono", "PostgreSQL", "Redis", "Sentry", "DigitalOcean", "Cloudflare Workers", "Omise", "Stripe"],
        url: "https://tongatravel.app/en",
      },
    ],
  },
  {
    id: "grand-player",
    company: "Grand Player Studio Company Limited",
    shortName: "Grand Player Studio",
    role: "Frontend Developer (Freelance)",
    period: "Nov 2024 – Dec 2024",
    type: "freelance",
    description: "Built a school management system frontend from Figma designs.",
    projects: [
      {
        name: "Satit YRU School Management System",
        desc: "Classroom, student, course, and material management modules. Server-side pagination with TanStack Table. Type-safe validation with React Hook Form + Zod. Authentication via NextAuth.",
        tags: ["Next.js", "Tailwind CSS", "Shadcn UI", "TanStack Table", "Zod"],
      },
    ],
  },
  {
    id: "sky-ict",
    company: "SKY ICT Public Company Limited",
    shortName: "SKY ICT",
    role: "Software Engineer Intern",
    period: "Apr 2023 – Jun 2023",
    type: "internship",
    description: "Full-stack development and automated testing across CMS and translation platforms.",
    projects: [
      {
        name: "AOT CMS Portal",
        desc: "Develop Front-end using ReactJS, NextJS. Develop Web Service (Microservice) using ExpressJS, GraphQL, gRPC, Protobuf.",
        tags: ["React", "Next.js", "GraphQL", "gRPC"],
      },
      {
        name: "Sawasdee Translate",
        desc: "Develop Front-end using ReactJS. Conducted comprehensive unit testing using Jest for code functionality and enhanced code quality.",
        tags: ["React", "Jest"],
      },
      {
        name: "PLANB CMS",
        desc: "Automated testing processes using Robot Framework.",
        tags: ["Robot Framework"],
      },
    ],
  },
] as const;
