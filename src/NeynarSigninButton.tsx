import React from "react";
import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import NeynarLogo from "./components/NeynarLogo";

interface Props {
  onPress: () => void;
}

export const NeynarSigninButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.signInButton}>
      <NeynarLogo width="40px" height="40px" />
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
  signInText: { fontSize: 16, fontWeight: "300", marginLeft: 20 },
});
