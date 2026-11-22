
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useWindowDimensions,
  StatusBar,
} from "react-native";

export default function LoginScreen() {
  
  const { width } = useWindowDimensions();

  
  const isMobile = width < 600;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View
        style={[
          styles.loginCard,
          isMobile && styles.mobileCard,
        ]}
      >
        
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>HB+</Text>
        </View>

       
        <Text style={styles.title}>
          Welcome to HBPlus
        </Text>

        <Text style={styles.subtitle}>
          Sign in with your official company account
          to access your employee dashboard.
        </Text>

       
        <Pressable
          style={styles.googleButton}
          onPress={() => {
            console.log("Google Login clicked");
          }}
        >
          <Text style={styles.googleIcon}>G</Text>

          <Text style={styles.buttonText}>
            Continue with Google
          </Text>
        </Pressable>

        
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>
            Official account required
          </Text>

          <Text style={styles.infoText}>
            Only employees using an @hbplus.fit
            email address can access this application.
          </Text>
        </View>

        
        <Text style={styles.footer}>
          Secure Employee Portal • HBPlus
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F6FC",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  loginCard: {
    width: "100%",
    maxWidth: 440,
    backgroundColor: "#FFFFFF",
    padding: 40,
    borderRadius: 20,
    alignItems: "center",

    // Card shadow
    elevation: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 5 },
  },

  mobileCard: {
    padding: 25,
  },

  logoContainer: {
    width: 65,
    height: 65,
    borderRadius: 18,
    backgroundColor: "#E9EEFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  logoText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#3457D5",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#172554",
    marginBottom: 12,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 15,
    color: "#64748B",
    lineHeight: 23,
    textAlign: "center",
    marginBottom: 30,
  },

  googleButton: {
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

  infoBox: {
    width: "100%",
    backgroundColor: "#F0F5FF",
    padding: 16,
    borderRadius: 10,
    marginTop: 25,
  },

  infoTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2546A8",
    marginBottom: 6,
  },

  infoText: {
    fontSize: 13,
    color: "#52627A",
    lineHeight: 20,
  },

  footer: {
    fontSize: 12,
    color: "#94A3B8",
    marginTop: 30,
    textAlign: "center",
  },
});
