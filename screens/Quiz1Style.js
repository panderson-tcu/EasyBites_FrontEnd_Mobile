import { StyleSheet } from 'react-native';
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

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
      backgroundColor: "#f2f1ed",
      flex: 1,
      width: "100%",
      height: 844,
      overflow: "hidden",
    },
  });

  export default styles;