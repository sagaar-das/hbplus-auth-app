import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function DomainNotice() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Official account required
      </Text>

      <Text style={styles.description}>
        Only employees using an @hbplus.fit
        email address can access this application.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F0F5FF",
    padding: 16,
    borderRadius: 10,
    marginTop: 25,
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2546A8",
    marginBottom: 6,
  },

  description: {
    fontSize: 13,
    color: "#52627A",
    lineHeight: 20,
  },
});
