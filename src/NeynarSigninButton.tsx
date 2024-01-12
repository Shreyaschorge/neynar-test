import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import NeynarLogo from "./components/NeynarLogo";
import WebView from "react-native-webview";

export const NeynarSigninButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [webViewUri, setWebViewUri] = useState("https://demo.neynar.com"); // Set initial URL

  const openWebView = () => {
    setModalVisible(true);
  };

  const injectedJavaScript = `
    window.open = function(url, target) {
      if (target === '_blank') {
        window.ReactNativeWebView.postMessage(url);
      } else {
        window.location.href = url;
      }
    };
  `;

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
            source={{ uri: webViewUri }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            scalesPageToFit={true}
            startInLoadingState={true}
            injectedJavaScript={injectedJavaScript}
            onMessage={(event) => {
              const newUrl = event.nativeEvent.data;
              setModalVisible(false);
              setTimeout(() => {
                setModalVisible(true);
                setWebViewUri(newUrl);
              }, 300);
            }}
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
