import { Colors } from "@/theme/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export type Ionicons = keyof typeof Ionicons.glyphMap;
export type ColorKey = keyof typeof Colors.light;
export interface Test {
  id: string;
  title: string;
  description: string;
  questions_count: number;
  duration?: number;
  difficulty?: "easy" | "medium" | "hard";
  completed?: boolean;
  score?: number;
  created_at: string;
}

export interface HomeChallenge {
  id: string;
  number: number;
  title: string;
  badge: Ionicons | null;
  isActive: boolean;
  endDate: string;
}
export interface FullChallenge {
  id: string;
  platform: "YOUTUBE" | "UDEMY" | "OTHER";
  status: "Active" | "Upcoming" | "Expired";
  title: string;
  subtitle: string;
  tags: {
    frequency: "DAILY" | "WEEKLY" | string;
    reward?: string;
  };
  dateRange: string;
}

export interface SectionHeader {
  type: "header";
  title: string;
}

export interface GroupedSection {
  type: "grouped-list";
  items: JourneyItem[];
}
export interface JourneyItem {
  id: string;
  title: string;
  subtitle: string;
  icon: Ionicons;
  iconColor: "primary" | "textMuted";
}

export type ProfileListItem = JourneyItem | SectionHeader | GroupedSection;

export interface CodingStats {
  totalSolved: number;
  totalProblems: number;
  acceptanceRate: number;

  easy: StatsLevel;
  medium: StatsLevel;
  hard: StatsLevel;
}

interface StatsLevel {
  solved: number;
  total: number;
  attempting: number;
  unsolved: number;
  accepted: number;
}
