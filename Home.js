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

export default function Home({ navigation }) {
  return (
    /*<View style={styles.container}>
            <Image source={require('./assets/home-banner.png')} style={styles.bannerImage}></Image>
            <View style={styles.content}>
                <Text style={styles.mainText}>Open up Home.js to start working!</Text>
                <Text style={styles.helpText}>All the libraries and assets required are available in the app directory.</Text>
                <Text style={styles.hintText}>Hint: Make use of stack navigation in App.js to navigate between screens!</Text>
            </View>
            <StatusBar style="auto" />
        </View>*/
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainText}>
        Get the world's first non-custodial cypher card
      </Text>
      <Text style={styles.hintText}>Explore all of Web3 in one place</Text>
      <Text style={styles.fixToText}>
        <Image
          source={require("./assets/swap.png")}
          style={{ width: 60, height: 60, margin: 8 }}
        />
        Swap to get instant USD
      </Text>
      <Text style={styles.fixToText}>
        <Image
          source={require("./assets/buy.png")}
          style={{ width: 60, height: 60 }}
        />
        Buy at an affordable price
      </Text>
      <Text style={styles.fixToText}>
        <Image
          source={require("./assets/chain.png")}
          style={{ width: 60, height: 60 }}
        />
        9 Chains supported - more coming soon!
      </Text>
      <Text style={styles.fixToText}>
        <Image
          source={require("./assets/browser.png")}
          style={{ width: 60, height: 60 }}
        />
        Accepted all over the world
      </Text>
      <View>
        <Button
          title="CREATE NEW WALLET"
          color="#FFD700"
          onPress={() => navigation.navigate("CreateSeed", { name: "XYZ" })}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    alignSelf: "center",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 0.25,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  containerAfterImage: {
    marginLeft: 15,
  },
  afterImageFont: {
    fontSize: 18,
  },
  container: {
    flex: 1,
    margin: 28,
    //flexDirection: "column",
    backgroundColor: "#fff",
    //alignItems: "center",
    //marginLeft: 15,
  },

  bannerImage: {
    width: "100%",
    height: "20%",
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  mainText: {
    fontSize: 25,
    fontWeight: "bold",
    //textAlign: "center",
    margin: 18,
  },
  helpText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  hintText: {
    fontSize: 16,
    //textAlign: "center",
    marginTop: 15,
    //marginLeft: 0.5,
    margin: 18,
  },
});
