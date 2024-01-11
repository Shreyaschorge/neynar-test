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
        <Text style={styles.signInText}>Sign in with Neynar</Text>
      </TouchableOpacity>
      {modalVisible && (
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <WebView
            source={{
              uri: "https://app.neynar.com/login?client_id=a1092b41-629f-45e0-b196-b3ff3a8f193f",
            }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
            originWhitelist={["*"]}
            mixedContentMode="compatibility"
            allowsInlineMediaPlayback={true}
            mediaPlaybackRequiresUserAction={false}
            allowFileAccess={true}
            scalesPageToFit={true}
            startInLoadingState={true}
            onNavigationStateChange={(navState) => console.log(navState)}
          />
        </Modal>
      )}
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
