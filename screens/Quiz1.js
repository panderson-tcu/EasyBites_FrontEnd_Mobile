import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Quiz = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quiz1}>
      <ImageBackground
        style={styles.tlCornerIcon}
        resizeMode="cover"
        source={require("../assets/tlCornerIcon.png")}
      />
      <ImageBackground
        style={styles.brCornerIcon}
        resizeMode="cover"
        source={require("../assets/brCornerEBicon.png")}
      />
      <Text style={styles.question1}>Question One</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tlCornerIcon: {
    top: 44,
    left: 23,
    width: 122,
    height: 51,
    position: "absolute",
  },
  brCornerIcon: {
    top: 715,
    left: 229,
    width: 161,
    height: 129,
    position: "absolute",
  },
  question1: {
    top: 242,
    left: 50,
    fontSize: FontSize.size_26xl,
    color: Color.colorGray_100,
    display: "flex",
    width: 294,
    height: 62,
    textAlign: "center",
    fontFamily: FontFamily.Arial,
    fontWeight: "700",
  },
  quiz1: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Quiz;
