import {
  CodingStats,
  FullChallenge,
  HomeChallenge,
  JourneyItem,
  ProfileListItem,
  Test,
} from "@/types";

export const JOURNEY_ITEMS: JourneyItem[] = [
  {
    id: "1",
    title: "Challenges",
    subtitle: "Compete with others and level up",
    icon: "trophy",
    iconColor: "primary", // Use primary color (Orange)
  },
  {
    id: "2",
    title: "Coding Problems",
    subtitle: "Sharpen your coding skills daily",
    icon: "code",
    iconColor: "textMuted", // Use muted color (Grey)
  },
  {
    id: "3",
    title: "Quizzes",
    subtitle: "Get competitive and climb the leaderboard",
    icon: "clipboard",
    iconColor: "textMuted",
  },
  {
    id: "4",
    title: "Profile",
    subtitle: "Track your coding progress",
    icon: "person",
    iconColor: "textMuted",
  },
];

export const profile = {
  name: "Nandan Manna",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
};

export const homeChallenges: HomeChallenge[] = [
  {
    id: "1",
    number: 1,
    title: "35 Days React Spark",
    badge: "flash",
    isActive: true,
    endDate: "Ends Nov 21",
  },
  {
    id: "2",
    number: 2,
    title: "25 Days JS Challenge: Part 2",
    badge: "flash",
    isActive: true,
    endDate: "Ends Nov 30",
  },
  {
    id: "3",
    number: 3,
    title: "Web Dev: Bunny",
    badge: null,
    isActive: true,
    endDate: "Ends Dec 9",
  },
];

export const tests: Test[] = [
  {
    id: "1",
    title: "General Knowledge Test",
    description:
      "Test your basic general knowledge with 20 important questions.",
    questions_count: 20,
    duration: 15,
    difficulty: "easy",
    completed: true,
    score: 88,
    created_at: "2025-01-01",
  },
  {
    id: "2",
    title: "Math Aptitude",
    description: "Solve medium-level math aptitude questions.",
    questions_count: 25,
    duration: 20,
    difficulty: "medium",
    completed: false,
    created_at: "2025-01-05",
  },
  {
    id: "3",
    title: "Computer Fundamentals",
    description: "Covers basics of computer hardware and software.",
    questions_count: 30,
    duration: 25,
    difficulty: "hard",
    completed: false,
    created_at: "2025-01-08",
  },
];

export const fullChallenges: FullChallenge[] = [
  {
    id: "1",
    platform: "YOUTUBE",
    status: "Active",
    title: "35 Days React Spark",
    subtitle: "35 Days React Spark",
    tags: { frequency: "DAILY", reward: "I Write Code T-Shirts" },
    dateRange: "Oct 17, 2025 - Nov 21, 2025",
  },
  {
    id: "2",
    platform: "YOUTUBE",
    status: "Active",
    title: "25 Days JS Challenge: Part 2",
    subtitle: "25 Days JavaScript Challenge",
    tags: { frequency: "DAILY", reward: "I Write Code T-Shirts" },
    dateRange: "Nov 5, 2025 - Nov 30, 2025",
  },
  {
    id: "3",
    platform: "UDEMY",
    status: "Active",
    title: "Web Dev: Bunny",
    subtitle: "Complete Web Development Bootcamp",
    tags: { frequency: "DAILY" },
    dateRange: "Dec 1, 2025 - Jan 15, 2026",
  },
];

export const profileUser = {
  name: "Nandan Manna",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  email: "nandan7602831377@gmail.com",
};

export const codingStats: CodingStats = {
  totalSolved: 0,
  totalProblems: 578,
  acceptanceRate: 0,
  easy: { solved: 0, total: 141, attempting: 1, unsolved: 141, accepted: 0 },
  medium: { solved: 0, total: 338, attempting: 0, unsolved: 338, accepted: 0 },
  hard: { solved: 0, total: 99, attempting: 0, unsolved: 99, accepted: 0 },
};

export const profileListData: ProfileListItem[] = [
  { type: "header", title: "More" },

  {
    id: "submission",
    title: "Recent Submissions",
    subtitle: "View your coding submission history",
    icon: "code-slash",
    iconColor: "primary",
  } as JourneyItem,

  {
    id: "preferences",
    title: "Preferences",
    subtitle: "Customize your app settings and preferences",
    icon: "settings",
    iconColor: "primary",
  } as JourneyItem,

  {
    id: "bug",
    title: "Report a Bug",
    subtitle: "Found an issue? Open GitHub and file a report",
    icon: "bug",
    iconColor: "primary",
  } as JourneyItem,

  { type: "header", title: "Account" },

  {
    type: "grouped-list",
    items: [
      {
        id: "delete",
        title: "Delete account",
        subtitle: "Opens masterji.co/delete-account",
        icon: "train",
        iconColor: "primary",
      },
      {
        id: "privacy",
        title: "Privacy policy",
        subtitle: "How we handle and protect your data",
        icon: "document",
        iconColor: "primary",
      },
      {
        id: "support",
        title: "Support",
        subtitle: "Get help or email dev@chaicode.com",
        icon: "help",
        iconColor: "orange",
      },
    ] as JourneyItem[],
  },
];
