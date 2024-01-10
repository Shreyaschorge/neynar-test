import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import NeynarLogo from "./components/NeynarLogo";
import WebView, { WebViewMessageEvent } from "react-native-webview";

interface Props {
  // clientId: string;
  // neynarLoginUrl: string;
  // redirectUri?: string;
  onSignInSuccess: (data: any) => void;
}

export const NeynarSigninButton = ({ onSignInSuccess }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openWebView = () => {
    setModalVisible(true);
  };

  const handleMessage = (event: WebViewMessageEvent) => {
    let data;
    try {
      data = JSON.parse(event.nativeEvent.data);
    } catch (e) {
      console.error("Failed to parse message from webview:", e);
      return;
    }

    console.log("event data", data);

    if (data.is_authenticated) {
      setModalVisible(false);
      onSignInSuccess(data);
    }
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
            onMessage={handleMessage}
          />
        </Modal>
      )}
      {/* <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <WebView
          source={{
            uri: "https://app.neynar.com/login?client_id=a1092b41-629f-45e0-b196-b3ff3a8f193f",
          }}
          style={{ marginTop: 20 }}
          onNavigationStateChange={(navState) => {
            if (!navState.loading) {
              setModalVisible(false);
            }
          }}
        />
      </Modal> */}
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
