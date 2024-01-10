import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import NeynarLogo from "./components/NeynarLogo";
import WebView from "react-native-webview";

export const NeynarSigninButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openWebView = () => {
    setModalVisible(true);
  };

  return (
    <>
      <TouchableOpacity onPress={openWebView} style={styles.signInButton}>
        <NeynarLogo />
        <Text style={styles.signInText}>Sign in with Neynar...</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <WebView
          source={{ uri: "https://www.google.com" }}
          style={{ marginTop: 20 }}
          onNavigationStateChange={(navState) => {
            if (!navState.loading) {
              setModalVisible(false);
            }
          }}
        />
      </Modal>
    </>
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
  signInText: { fontSize: 16, fontWeight: "300", marginLeft: 10 },
});
