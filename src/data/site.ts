/* Content for the Vantora Media site — all copy and assets are vendored locally. */

export const site = {
  name: "Vantora Media",
  email: "hello@vantora.media",
  year: 2026,
  linkedin: "https://www.linkedin.com/company/vantoramedia",
  x: "https://x.com/vantoramedia",
  youtube: "https://www.youtube.com/@vantoramedia",
};

export const img = {
  logo: "/assets/img/vantora-logo.svg",
  glowLine: "/assets/img/69b3c09dbeaa096a8e40ae7d_test-glow.webp",
  heroVideoPoster: "/assets/img/showreel-poster.png",
  watchThumb: "/assets/img/watch-process-thumb.png",
  heroLeft: "/assets/img/69cc0f450865128bd25f083e_Left-1-.avif",
  heroRight: "/assets/img/69cc0f45d4ffae949a1f11e5_Right-1-.avif",
  stars: "/assets/img/69b1a8788b56eda2ab139530_Star-Ratings.svg",
  play: "/assets/img/6a14934d6096f372baa1c0af_Play.svg",
  arrowUpRight: "/assets/img/67970745c860818130bc7fd6_Arrow_Up_Right.svg",
  proofImage: "/assets/img/69b1a8788b56eda2ab139527_Proof-Image.webp",
  coolContainer: "/assets/img/69b1a8788b56eda2ab139540_Cool-Container-.svg",
  frameworkCard: "/assets/img/69b30204da3577d95546c36d_card.webp",
  frameworkDivider: "/assets/img/69b1a8788b56eda2ab139546_Framework-Divider-1-.svg",
  pricingTop: "/assets/img/69c602027d40f34c3a1e52e7_Pricing-Top-BG.webp",
  pricingBottom: "/assets/img/69c60208d74412b625ffc7f2_Pricine-Bottom-BG.webp",
  eye: "/assets/img/6a14b8f075431d1288351a9b_eye01.svg",
  eye2: "/assets/img/6a14b8f14631e4eeec0fb38d_eye02.svg",
  fire: "/assets/img/6a14b8f15de117399a05714b_icon-fire02.svg",
  fire2: "/assets/img/6a14b8f0e584fddf4cbcc23c_icon-fire01.svg",
  castari: "/assets/img/69c627907a1bd8145a2e0d83_castari-1.webp",
  wade: "/assets/img/69c625d952b5a0e25ebd1139_Frame-2147259433.png",
  dot: "/assets/img/69c625d9379b40a8731bd1c4_Dot.svg",
  hoverDot: "/assets/img/69c551cda45a690a1b9de701_Hover-Efefct.webp",
  footerLeft: "/assets/img/69c58b179aa9c14789ab3a2c_Footer-Left.webp",
  footerRight: "/assets/img/69c58b17e5d54e93c1d38c3a_Footer-Right.webp",
};

export const trustedLogos = [
  "/assets/img/6a106d58ef22af0603d9f3b8_TRUSTED-03.svg",
  "/assets/img/6a106e1e7a2167068dd40a73_TRUSTED-04.svg",
  "/assets/img/6a106e49fb7226af4a1886f2_TRUSTED-01.svg",
  "/assets/img/6a106d589464e6f4190e7412_TRUSTED-05.svg",
  "/assets/img/6a106d58d795c96d9d22a0e2_TRUSTED-02.svg",
];

export const creatorLogos = [
  "/assets/img/69b44344fc3d7cfa95bfc086_Logo.webp",
  "/assets/img/6a1070531560ab207093956a_CREATOR-02.svg",
  "/assets/img/69b3014d2f190df05d77e19e_Property-1-Logo08.svg",
  "/assets/img/6a10705475714d680e1334d1_CREATOR-01.svg",
];

export const ycLogo = "/assets/img/6a106a75012f11dc8aa6d9ab_Y_Combinator_logo.svg-1.svg";

export const heroBrandLogos = [
  "/assets/img/69b4466162822a22fa60c25b_Logo.svg",
  "/assets/img/69b44661aa9e0e5d2ffc0589_Logo-1-.svg",
  "/assets/img/69b44660ff42cfce943c3509_Logo-2-.svg",
  "/assets/img/69b44661ac3d31be5476ed85_Logo-3-.svg",
  "/assets/img/69b446616aed580925cf5719_Logo-4-.svg",
];

export const ratingAvatars = [
  "/assets/img/6a107bd320d1bc1b9a0555c4_Chris-Click-Up-.avif",
  "/assets/img/6a107c0111bdc755bb679e5d_Sean.avif",
  "/assets/img/6a107c4f28e094b24f3a0ec0_Nikhil.avif",
  "/assets/img/6a107c8bf1760d7779ba37e5_Milind-Sagaram.avif",
];

export type ProofCard = {
  quote: string;
  highlight?: string;
  name: string;
  role: string;
  avatar: string;
  logo: string;
  url?: string;
};

export const proofSlider: ProofCard[] = [
  {
    quote: "“The fastest ‘yes’ we’ve ever seen from prospects.”",
    highlight: "The fastest ‘yes’",
    name: "James Barker",
    role: "GMT",
    avatar: img.proofImage,
    logo: "/assets/img/69b443442dc48290740161d0_Logo-3-.webp",
  },
  {
    quote: "They turned complexity into clarity fast.",
    highlight: "complexity into clarity fast.",
    name: "James Barker",
    role: "GMT",
    avatar: img.proofImage,
    logo: "/assets/img/69b443338bd388ddc50de099_c1387f7cdd69fa3c0dae0a7458ec37797c1cb2b4.webp",
  },
  {
    quote: "Vantora Media was too fast and efficient.",
    highlight: "too fast and efficient",
    name: "James Barker",
    role: "GMT",
    avatar: img.proofImage,
    logo: "/assets/img/69b44344fc3d7cfa95bfc086_Logo.webp",
  },
  {
    quote: "“The fastest ‘yes’ we’ve ever seen from prospects.”",
    highlight: "The fastest ‘yes’",
    name: "James Barker",
    role: "GMT",
    avatar: img.proofImage,
    logo: "/assets/img/69b443442dc48290740161d0_Logo-3-.webp",
  },
  {
    quote: "“The fastest ‘yes’ we’ve ever seen from prospects.”",
    highlight: "The fastest ‘yes’",
    name: "James Barker",
    role: "GMT",
    avatar: img.proofImage,
    logo: "/assets/img/69b44344fc3d7cfa95bfc086_Logo.webp",
  },
];

export const proofMarquee: ProofCard[] = [
  {
    quote: "Honestly the first video team that didn't make me chase them for updates.",
    name: "Chris Cunningham",
    role: "Clickup",
    avatar: "/assets/img/6a13576454c6f93a1bf30c8a_Chris.jpg",
    logo: "/assets/img/69b44344fc3d7cfa95bfc086_Logo.webp",
  },
  {
    quote: "Felt like we hired in-house, not an agency. Big difference.",
    name: "Sean Dorje",
    role: "Naiive",
    avatar: "/assets/img/6a107c0111bdc755bb679e5d_Sean.avif",
    logo: "/assets/img/6a107c2ce79dab8556896d37_usenaive_logo.avif",
  },
  {
    quote: "Top-tier work, delivered faster than anyone else we've tried.",
    name: "Nikhil Reddy",
    role: "Datoric",
    avatar: "/assets/img/6a107c4f28e094b24f3a0ec0_Nikhil.avif",
    logo: "/assets/img/6a107c69e46eb08f361e7e83_datoric_ai_logo.avif",
  },
  {
    quote: "We've tried a bunch of video teams. None come close to them.",
    name: "Amogh Chaturvedi",
    role: "Human Behaviour",
    avatar: "/assets/img/6a136ad61d9ac9bc9d9d2cde_1779290777215.png",
    logo: "/assets/img/69b3014d9fa39babb99449c6_Property-1-Logo12.svg",
  },
  {
    quote: "Sent them a rough idea. They came back with something we couldn't have imagined.",
    name: "Milind Sagaram",
    role: "Helonic",
    avatar: "/assets/img/6a107c8bf1760d7779ba37e5_Milind-Sagaram.avif",
    logo: "/assets/img/6a107c9cd0aa76483a8a4252_usearticulate_logo.avif",
  },
  {
    quote: "Sent them a rough idea. They came back with something we couldn't have imagined.",
    name: "Thibault Garcia",
    role: "Reachly",
    avatar: "/assets/img/6a107db7c55360ee303c8223_Thibault.avif",
    logo: "/assets/img/6a107deba1e5b1b8c67afff0_Reachly-.avif",
  },
];

export type Step = {
  title: string;
  body: string;
  video: string;
  webm: string;
};

export const steps: Step[] = [
  {
    title: "Hook",
    body: "The first 3 seconds decide whether your audience keeps watching. We start with a hook that makes them watch the whole thing.",
    video: "/assets/video/hook.mp4",
    webm: "/assets/video/hook.webm",
  },
  {
    title: "Story",
    body: "We make videos people finish watching, because we keep them clear, and interesting from start to end.",
    video: "/assets/video/story.mp4",
    webm: "/assets/video/story.webm",
  },
  {
    title: "Conversion",
    body: "By the time your video finishes, your customer is ready to move. They either book a call, start a free trial, or forward the video to the person who calls the final shots.",
    video: "/assets/video/conversion-a.mp4",
    webm: "/assets/video/conversion-a.webm",
  },
];

export type WorkCard = {
  video: string;
  image: string;
  title: string;
  desc: string;
};

export type WorkTab = { name: string; cards: WorkCard[] };

export const workTabs: WorkTab[] = [
  {
    name: "Product Release",
    cards: [
      {
        video: "1184345377",
        image: "/assets/img/6a14d9d6d158a10503f47ab9_Screenshot-2026-05-26-052248.avif",
        title: "Human Behavior",
        desc: "A YC-backed AI platform that decodes user behavior from session replays.",
      },
      {
        video: "1123007106",
        image: "/assets/img/6a14714fc668d42f953ebaf7_Screenshot-2026-05-25-215646.avif",
        title: "ClickUp",
        desc: "The world's #1 work platform that replaces every productivity tool teams use.",
      },
      {
        video: "1189733303",
        image: "/assets/img/6a1470d47bca22a641a7a015_Screenshot-2026-05-25-215450.avif",
        title: "Lumana",
        desc: "Enterprise AI video security platform powered by computer vision.",
      },
      {
        video: "1189506795",
        image: "/assets/img/6a14706dfb58a4b4c9b72a5d_Screenshot-2026-05-25-215307.avif",
        title: "Salesgraph",
        desc: "AI sales intelligence platform that gives reps full deal context before every call.",
      },
      {
        video: "1189504062",
        image: "/assets/img/6a146ff9f1f0ea4aa32bc6b8_Screenshot-2026-05-25-215108.avif",
        title: "Atria",
        desc: "AI platform that builds high-performing Meta and TikTok ads.",
      },
      {
        video: "1162189128",
        image: "/assets/img/6a146f456cb8cd0238acbc43_Screenshot-2026-05-25-214801.avif",
        title: "ClickUp",
        desc: "World's first AI-native work platform that replaces every other tool teams use.",
      },
    ],
  },
  {
    name: "Launch Video",
    cards: [
      {
        video: "1134564183",
        image: "/assets/img/6a125d04bb084731fedab952_thumb.avif",
        title: "Lexi",
        desc: "Autonomous AI agent that handles legal workflows end-to-end.",
      },
      {
        video: "1188700841",
        image: "/assets/img/6a125dcb418a4b94fd75f0ff_thumb-3-.avif",
        title: "Gov Guard",
        desc: "YC-backed AI that helps city clerks process public records requests 20x faster.",
      },
      {
        video: "1188693356",
        image: "/assets/img/6a125d9377f832e5f99848a1_thumb-2-.avif",
        title: "Bolto",
        desc: "YC-backed AI-native platform that unifies recruiting, payroll, and HR into one system.",
      },
      {
        video: "1184803346",
        image: "/assets/img/6a125cc9577aa0229b0865c9_thumb-1-.avif",
        title: "Phonely",
        desc: "YC-backed AI voice agent that answers business calls like a real human.",
      },
      {
        video: "1177960000",
        image: "/assets/img/6a125def14e1a7f4f5050397_thumb-4-.avif",
        title: "Verdex",
        desc: "AI platform that automates legal document workflows for law firms.",
      },
      {
        video: "1177981012",
        image: "/assets/img/6a1391bd1a9da04ec8acfdf5_thumb-12-.jpg",
        title: "SEOClaw",
        desc: "AI agent that gets your brand recommended on ChatGPT, Perplexity, and Google AI search.",
      },
    ],
  },
  {
    name: "In-Person Demo",
    cards: [
      {
        video: "1188693356",
        image: "/assets/img/6a125d9377f832e5f99848a1_thumb-2-.avif",
        title: "Bolto",
        desc: "YC-backed AI-native platform that unifies recruiting, payroll, and HR into one system.",
      },
      {
        video: "1195273097",
        image: "/assets/img/6a1471b7fd5c50cb6eacc78e_Screenshot-2026-05-25-215835.avif",
        title: "ClickUp",
        desc: "The world's #1 work platform that replaces every productivity tool teams use.",
      },
      {
        video: "1189504062",
        image: "/assets/img/6a1262827ade44bc3b696905_thumb-10-.avif",
        title: "Atria",
        desc: "AI platform that builds high-performing Meta and TikTok ads.",
      },
      {
        video: "1165013512",
        image: "/assets/img/6a1262ba7ade44bc3b696c7a_thumb-11-.avif",
        title: "Relixir",
        desc: "AI platform that ranks SaaS brands on ChatGPT and Perplexity.",
      },
      {
        video: "1163312026",
        image: "/assets/img/6a1398138cb72c54823115dd_thumb-13-.jpg",
        title: "Reachly",
        desc: "AI WhatsApp sales follow-up app for B2B sales teams.",
      },
      {
        video: "1165015242",
        image: "/assets/img/6a1398d66a7695c7cb561809_thumb-14-.jpg",
        title: "iClosed",
        desc: "The Calendly alternative built for closers that captures, qualifies, and routes leads automatically.",
      },
    ],
  },
  {
    name: "Others",
    cards: [
      {
        video: "1149146503",
        image: "/assets/img/6a1474eb8449f9cfc237db0d_Screenshot-2026-05-25-221212.avif",
        title: "Relixir",
        desc: "AI platform that ranks SaaS brands on ChatGPT and Perplexity.",
      },
      {
        video: "1189504066",
        image: "/assets/img/6a1473eb0963ea422d58948f_Screenshot-2026-05-25-220757.avif",
        title: "Mutiny",
        desc: "YC-backed AI platform that turns B2B websites into personalized experiences at scale.",
      },
      {
        video: "1195273097",
        image: "/assets/img/6a1471b7fd5c50cb6eacc78e_Screenshot-2026-05-25-215835.avif",
        title: "ClickUp",
        desc: "The world's #1 work platform that replaces every productivity tool teams use.",
      },
      {
        video: "1123017471",
        image: "/assets/img/6a147a373a4a89a9651e65a6_Screenshot-2026-05-25-223451.avif",
        title: "UX Pilot",
        desc: "AI design tool that generates wireframes and full UI screens in seconds.",
      },
      {
        video: "1195209392",
        image: "/assets/img/6a1479f2c90a7fff31df693d_Screenshot-2026-05-25-223326.avif",
        title: "Markopolo AI",
        desc: "Agent-led marketing platform for ecommerce and D2C brands.",
      },
      {
        video: "1195215358",
        image: "/assets/img/6a1470d47bca22a641a7a015_Screenshot-2026-05-25-215450.avif",
        title: "Lumana",
        desc: "Smart video security that turns any camera into a real-time intelligence layer.",
      },
    ],
  },
];

export const tweets = [
  {
    image: "/assets/img/6a120447fc3c68b362e3b70b_img-02-.avif",
    width: 1080,
    height: 1267,
    url: "https://x.com/DJ_CURFEW/status/2003160095652200822/video/1",
    label: "ClickUp post on X",
  },
  {
    image: "/assets/img/6a120446d8836e4acad4f7fc_img-06-.avif",
    width: 1080,
    height: 1069,
    url: "https://www.linkedin.com/posts/govguard-is-automating-government-workflows-ugcPost-7452786351428620288-Ie3y/",
    label: "GovGuard post on LinkedIn",
  },
  {
    image: "/assets/img/6a1204478a46ed51240f5afc_img-01-.avif",
    width: 1080,
    height: 1267,
    url: "https://x.com/DJ_CURFEW/status/2015830939956388046/video/1",
    label: "ClickUp post on X",
  },
  {
    image: "/assets/img/6a120447fc3c68b362e3b6cd_img-04-.avif",
    width: 1080,
    height: 1019,
    url: "https://www.linkedin.com/company/phonely-ai/posts/?feedView=all",
    label: "Phonely post on LinkedIn",
  },
  {
    image: "/assets/img/6a120447117bd9c5fdd57715_img-03-.avif",
    width: 1080,
    height: 1267,
    url: "https://x.com/ycombinator/status/1921626361997000783?s=20",
    label: "Y Combinator post on X",
  },
  {
    image: "/assets/img/6a1204479108cc68c1a2b310_img-05-.avif",
    width: 1080,
    height: 1025,
    url: "https://www.linkedin.com/posts/verdex-yc-w26-is-replacing-physical-inspections-ugcPost-7433215263640293378-u0Aa/",
    label: "Verdex post on LinkedIn",
  },
];

export const framework = [
  {
    no: "01",
    title: "Strategy",
    desc: "Before we open the edit, we figure out what the video needs to do, who it needs to convince, and what action you want your buyer to take by the end.",
  },
  {
    no: "02",
    title: "Build",
    desc: "Every edit is made to move your customer one step closer to taking action. Nothing in the video is filler or there just to look good.",
  },
  {
    no: "03",
    title: "Launch",
    desc: "You get the final cut in two weeks, ready to go live across your website, paid ads, and outbound the moment it lands in your inbox.",
  },
];

export type PricingPlan = {
  name: string;
  tag: string;
  price: string;
  oldPrice?: string;
  save?: string;
  cta: string;
  slots: string;
  slotsLeft: string;
  badge: string;
  badgeTone: "warm" | "cool";
  desc: string;
  features: string[];
  duration: string;
  timeline: string;
  highlight?: boolean;
};

export const pricing: PricingPlan[] = [
  {
    name: "One off video",
    tag: "Best for pre-seed and founder-led launches",
    price: "$3,999",
    cta: "Get your one-off",
    slots: "6/10",
    slotsLeft: "Slots Left this month",
    badge: "One polished video",
    badgeTone: "warm",
    desc: "Perfect for a homepage hero, a Product Hunt launch, or a YC application.",
    features: [
      "1x elite product video",
      "Scripting + Storyboard",
      "Creative + visual direction",
      "2 revision passes included",
      "Fast feedback loops via slack",
    ],
    duration: "30-50 seconds",
    timeline: "7-10 days",
  },
  {
    name: "3 - Video Bundle",
    tag: "Best for YC-backed and Series A SaaS",
    price: "$9,995",
    oldPrice: "$11,997",
    save: "SAVE $2,002",
    cta: "Hop on a Quick call !!!",
    slots: "3/10",
    slotsLeft: "Slots Left this month",
    badge: "3 videos in 2 weeks or less",
    badgeTone: "cool",
    desc: "Plus the cutdowns, hook variants and priority delivery that paid-ad and outbound teams actually use.",
    features: [
      "3x elite product videos",
      "Dedicated bandwidth",
      "Adaptive timelines",
      "Scripting + storyboard",
      "Creative + visual direction",
      "2 revision passes included",
      "Fast feedback loops via slack",
    ],
    duration: "30-50 seconds",
    timeline: "12-21 days",
    highlight: true,
  },
];

export const pricingReview = {
  quote: "“Prompt delivery and top-notch quality. Impressed with the speed and accuracy.”",
  name: "Wade Warren",
  role: "Founder of castari",
};

export const processSteps = [
  {
    no: "01",
    title: "Questionnaire",
    desc: "You fill out a short form that takes about ten minutes, and from your answers we learn what your product does, who buys it, and why anyone should care.",
    image: "/assets/img/69c58ed05b13484d9bc720a7_Step-1.webp",
    width: 426,
    height: 431,
  },
  {
    no: "02",
    title: "Story boarding",
    desc: "Before we start animating anything, you see exactly what the video will say and how every frame will look, and once you give your notes we lock the whole thing in.",
    image: "/assets/img/69c58ed08d93a0e09a246dfd_Step-2.webp",
    width: 426,
    height: 426,
  },
  {
    no: "03",
    title: "Final Animation",
    desc: "Custom animation, illustrations, sound design, and voiceover all come from the same in-house team, working on your project from the first day to the last.",
    image: "/assets/img/69c58ed13678a4075a9e0a6a_Step-3.webp",
    width: 426,
    height: 426,
  },
  {
    no: "04",
    title: "Delivery",
    desc: "You get the variations for every platform you post on, usually within 2 weeks from kickoff.",
    image: "/assets/img/69c58ed08d52560a6f42f27a_Step-4.webp",
    width: 426,
    height: 426,
  },
];

export type ShowcaseItem = { video: string; image: string; logo: string };

export const showcase: ShowcaseItem[] = [
  {
    video: "1163307935",
    image: "/assets/img/6a137924117bd9c5fd09aefc_Screenshot-2026-05-25-041744.png",
    logo: "/assets/img/6a1414c8c62e80f0d13acd7d_lexi-.png",
  },
  {
    video: "1123007106",
    image: "/assets/img/6a14e3308fd979fc619528c7_Screenshot-2026-05-26-060236.avif",
    logo: "/assets/img/6a169044d28d076e04b93e26_brain.png",
  },
  {
    video: "1189506795",
    image: "/assets/img/6a14714fc668d42f953ebaf7_Screenshot-2026-05-25-215646.avif",
    logo: "/assets/img/6a1416c95f224ee69da56a14_ClickUp-white.png",
  },
  {
    video: "1189504062",
    image: "/assets/img/6a14706dfb58a4b4c9b72a5d_Screenshot-2026-05-25-215307.avif",
    logo: "/assets/img/6a14173ba9a9c179a951113f_Salesgraph-white.png",
  },
  {
    video: "1163307935",
    image: "/assets/img/6a146ff9f1f0ea4aa32bc6b8_Screenshot-2026-05-25-215108.avif",
    logo: "/assets/img/6a14eb886c07459cacec660f_Atria.png",
  },
  {
    video: "1189733303",
    image: "/assets/img/6a13818cc0836e85220266fe_Screenshot-2026-05-25-045346.png",
    logo: "/assets/img/6a169044d28d076e04b93e26_brain.png",
  },
  {
    video: "1123007106",
    image: "/assets/img/6a13838ed8dcbbe12c173d2b_Screenshot-2026-05-25-050212.png",
    logo: "/assets/img/6a1415b8f6b4f6ac126737a3_Lumana-.png",
  },
  {
    video: "1134564183",
    image: "/assets/img/6a138112577aa0229b33b180_Screenshot-2026-05-25-045146.png",
    logo: "/assets/img/6a1416c95f224ee69da56a14_ClickUp-white.png",
  },
  {
    video: "1189733303",
    image: "/assets/img/6a137924117bd9c5fd09aefc_Screenshot-2026-05-25-041744.png",
    logo: "/assets/img/6a1414c8c62e80f0d13acd7d_lexi-.png",
  },
  {
    video: "1123007106",
    image: "/assets/img/6a13838ed8dcbbe12c173d2b_Screenshot-2026-05-25-050212.png",
    logo: "/assets/img/6a1415b8f6b4f6ac126737a3_Lumana-.png",
  },
];

export type Review = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  logo: string;
  url?: string;
};

export const reviews: Review[] = [
  {
    quote:
      "These guys are the OGs. They completely blew past our expectations on the demo video, and we keep coming back to them for every new one we need.",
    name: "Chris Cunningham",
    role: "Marketing Head, ClickUp",
    avatar: "/assets/img/6a107bd320d1bc1b9a0555c4_Chris-Click-Up-.avif",
    logo: "/assets/img/69b44344fc3d7cfa95bfc086_Logo.webp",
    url: "https://www.linkedin.com/",
  },
  {
    quote:
      "If you want premium video then look no further. You pay good for what you get. Got our video done faster than expected and it ended up being the centerpiece of our entire launch.",
    name: "Sean Dorje",
    role: "Naiive",
    avatar: "/assets/img/6a107c0111bdc755bb679e5d_Sean.avif",
    logo: "/assets/img/6a107c2ce79dab8556896d37_usenaive_logo.avif",
    url: "https://www.linkedin.com/",
  },
  {
    quote:
      "It was a pleasure to work with Vantora Media!! They deliver quick, high quality results and they also took the extra effort to make sure I was satisfied.",
    name: "Nikhil Reddy",
    role: "Datoric AI",
    avatar: "/assets/img/6a107c4f28e094b24f3a0ec0_Nikhil.avif",
    logo: "/assets/img/6a107c69e46eb08f361e7e83_datoric_ai_logo.avif",
    url: "https://www.linkedin.com/",
  },
  {
    quote:
      "These guys made our launch video and the response we got from it was crazy. Felt like a real team behind the project, not just freelancers passing files around. Will be coming back for our next round of ads!!",
    name: "Milind Sagaram",
    role: "Helonic",
    avatar: "/assets/img/6a107c8bf1760d7779ba37e5_Milind-Sagaram.avif",
    logo: "/assets/img/6a107c9cd0aa76483a8a4252_usearticulate_logo.avif",
    url: "https://www.linkedin.com/",
  },
  {
    quote:
      "I was surprised by how smooth the whole thing felt. The team got back to every message within a few hours, the first storyboard hit way closer than I expected, and the final video ended up being the strongest asset on our landing page.",
    name: "Chirag Kawediya",
    role: "Human Behaviour",
    avatar: "/assets/img/6a107cbd7390ce25f6381935_Chirag.avif",
    logo: "/assets/img/69b3014d9fa39babb99449c6_Property-1-Logo12.svg",
    url: "https://www.linkedin.com/",
  },
  {
    quote:
      "These guys were extremely professional to work with. They made a launch video for us that we are extremely proud of. Would highly recommend!!",
    name: "Pratham Hombal",
    role: "Stratify",
    avatar: "/assets/img/6a107d6e4e2785cb4e6afb3d_Pratham-Hombal.avif",
    logo: "/assets/img/6a107d874e2785cb4e6b0872_stratify-.avif",
    url: "https://www.linkedin.com/",
  },
  {
    quote:
      "Honestly a great team to work with! They were quick, super easy to communicate with, and the final video came out way better than I was expecting. They even made a couple last minute tweaks the day before our launch without any pushback.",
    name: "William Namgya",
    role: "Luel",
    avatar: "/assets/img/6a107cf0d58ed292f1182a05_William.avif",
    logo: "/assets/img/6a107d01cde325615198474e_luel.avif",
    url: "https://www.linkedin.com/",
  },
  {
    quote:
      "Working with Vantora Media for our launch video was a great experience. They turned it around super quickly and would make any revisions requested within 24 hours. I would highly recommend them to anyone that needs video work done.",
    name: "Alex Stroe",
    role: "Patentwatch",
    avatar: "/assets/img/6a107d3045af3c70c2699f32_Alex.avif",
    logo: "/assets/img/6a107d4248536b83c597d540_patentwatch_ai_logo.avif",
    url: "https://www.linkedin.com/",
  },
  {
    quote:
      "Such a great experience working with Vantora Media. They were quick, handled every revision and the final video came out way more polished than what we had seen from other agencies. Highly recommend them!!",
    name: "Thibault Garcia",
    role: "Reachly",
    avatar: "/assets/img/6a107db7c55360ee303c8223_Thibault.avif",
    logo: "/assets/img/69b443338bd388ddc50de099_c1387f7cdd69fa3c0dae0a7458ec37797c1cb2b4.webp",
    url: "https://www.linkedin.com/",
  },
];

export const faqs = [
  {
    q: "How fast can you deliver?",
    a: "The turnaround time is roughly 2 weeks. We have 50+ in-house editors across dedicated teams, so we don't rely on freelancers that slow you down.",
  },
  {
    q: "Do you work with early-stage startups or only established companies?",
    a: "Both. Whether you're pre-launch or scaling past Series B, we've worked with companies at every stage.",
  },
  {
    q: "Who owns the final files?",
    a: "You own everything the moment we deliver, from the source files and raw exports to every hook and cutdown.",
  },
  {
    q: "How many revisions do I get?",
    a: "We offer revisions until you're happy with the result. Most clients wrap it up in one or two rounds, but there's no hard limit.",
  },
  {
    q: "Do you work with non-YC startups?",
    a: "Yes. YC is just where a lot of our roster happens to come from. If you're building SaaS and you have a product worth showing, we're in.",
  },
];

/* ---------------------------------- pages --------------------------------- */

export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  title: string;
  blurb: string;
  image: string;
  logo?: string;
  video: string;
  stats: { value: string; label: string }[];
  challenge: string;
  approach: string;
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "clickup",
    client: "ClickUp",
    category: "Product Release",
    title: "ClickUp 4.0 Product Release Video",
    blurb:
      "How we turned the biggest release of the year for a four billion dollar platform into one clear story that the product itself tells.",
    image: "/assets/img/6a146f456cb8cd0238acbc43_Screenshot-2026-05-25-214801.avif",
    logo: "/assets/img/6a1416c95f224ee69da56a14_ClickUp-white.png",
    video: "1162189128",
    stats: [
      { value: "2 wks", label: "Kickoff to delivery" },
      { value: "1.2M", label: "Organic views" },
      { value: "3", label: "Cutdowns shipped" },
    ],
    challenge:
      "ClickUp ships faster than almost any company on the planet. Their 4.0 release bundled dozens of features into one AI-native platform, and the launch video had to make that complexity feel like a single, obvious idea.",
    approach:
      "We built the whole video around one line: the only AI that works where you work. Every feature became a beat in that story, captured with clean product motion and a rhythm that survives being watched on mute.",
    result:
      "The film became the centrepiece of the launch page, the keynote open, and the paid social flight. ClickUp returned for the next two releases.",
  },
  {
    slug: "human-behavior",
    client: "Human Behavior",
    category: "Product Release",
    title: "Human Behavior product launch film",
    blurb:
      "A YC-backed AI platform that decodes user behavior from session replays, translated into a story any buyer can follow.",
    image: "/assets/img/6a14d9d6d158a10503f47ab9_Screenshot-2026-05-26-052248.avif",
    logo: "/assets/img/69b3014d9fa39babb99449c6_Property-1-Logo12.svg",
    video: "1184345377",
    stats: [
      { value: "9 days", label: "Delivery time" },
      { value: "134K", label: "Views on X" },
      { value: "4.9", label: "Founder rating" },
    ],
    challenge:
      "Session replay is abstract until you see what it unlocks. The first cut risked teaching the product instead of selling the outcome.",
    approach:
      "We led with the buyer's problem, kept the interface on screen only when it proved the promise, and closed on the one metric every product team already cares about.",
    result:
      "The launch post outperformed their previous announcements and became the reference asset for their sales team.",
  },
  {
    slug: "lumana",
    client: "Lumana",
    category: "In-Person Demo",
    title: "Lumana enterprise video security story",
    blurb:
      "Enterprise AI video security, explained in the time it takes a buyer to watch a coffee break.",
    image: "/assets/img/6a1470d47bca22a641a7a015_Screenshot-2026-05-25-215450.avif",
    video: "1189733303",
    stats: [
      { value: "11 days", label: "Kickoff to delivery" },
      { value: "2", label: "Audience cuts" },
      { value: "6", label: "Localisations" },
    ],
    challenge:
      "Lumana sells to security teams who have seen every camera demo ever made. The video had to feel operationally real, not futuristic.",
    approach:
      "We anchored the film in a real shift on a real site, let the product react in the frame, and used restrained motion so the footage stayed the hero.",
    result:
      "The film now opens their enterprise deck and runs on the homepage above the fold.",
  },
];

export type BlogPost = {
  slug: string;
  category: string;
  read: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "founder-led-video-marketing-30-day-plan",
    category: "Video Marketing",
    read: "5 min read",
    title: "Founder-Led Video Marketing for SaaS: A Practical 30-Day Plan",
    excerpt:
      "Build a manageable founder-led video plan for SaaS: choose useful topics, record with confidence, protect customer privacy, and learn from a 30-day pilot.",
    image: "/assets/img/blog-founder.webp",
    author: "Ishmam Alvee",
    date: "October 2, 2026",
    body: [
      {
        paragraphs: [
          "Founder-led video works because buyers trust the person who built the product. It fails when the founder tries to become a full-time creator on top of running the company.",
          "The answer is a pilot, not a channel strategy. Thirty days is enough to learn whether your face, your voice, and your point of view make the sales conversation shorter.",
        ],
      },
      {
        heading: "Pick topics that do work for you",
        paragraphs: [
          "Start with the questions your sales team answers every week. Record one answer per video, in the order buyers actually ask them. That library becomes your top-of-funnel and your onboarding.",
          "Avoid trend-led topics unless they connect to a decision your buyer is about to make. Useful beats viral when the goal is pipeline.",
        ],
      },
      {
        heading: "Make recording boring",
        paragraphs: [
          "One window, one light, one microphone, one take. The more ceremony you add, the fewer videos you will finish. A ten-minute weekly slot is enough for four short videos a month.",
          "Script only the first line and the last line. Everything in between sounds better when it is remembered rather than read.",
        ],
      },
      {
        heading: "Protect the customer",
        paragraphs: [
          "Blur identifying details, get written permission, and avoid showing live dashboards unless the data is synthetic. A strong internal review is part of the production process, not a blocker.",
        ],
      },
      {
        heading: "Run the 30-day pilot",
        paragraphs: [
          "Weeks one and two: publish four founder videos, two product clips, and one customer story. Weeks three and four: put the best performer behind a gated demo and ask sales which asset they actually used.",
          "Judge the pilot on conversations started and deals unblocked, not on views. Then decide whether to repeat, staff, or stop.",
        ],
      },
    ],
  },
  {
    slug: "how-to-make-a-product-demo-video",
    category: "Video Marketing",
    read: "5 min read",
    title: "How to Make a Product Demo Video: From Brief to Final Cut",
    excerpt:
      "Plan, script, record, and edit a product demo that shows one useful workflow clearly, with practical checks for screen capture, captions, and final delivery.",
    image: "/assets/img/blog-demo.webp",
    author: "Aariz Vale",
    date: "September 25, 2026",
    body: [
      {
        paragraphs: [
          "A product demo is not a tour. It is an argument with pictures. The best demos show one workflow, in one sitting, and leave the viewer able to repeat it.",
        ],
      },
      {
        heading: "Write the brief in one sentence",
        paragraphs: [
          "Name the buyer, the task, and the change. If your brief needs three sentences, the video needs three videos.",
        ],
      },
      {
        heading: "Script around the outcome",
        paragraphs: [
          "Open on the result, then rewind to the work. Show the shortest path through the product, not every possible path. Cut anything that requires narration to make sense.",
        ],
      },
      {
        heading: "Record clean plates",
        paragraphs: [
          "Hide personal data, zoom the interface so text survives mobile, and capture at 60fps if you plan to slow anything down. Record a second pass with no cursor for overlays.",
        ],
      },
      {
        heading: "Finish for the platform",
        paragraphs: [
          "Burned-in captions, a silent-friendly edit, and a 15-second cutdown are not extras. They are the difference between a demo that gets watched and one that gets archived.",
        ],
      },
    ],
  },
  {
    slug: "saas-explainer-video-cost",
    category: "Video Marketing",
    read: "5 min read",
    title: "SaaS Explainer Video Cost: How to Scope and Compare Quotes",
    excerpt:
      "Scope your SaaS explainer video, compare production quotes, and spot missing costs with a practical brief, review checklist, and realistic budget trade-offs.",
    image: "/assets/img/blog-explainer-cost.webp",
    author: "Aariz Vale",
    date: "September 18, 2026",
    body: [
      {
        paragraphs: [
          "Explainer quotes vary by an order of magnitude because the word 'explainer' describes a format, not a scope.",
        ],
      },
      {
        heading: "What actually changes the price",
        paragraphs: [
          "Script strategy, original illustration, live-action, voiceover, motion complexity, revisions, and the number of delivery formats. Ask for each line separately.",
        ],
      },
      {
        heading: "The costs that hide",
        paragraphs: [
          "Music licensing, re-recording, regional cutdowns, subtitles, and rush delivery are commonly excluded. A good quote names them up front.",
        ],
      },
      {
        heading: "How to compare quotes",
        paragraphs: [
          "Normalise every proposal to the same deliverable list before comparing numbers. The cheapest quote is often the one missing the most work.",
        ],
      },
    ],
  },
  {
    slug: "product-demo-video-script",
    category: "Video Marketing",
    read: "5 min read",
    title: "Product Demo Video Script: A 7-Scene Framework and Recording Plan",
    excerpt:
      "Write a product demo script with seven clear scenes, a worked narration example, and a shot-by-shot recording plan your product team and editor can use.",
    image: "/assets/img/blog-demo-script.webp",
    author: "Ishmam Alvee",
    date: "September 10, 2026",
    body: [
      {
        paragraphs: [
          "Most demo scripts fail in the same place: they explain the interface before they earn the attention.",
        ],
      },
      {
        heading: "The seven scenes",
        paragraphs: [
          "1. The cost of the current way. 2. The promise. 3. The first step. 4. The work. 5. The proof. 6. The second outcome. 7. The next action.",
          "Each scene gets one idea and one visual. If a scene needs two visuals, it is two scenes.",
        ],
      },
      {
        heading: "Write narration for the ear",
        paragraphs: [
          "Short sentences, active verbs, no product nouns the buyer has not met. Read it aloud and cut every word you stumble on.",
        ],
      },
      {
        heading: "Record against the script",
        paragraphs: [
          "Capture two takes per scene: one clean, one with an intentional interaction. Mark the exact frame where the outcome lands so the edit has an anchor.",
        ],
      },
    ],
  },
  {
    slug: "saas-product-video-guide",
    category: "Video Marketing",
    read: "5 min read",
    title: "SaaS Product Video Guide: Formats, Examples, and Production Scope",
    excerpt:
      "Choose the right SaaS product video, understand what changes production cost, and build a useful brief with examples, delivery needs, and review checkpoints.",
    image: "/assets/img/blog-product-guide.webp",
    author: "Ishmam Alvee",
    date: "September 3, 2026",
    body: [
      {
        paragraphs: [
          "There are five product videos most SaaS teams actually need, and they are not interchangeable.",
        ],
      },
      {
        heading: "The five formats",
        paragraphs: [
          "The launch film, the homepage hero, the demo, the customer story, and the paid cutdown. Each has a different job and a different length.",
        ],
      },
      {
        heading: "Choose by job, not by style",
        paragraphs: [
          "If the video must explain, show the product. If it must persuade, show the outcome. If it must convert, show the next step.",
        ],
      },
      {
        heading: "Brief once, reuse everywhere",
        paragraphs: [
          "Shoot for the longest format and cut down. Build captions and vertical versions into the original scope rather than buying them later.",
        ],
      },
    ],
  },
  {
    slug: "why-saas-product-videos-help-buyers-decide",
    category: "Video Marketing",
    read: "5 min read",
    title: "Why SaaS Product Videos Can Help Buyers Decide",
    excerpt:
      "See where SaaS product videos can clarify buying decisions, what to show, and how to test their impact without confusing video engagement with business results.",
    image: "/assets/img/blog-why-videos.webp",
    author: "Ishmam Alvee",
    date: "August 27, 2026",
    body: [
      {
        paragraphs: [
          "Buyers do not watch videos to be entertained. They watch to reduce the risk of making the wrong choice.",
        ],
      },
      {
        heading: "Show the decision, not the feature",
        paragraphs: [
          "The most useful product videos answer three questions: what changes for me, how hard is it, and what happens next.",
        ],
      },
      {
        heading: "Measure the right thing",
        paragraphs: [
          "Completion rate is a production metric. Pipeline influenced, demo requests, and sales cycle length are business metrics. Track both, but decide with the second.",
        ],
      },
      {
        heading: "Test before you scale",
        paragraphs: [
          "Run one video against the current page for two weeks. If the lift is not visible, change the story before you change the budget.",
        ],
      },
    ],
  },
];

export const jobs = [
  {
    slug: "marketing-intern",
    team: "Marketing",
    title: "Marketing Intern",
    location: "Kalshi, Mirpur 12, Dhaka (Onsite)",
    type: "Internship, 3 Months, On-Site",
    level: "Entry",
    about:
      "Work directly with the marketing team on campaigns, creator outreach, and content operations for SaaS and creator clients.",
    requirements: [
      "Currently studying or recently graduated in marketing, business, or communications.",
      "Comfortable writing short-form copy and organising content calendars.",
      "Available for a three-month on-site internship in Dhaka.",
    ],
  },
  {
    slug: "jr-marketing-executive",
    team: "Marketing",
    title: "Jr. Marketing Executive",
    location: "Kalshi, Mirpur 12, Dhaka (Onsite)",
    type: "Full Time, On-Site",
    level: "Entry",
    about:
      "Own day-to-day marketing execution across email, social, and partner channels, and help turn client wins into case studies.",
    requirements: [
      "1–2 years of marketing experience, ideally in an agency or SaaS company.",
      "Strong written English and a bias toward shipping.",
      "On-site in Dhaka, full time.",
    ],
  },
  {
    slug: "visualizer",
    team: "Graphics Design",
    title: "Visualizer",
    location: "Mirpur Kalshi",
    type: "Full Time, On-Site",
    level: "Mid",
    about:
      "Turn scripts into frames. Build storyboards, style frames, and visual direction for product videos and creator content.",
    requirements: [
      "Strong portfolio of storyboards, style frames, or motion design.",
      "Fluent in Figma and Adobe Creative Suite.",
      "Able to take a script and find the clearest visual idea in it.",
    ],
  },
  {
    slug: "content-writer",
    team: "Content Writing",
    title: "Content writer",
    location: "Mirpur, Kalshi",
    type: "Full Time, On-Site",
    level: "Mid",
    about:
      "Write scripts, landing copy, and essays that explain complex products without sanding off the interesting parts.",
    requirements: [
      "2+ years writing for SaaS, technology, or creative agencies.",
      "A portfolio with at least two long-form pieces you are proud of.",
      "Comfortable interviewing founders and subject-matter experts.",
    ],
  },
  {
    slug: "video-editor",
    team: "Video Editing",
    title: "Video Editor",
    location: "Mirpur Kalshi",
    type: "Full Time",
    level: "Mid",
    about:
      "Edit product films, launch videos, and short-form cutdowns for a roster of YC startups and global SaaS companies.",
    requirements: [
      "3+ years editing product or brand video in Premiere and After Effects.",
      "Strong sense of pacing, sound design, and typography in motion.",
      "Able to work on-site with the storyboard and design team.",
    ],
  },
];

export const pbStats = [
  { value: "220k", label: "Avg. views / video" },
  { value: "11.2m", label: "Organic reach" },
  { value: "200+", label: "Creators served" },
];
