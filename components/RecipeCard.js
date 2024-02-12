import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const RecipeCard = () => {  
    return (
      <View style={styles.quiz1}>
        <Text
        style={styles.text}>Hello</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    quiz1: {
        backgroundColor: Color.colorWhitesmoke,
        flex: 1,
        width: "100%",
        height: 844,
        overflow: "hidden",
      },
    text: {
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
    }
  });
  
  export default RecipeCard;
  