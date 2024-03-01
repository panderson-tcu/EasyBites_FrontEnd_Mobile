import { StyleSheet } from 'react-native';
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const styles = StyleSheet.create({
    loginLayout: {
      height: '5%',
      width: '65%',
      top: '60%',
      left: '18%',
      borderRadius: 15,
      position: "absolute",
      backgroundColor: '#D9D9D9'
    },
    userLoginLayout: {
      height: '5%',
      width: '65%',
      top: '52%',
      left: '18%',
      borderRadius: 15,
      position: "absolute",
      backgroundColor: '#D9D9D9'
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
      width: '100%',
    },
    loginPageChild: {
      top: '100%',
    },
    // username: {
    //   top: '30%',
    //   color: Color.colorGray_200,
    //   left: 75,
    //   textAlign: "left",
    //   fontSize: FontSize.size_xs,
    //   position: "absolute",
    // },
    // password: {
    //   top: '45%',
    //   color: Color.colorGray_200,
    //   left: 75,
    //   textAlign: "left",
    //   fontSize: FontSize.size_xs,
    //   position: "absolute",
    //   backgroundColor: "black",
    // },
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
      left: '33%',
      top: '76%',
      position: "absolute",
    },
    login: {
      color: Color.colorBlack,
      textAlign: "left",
      fontSize: FontSize.size_xs,
    },
    loginButton: {
      top: '70%',
      marginHorizontal: '16.8%',
      backgroundColor: Color.colorSandybrown,
      flexDirection: "row",
      // paddingHorizontal: '1%',
      paddingVertical: Padding.p_5xs,
      alignItems: "center",
      borderRadius: Border.br_3xs,
      overflow: "hidden",
      maxWidth: '60%',
    },
    logInTitle: {
      top: '38%',
      // left: '15%',
      fontSize: FontSize.size_26xl,
      color: Color.colorGray_100,
      textAlign: "center",
      display: "flex",
      width: '100%',
      height: 98,
      fontFamily: FontFamily.Arial,
      fontWeight: "700",
      alignItems: "center",
    },
    EBIcon: {
      top: "17%",
      left: "26%",
      width: 195,
      height: 173,
      position: "relative",
    },
    loginPage: {
      backgroundColor: "#f2f1ed",
      flex: 1,
      width: "100%",
      height: '100%',
      overflow: "hidden",
    },
    usernameInput: {
      paddingLeft: '10%',    
    },
    passwordInput: {
      paddingLeft: '10%',    
    }
  });

  export default styles;