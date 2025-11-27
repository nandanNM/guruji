import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import { Card } from "@/components/ui/card";
import { Text as NText } from "@/components/ui/text";
import { useColor } from "@/hooks/useColor";

interface MasteryCardProps {
  title: string;
  totalProblems: number;
  completedProblems: number;
}

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 48) / 2; // Calculate width for 2 columns with padding

const MasteryCard = ({
  title,
  totalProblems,
  completedProblems,
}: MasteryCardProps) => {
  const borderColor = useColor("border");
  const textColor = useColor("text");
  const textColorMuted = useColor("textMuted");
  const greenColor = useColor("green");
  const cardBg = useColor("card");

  const progress =
    totalProblems > 0 ? (completedProblems / totalProblems) * 100 : 0;

  return (
    <Card style={styles.card}>
      <View style={styles.content}>
        <NText style={[styles.title, { color: textColor }]} numberOfLines={1}>
          {title}
        </NText>
        <NText style={[styles.subtitle, { color: textColorMuted }]}>
          • {totalProblems} problems
        </NText>

        <View style={styles.progressSection}>
          <NText style={[styles.completedLabel, { color: textColorMuted }]}>
            Completed
          </NText>
          <View style={styles.countRow}>
            <NText style={[styles.completedCount, { color: greenColor }]}>
              {completedProblems}
            </NText>
            <NText style={[styles.totalCount, { color: textColorMuted }]}>
              /{totalProblems}
            </NText>
          </View>
        </View>
      </View>

      {/* Progress Bar at bottom */}
      <View style={styles.progressBarTrack}>
        <View
          style={[
            styles.progressBarFill,
            { width: `${progress}%`, backgroundColor: greenColor },
          ]}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 0, // Custom padding to let progress bar touch bottom
    overflow: "hidden",
    elevation: 0,
    shadowOpacity: 0,
  },
  content: {
    padding: 16,
    paddingBottom: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: "Rubik-Bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "Rubik-Regular",
    marginBottom: 16,
  },
  progressSection: {
    gap: 2,
  },
  completedLabel: {
    fontSize: 12,
    fontFamily: "Rubik-Regular",
  },
  countRow: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  completedCount: {
    fontSize: 18,
    fontFamily: "Rubik-Bold",
  },
  totalCount: {
    fontSize: 14,
    fontFamily: "Rubik-Regular",
  },
  progressBarTrack: {
    height: 4,
    width: "100%",
    backgroundColor: "transparent", // or a light gray if you prefer
  },
  progressBarFill: {
    height: "100%",
  },
});

export default MasteryCard;
