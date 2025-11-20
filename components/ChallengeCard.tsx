import { ArrowRight, Calendar } from "lucide-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";

import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Text as NText } from "@/components/ui/text";
import { useColor } from "@/hooks/useColor";
import { FONT_SIZE } from "@/theme/globals";

import { HomeChallenge } from "@/types";
import { Badge } from "./badge";
import { Button } from "./ui/button";

interface ChallengeCardProps {
  challenge: HomeChallenge;
  onPress: () => void;
}

const ChallengeCard = ({ challenge, onPress }: ChallengeCardProps) => {
  const textColor = useColor("text");
  const textColorMuted = useColor("textMuted");
  const primaryColor = useColor("primary");

  return (
    <Card style={styles.challengeCard}>
      {/* TOP ROW */}
      <View style={styles.challengeHeader}>
        <View style={styles.challengeTitleRow}>
          {/* Number Badge */}
          <Badge
            style={{
              backgroundColor: primaryColor + "30",
              borderColor: primaryColor + "40",
              borderWidth: 1,
              marginRight: 6,
            }}
            variant="secondary">
            {challenge.number}
          </Badge>

          {/* Title */}
          <NText style={[styles.challengeTitle, { color: textColor }]}>
            {challenge.title}
          </NText>
        </View>

        {/* Active Tag */}
        {challenge.isActive && (
          <Badge icon="flash" variant="default">
            Active
          </Badge>
        )}
      </View>

      {/* FOOTER */}
      <View style={styles.challengeFooter}>
        <View style={styles.dateContainer}>
          <Icon name={Calendar} size={14} color={textColorMuted} />
          <NText style={[styles.dateText, { color: textColorMuted }]}>
            {challenge.endDate}
          </NText>
        </View>

        <Button variant="outline" size="sm" onPress={onPress}>
          <NText
            style={[
              styles.joinButtonText,
              {
                fontSize: FONT_SIZE - 5,
              },
            ]}>
            Join Now
          </NText>
          <Icon name={ArrowRight} size={14} color={textColorMuted} />
        </Button>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  challengeCard: {
    marginBottom: 8,
    minHeight: 120,
    justifyContent: "space-between",
  },
  challengeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  challengeTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: "700",
    flexShrink: 1,
  },
  challengeFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  dateText: {
    fontSize: 11,
    fontWeight: "500",
  },
  joinButtonText: {
    fontWeight: "700",
  },
});

export default ChallengeCard;
