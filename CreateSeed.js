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
    <View>
      <Text style={styles_c.c_mainText}>Seed Phrase </Text>
      <Text styel={styles_c.c_smallText}>
        Your seed phrase makes it easy to back up and restore your account
      </Text>
    </View>
  );
}

const styles_c = StyleSheet.create({
  c_smallText: {
    fontSize: 18,
    textAlign: "center",
  },
  c_mainText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  c_container: {
    flex: 1,
  },
});
