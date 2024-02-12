import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import styles from "./Quiz1Style";

const Quiz = ({navigation}) => {

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


export default Quiz;
