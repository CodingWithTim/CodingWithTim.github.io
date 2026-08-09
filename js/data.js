/**
 * Centralized site data
 * All frequently-updated content lives here for easy maintenance
 */

const SITE_META = {
    name: "Tianle Li",
    title: "Tianle Li | AI Researcher",
    description: "Tianle Li is a Member of Technical Staff at Thinking Machines Lab and model release DRI for Inkling and Inkling-Small.",
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
        name: "Inkling-Small",
        url: "https://thinkingmachines.ai/news/inkling-small/",
        description: "Model release DRI, led post-training integration, ran agent RL bigrun."
    },
    {
        name: "Inkling",
        url: "https://thinkingmachines.ai/news/introducing-inkling/",
        description: "Model release DRI, led post-training model integration."
    },
    {
        name: "Grok 4.2",
        url: null,
        description: "Co-creator, led post-training model integration (on very little sleep)."
    },
    {
        name: "Grok 4.1",
        url: "https://x.ai/news/grok-4-1",
        description: "Co-creator, led post-training RL mainline and recipe studies."
    },
    {
        name: "Grok 4.1 Fast",
        url: "https://x.ai/news/grok-4-1-fast",
        description: "Co-creator, led post-training RL mainline and recipe studies."
    },
    {
        name: "Grok 4 Fast",
        url: "https://x.ai/news/grok-4-fast",
        description: "Co-creator, led rebuild of post-training RL stack and recipes from scratch; co-led distillation and evals."
    },
    {
        name: "Grok 4",
        url: "https://x.ai/news/grok-4",
        description: "Core contributor, synthetic datasets, evals, tool use."
    }
];
