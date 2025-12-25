export const portfolioData = {
    personalInfo: {
        name: "Sanket Chavan",
        role: "Backend / Cloud Engineer",
        summary: "Backend Engineer with 3.6 years of experience building scalable, cloud-native systems using Node.js, TypeScript, AWS, and Azure. Specialized in designing secure APIs, cloud architectures, and integrating AI-driven solutions using CopilotKit and LangGraph.",
        email: "sanketjc2000@gmail.com",
        linkedin: "https://www.linkedin.com/in/sanket-chavan-518a8914a/",
        location: "Pune, India",
        availability: "Available to join within 15 days",
        resumeLink: "/Sanket_Chavan_cv__Copy_.pdf"
    },
    skills: {
        backend: ["Node.js", "Express.js", "Nest.js", "TypeScript", "JavaScript", "GraphQL", "REST APIs", "WebSockets"],
        cloud: ["AWS (Lambda, S3, DynamoDB, SES)", "Azure (Functions, Cosmos DB, ADLS)"],
        database: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "Cosmos DB"],
        orm: ["TypeORM", "Sequelize"],
        ai: ["CopilotKit", "LangGraph", "OpenAI API"],
        tools: ["Git", "Swagger", "Postman", "CI/CD", "Jest"]
    },
    experience: [
        {
            id: 1,
            role: "Consultant",
            company: "Emergys Solutions",
            duration: "Apr 2024 – Present",
            description: "Building backend services for supplier research and AI-driven workflows.",
            achievements: [
                "Built backend for global supplier research and implemented RFP/RFQ workflows.",
                "Developed REST APIs using Express.js for dashboards and analytics.",
                "Implemented RBAC and authentication systems.",
                "Integrated Datamyne API for global supplier intelligence.",
                "Built AI chatbot using CopilotKit & LangGraph.",
                "Developed Azure Functions and Cosmos DB aggregations."
            ]
        },
        {
            id: 2,
            role: "Software Engineer",
            company: "Coditas Technologies",
            duration: "Jul 2022 – Apr 2024",
            description: "Developed scalable backend services for Talent Acquisition and Healthcare domains.",
            achievements: [
                "Built scalable backend services with Node.js & Nest.js.",
                "Implemented OAuth2 & JWT authentication systems.",
                "Integrated WebSockets & WhatsApp APIs regarding real-time messaging.",
                "Built AWS Lambda-based serverless APIs.",
                "Used GraphQL to optimize frontend-backend communication."
            ]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Global Supplier Intelligence Platform",
            description: "Backend platform enabling global supplier discovery, RFP/RFQ workflows, and AI-powered research using Datamyne and CopilotKit.",
            techStack: ["Node.js", "Express", "Azure", "Cosmos DB", "CopilotKit"],
            link: "#"
        },
        {
            id: 2,
            title: "Talent Acquisition Messaging Platform",
            description: "Real-time messaging system using WhatsApp APIs and WebSockets to streamline recruiter-candidate communication.",
            techStack: ["Node.js", "Nest.js", "WebSockets", "AWS", "WhatsApp API"],
            link: "#"
        }
    ]
};
