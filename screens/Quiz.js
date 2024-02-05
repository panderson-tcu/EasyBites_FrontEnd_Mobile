import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Quiz = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quiz0}>
      <ImageBackground
        style={styles.brCornerIcon}
        resizeMode="cover"
        source={require("../assets/brCornerEBicon.png")}
      />
      <Text style={[styles.quizTitle, styles.quizTitleFlexBox]}>
        Personalize Your Easy Bites
      </Text>
      <Pressable
        style={[styles.quizButton, styles.quizTitleFlexBox]}
        onLongPress={() => navigation.navigate("Quiz1")}
      >
        <Text style={[styles.takeQuiz]}>{`Take Quiz `}</Text>
      </Pressable>
      <Pressable style={styles.skip} onPress={() => navigation.navigate("LoginPage")}>
        {/* change later to profile pagenlanding */}
        <Text style={[styles.skip1]}>{`Skip `}</Text>
        {/* implement home page without any preferences selected. */}
      </Pressable>
      <ImageBackground
        style={styles.EBIcon}
        resizeMode="cover"
        source={require("../assets/EBicon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  quizTitleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  brCornerIcon: {
    top: 715,
    left: 229,
    width: 161,
    height: 129,
    position: "absolute",
  },
  quizTitle: {
    top: 323,
    left: 40,
    fontSize: FontSize.size_26xl,
    fontFamily: FontFamily.Arial,
    color: Color.colorGray_100,
    textAlign: "center",
    display: "flex",
    width:320,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    height: 129,
  },
  takeQuiz: {
    left: 25,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    width:100,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.firaSansCondensedBold,
    fontWeight: "700",
  },
  quizButton: {
    top: 523,
    left: 78,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSandybrown,
    width: 234,
    flexDirection: "row",
    paddingHorizontal: 93,
    paddingVertical: 10,
    overflow: "hidden",
  },
  skip1: {
    fontSize: FontSize.size_lg,
    color: Color.colorGray_300,
    width: 36,
    height: 17,
    textAlign: "left",
    fontFamily: FontFamily.firaSansCondensedBold,
    fontWeight: "700",
  },
  skip: {
    left: 177,
    top: 750,
    position: "absolute",
  },
  EBIcon: {
    top: 102,
    left: 98,
    width: 195,
    height: 173,
    position: "absolute",
  },
  quiz0: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Quiz;
