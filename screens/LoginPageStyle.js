import { StyleSheet } from 'react-native';
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const styles = StyleSheet.create({
    loginLayout: {
      height: 47,
      width: 296,
      left: 47,
      borderRadius: Border.br_3xs,
      position: "absolute",
    },
    textTypo: {
      textAlign: "center",
      fontSize: FontSize.size_xs,
      fontFamily: FontFamily.Arial,
      fontWeight: "700",
    },
    logInTitleFlexBox: {
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
    },
    loginPageChild: {
      top: 358,
    },
    username: {
      top: 371,
      color: Color.colorGray_200,
      left: 75,
      textAlign: "left",
      fontSize: FontSize.size_xs,
      position: "absolute",
    },
    password: {
      top: 445,
      color: Color.colorGray_200,
      left: 75,
      textAlign: "left",
      fontSize: FontSize.size_xs,
      position: "absolute",
    },
    dontHaveAn: {
      color: Color.colorBlack,
    },
    signUp: {
      color: Color.colorIndigo,
  
    },
    text: {
      width: 155,
      textAlign: "left",
      fontSize: FontSize.size_xs,
    },
    dontHaveAnContainer: {
      left: 118,
      top: 740,
      position: "absolute",
    },
    login: {
      color: Color.colorBlack,
      textAlign: "left",
      fontSize: FontSize.size_xs,
    },
    loginButton: {
      top: 544,
      left: 78,
      backgroundColor: Color.colorSandybrown,
      flexDirection: "row",
      paddingHorizontal: 102,
      paddingVertical: Padding.p_5xs,
      alignItems: "center",
      borderRadius: Border.br_3xs,
      overflow: "hidden",
    },
    logInTitle: {
      top: 246,
      left: 42,
      fontSize: FontSize.size_26xl,
      color: Color.colorGray_100,
      textAlign: "center",
      display: "flex",
      width: 307,
      height: 98,
      fontFamily: FontFamily.Arial,
      fontWeight: "700",
      alignItems: "center",
    },
    EBIcon: {
      top: 51,
      left: 98,
      width: 195,
      height: 173,
      position: "absolute",
    },
    loginPage: {
      backgroundColor: "#f2f1ed",
      flex: 1,
      width: "100%",
      height: 844,
      overflow: "hidden",
    },
    usernameInput: {
      top: 356,
    },
    passwordInput: {
      top: 431
    }
  });

  export default styles;