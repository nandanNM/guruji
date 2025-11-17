import { Clock, FileText, Tag } from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Note {
  id: string;
  title: string;
  content: string;
  category?: string;
  created_at: string;
  updated_at?: string;
  tags?: string[];
}

interface Props {
  item: Note;
  onPress?: () => void;
}

export const FeaturedNoteCard = ({ item, onPress }: Props) => {
  const previewText = item.content.substring(0, 100);
  const formattedDate = new Date(
    item.updated_at || item.created_at,
  ).toLocaleDateString();

  return (
    <TouchableOpacity onPress={onPress} style={styles.featuredCard}>
      <View style={styles.featuredGradient}>
        <View style={styles.featuredCategory}>
          <Tag color="#4F46E5" size={14} />
          <Text style={styles.featuredCategoryText}>
            {item.category || "General"}
          </Text>
        </View>

        <View style={styles.featuredContent}>
          <Text style={styles.featuredTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.featuredPreview} numberOfLines={3}>
            {previewText}
          </Text>

          <View style={styles.featuredFooter}>
            <View style={styles.dateContainer}>
              <Clock color="#E2E8F0" size={16} />
              <Text style={styles.dateText}>{formattedDate}</Text>
            </View>
            <FileText color="#E2E8F0" size={20} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const NoteCard = ({ item, onPress }: Props) => {
  const previewText = item.content.substring(0, 80);
  const formattedDate = new Date(
    item.updated_at || item.created_at,
  ).toLocaleDateString();

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardHeader}>
        <View style={styles.categoryBadge}>
          <Tag color="#4F46E5" size={12} />
          <Text style={styles.categoryText}>{item.category || "General"}</Text>
        </View>
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.cardPreview} numberOfLines={2}>
          {previewText}
        </Text>

        <View style={styles.cardFooter}>
          <View style={styles.dateContainer}>
            <Clock color="#64748B" size={14} />
            <Text style={styles.cardDate}>{formattedDate}</Text>
          </View>
          <FileText color="#1E293B" size={18} />
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
    backgroundColor: "#4F46E5",
    padding: 20,
    justifyContent: "space-between",
  },
  featuredCategory: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  featuredCategoryText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#4F46E5",
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
  featuredPreview: {
    fontSize: 14,
    color: "#E2E8F0",
    marginBottom: 16,
  },
  featuredFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    fontSize: 12,
    color: "#E2E8F0",
    marginLeft: 6,
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
    marginBottom: 12,
  },
  categoryBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  categoryText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#4F46E5",
    marginLeft: 4,
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
  cardPreview: {
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
  cardDate: {
    fontSize: 12,
    color: "#64748B",
    marginLeft: 6,
  },
});
