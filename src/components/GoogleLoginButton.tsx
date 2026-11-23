import {
  Pressable,
  Text,
  StyleSheet,
} from "react-native";

interface GoogleLoginButtonProps {
  onPress: () => void;
  loading?: boolean;
}

export default function GoogleLoginButton({
  onPress,
  loading = false,
}: GoogleLoginButtonProps) {

  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
      disabled={loading}
    >
      <Text style={styles.googleIcon}>G</Text>

      <Text style={styles.buttonText}>
        {loading
          ? "Please wait..."
          : "Continue with Google"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 54,
    borderWidth: 1,
    borderColor: "#DCE2EB",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#FFFFFF",
  },

  googleIcon: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4285F4",
  },

  buttonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#263449",
  },
});
