import {
  AlertCircle,
  CheckCircle2,
  ClipboardList,
  Clock,
} from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Test {
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

interface Props {
  item: Test;
  onPress?: () => void;
}

export const FeaturedTestCard = ({ item, onPress }: Props) => {
  const difficultyColors = {
    easy: "#10B981",
    medium: "#F59E0B",
    hard: "#EF4444",
  };

  const difficultyColor = difficultyColors[item.difficulty || "medium"];

  return (
    <TouchableOpacity onPress={onPress} style={styles.featuredCard}>
      <View
        style={[styles.featuredGradient, { backgroundColor: difficultyColor }]}>
        <View style={styles.featuredBadge}>
          {item.completed ? (
            <CheckCircle2 color="#10B981" size={14} />
          ) : (
            <AlertCircle color="#F59E0B" size={14} />
          )}
          <Text style={styles.featuredBadgeText}>
            {item.completed ? `Score: ${item.score}%` : "Pending"}
          </Text>
        </View>

        <View style={styles.featuredContent}>
          <Text style={styles.featuredTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.featuredDescription} numberOfLines={2}>
            {item.description}
          </Text>

          <View style={styles.featuredFooter}>
            <View style={styles.featuredStats}>
              <Text style={styles.featuredStatsText}>
                {item.questions_count} Questions
              </Text>
              {item.duration && (
                <View style={styles.featuredDuration}>
                  <Clock color="#E2E8F0" size={14} />
                  <Text style={styles.featuredStatsText}>
                    {item.duration} min
                  </Text>
                </View>
              )}
            </View>
            <ClipboardList color="#E2E8F0" size={20} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const TestCard = ({ item, onPress }: Props) => {
  const difficultyColors = {
    easy: "#10B981",
    medium: "#F59E0B",
    hard: "#EF4444",
  };

  const difficultyColor = difficultyColors[item.difficulty || "medium"];

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardHeader}>
        <View
          style={[
            styles.difficultyBadge,
            { backgroundColor: `${difficultyColor}15` },
          ]}>
          <View
            style={[styles.difficultyDot, { backgroundColor: difficultyColor }]}
          />
          <Text style={[styles.difficultyText, { color: difficultyColor }]}>
            {(item.difficulty || "medium").toUpperCase()}
          </Text>
        </View>
        {item.completed && (
          <View style={styles.completedBadge}>
            <CheckCircle2 color="#10B981" size={14} />
            <Text style={styles.scoreText}>{item.score}%</Text>
          </View>
        )}
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.cardDescription} numberOfLines={2}>
          {item.description}
        </Text>

        <View style={styles.cardFooter}>
          <View style={styles.cardStats}>
            <Text style={styles.cardStatsText}>{item.questions_count} Q</Text>
            {item.duration && (
              <View style={styles.cardDuration}>
                <Clock color="#64748B" size={12} />
                <Text style={styles.cardStatsText}>{item.duration}m</Text>
              </View>
            )}
          </View>
          <ClipboardList color="#1E293B" size={18} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  featuredCard: {
    width: 240,
    height: 320,
    position: "relative",
  },
  featuredGradient: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    padding: 20,
    justifyContent: "space-between",
  },
  featuredBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  featuredBadgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#1E293B",
    marginLeft: 4,
  },
  featuredContent: {
    flex: 1,
    justifyContent: "flex-end",
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: 14,
    color: "#E2E8F0",
    marginBottom: 16,
  },
  featuredFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  featuredStats: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  featuredStatsText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#E2E8F0",
  },
  featuredDuration: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  card: {
    flex: 1,
    width: "100%",
    marginTop: 16,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  difficultyBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  difficultyDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  difficultyText: {
    fontSize: 10,
    fontWeight: "700",
  },
  completedBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  scoreText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#10B981",
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 13,
    color: "#64748B",
    lineHeight: 18,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
  },
  cardStats: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cardStatsText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#64748B",
  },
  cardDuration: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
