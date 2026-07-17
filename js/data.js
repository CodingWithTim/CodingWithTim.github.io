/**
 * Centralized site data
 * All frequently-updated content lives here for easy maintenance
 */

const SITE_META = {
    name: "Tianle Li",
    title: "Tianle Li | AI Researcher",
    description: "Tianle Li is a Member of Technical Staff at Thinking Machines Lab, leading the Auto Research team and working on reinforcement learning and post-training.",
    email: "firstlast@berkeley.edu",
    role: "Member of Technical Staff @ Thinking Machines Lab",
    image: "assets/images/head_shot.jpg",
    url: "https://codingwithtim.github.io/"
};

const SOCIAL_LINKS = [
    { name: "GitHub", url: "https://github.com/CodingWithTim" },
    { name: "Scholar", url: "https://scholar.google.com/citations?user=1M79iLwAAAAJ&hl" },
    { name: "X", url: "https://x.com/LiTianleli" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/tianleli/" }
];

const CONTRIBUTIONS = [
    {
        name: "Inkling",
        url: "https://thinkingmachines.ai/news/introducing-inkling/",
        description: "Model captain; started the reasoning team."
    },
    {
        name: "Grok 4.2",
        url: null,
        description: "Co-creator, only person running large-scale expert merging."
    },
    {
        name: "Grok 4.1",
        url: "https://x.ai/news/grok-4-1",
        description: "Co-creator, led post-training RL training and recipe studies."
    },
    {
        name: "Grok 4.1 Fast",
        url: "https://x.ai/news/grok-4-1-fast",
        description: "Co-creator, led post-training RL training and recipe studies."
    },
    {
        name: "Grok 4 Fast",
        url: "https://x.ai/news/grok-4-fast",
        description: "Co-creator, led post-training RL training and recipe studies, co-led distillation and evals."
    },
    {
        name: "Grok 4",
        url: "https://x.ai/news/grok-4",
        description: "Core contributor, synthetic datasets, evals, tool use."
    }
];
