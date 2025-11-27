import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Card } from "@/components/ui/card";
import { Text as NText } from "@/components/ui/text";
import { useColor } from "@/hooks/useColor";
import { Badge } from "./badge";

export type Difficulty = "EASY" | "MEDIUM" | "HARD";

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  acceptance: number;
  status?: "Attempted" | "Solved" | null;
}

interface ProblemCardProps {
  problem: Problem;
  onPress?: () => void;
}

const ProblemCard = ({ problem, onPress }: ProblemCardProps) => {
  const borderColor = useColor("border");
  const textColor = useColor("text");
  const textColorMuted = useColor("textMuted");
  const cardBg = useColor("card");

  // Badge Variant Logic
  const getDifficultyBadge = (diff: Difficulty) => {
    switch (diff) {
      case "EASY":
        return "success"; // Green bg
      case "MEDIUM":
        return "warning-filled"; // Yellow/Orange bg
      case "HARD":
        return "info-filled"; // Red/Purple bg (using info for now, or define 'danger')
      default:
        return "outline";
    }
  };

  // Custom color logic for the badge text/bg overrides if needed to match image exactly
  // The image shows MEDIUM as yellow bg with dark text, EASY as green bg with dark text.
  // The current Badge component handles variants. We'll use 'warning-filled' for Medium (Yellow).

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Card style={styles.card}>
        <View style={styles.headerRow}>
          <NText style={[styles.title, { color: textColor }]}>
            {problem.title}
          </NText>

          {/* Attempted Status Badge (Right side) */}
          {problem.status === "Attempted" && (
            <Badge
              variant="destructive" // Yellow subtle
              // icon={<Ionicons name="time" />}
              style={styles.statusBadge}>
              Attempted
            </Badge>
          )}
        </View>

        <View style={styles.footerRow}>
          <Badge variant={"purple"} style={styles.diffBadge}>
            {problem.difficulty}
          </Badge>

          <View style={styles.acceptanceContainer}>
            <Ionicons
              name="checkmark-circle-outline"
              size={14}
              color={textColorMuted}
            />
            <NText style={[styles.acceptanceText, { color: textColorMuted }]}>
              {problem.acceptance}% acceptance
            </NText>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: "Rubik-Bold",
    flex: 1, // Allow title to wrap if needed without pushing badge off
    marginRight: 8,
  },
  statusBadge: {
    borderRadius: 12,
    paddingHorizontal: 8,
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  diffBadge: {
    borderRadius: 8,
    paddingHorizontal: 10,
    minWidth: 60,
    justifyContent: "center",
  },
  acceptanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  acceptanceText: {
    fontSize: 12,
    fontFamily: "Rubik-Regular",
  },
});

export default ProblemCard;
