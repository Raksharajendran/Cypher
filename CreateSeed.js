import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
export default function CreateSeed({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 28,
          alignItems: "center",
          fontWeight: "bold",
          alignSelf: "center",
        }}
      >
        SEED PHRASE
      </Text>
      <Text style={styles_c.c_smallText}>
        Your Seed Phrase makes it easy to back up and restore your account
      </Text>
      <Text style={styles_c.c_warning}>
        WARNING : Never disclose your Secret Recovery Phrase. Anyone with this
        phrase can take your assets forever
      </Text>
    </View>
  );
}

const styles_c = StyleSheet.create({
  c_smallText: {
    margin: 24,
    fontSize: 18,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  c_warning: {
    margin: 24,
    fontSize: 20,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  c_mainText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  c_container: {
    flex: 1,
    margin: 18,
  },
});
