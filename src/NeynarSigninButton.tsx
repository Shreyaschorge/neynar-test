import React from "react";
import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  onPress: () => void;
}

export const NeynarSigninButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.signInButton}>
      <Image
        source={require("path-to-your-image/favicon.png")} // Make sure to adjust the path
        style={styles.logo}
      />
      <Text style={styles.signInText}>Sign in with Neynar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signInButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 24,
    minWidth: 218,
    width: 218,
  },
  logo: { width: 24, height: 24, marginRight: 10 },
  signInText: { fontSize: 16, fontWeight: "300" },
});
