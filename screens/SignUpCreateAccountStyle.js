// import { StyleSheet } from 'react-native';
// import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

// const styles = StyleSheet.create({
//     signChildLayout: {
//       height: 47,
//       width: 296,
//       left: 47,
//       borderRadius: Border.br_3xs,
//       position: "absolute",
//     },
//     nameTypo: {
//       height: 21,
//       width: 57,
//       textAlign: "left",
//       color: Color.colorGray_200,
//       fontFamily: FontFamily.Arial,
//       fontWeight: "700",
//       fontSize: FontSize.size_xs,
//       left: 75,
//       position: "absolute",
//     },
//     textTypo: {
//       textAlign: "left",
//       fontFamily: FontFamily.Arial,
//       fontWeight: "700",
//     },
//     logInTitleFlexBox: {
//       alignItems: "center",
//       position: "absolute",
//     },
//     signUpCreateAccountChild: {
//       top: 353,
//     },
//     signUpCreateAccountItem: {
//       top: 419,
//     },
//     signUpCreateAccountInner: {
//       top: 486,
//     },
//     username: {
//       top: 366,
//     },
//     firstName: {
//       top: 432,
//     },
//     lastName: {
//       top: 499,
//     },
//     rectangleTextinput: {
//       top: 550,
//     },
//     password: {
//       top: 563,
//     },
//     signUpCreateAccountChild1: {
//       top: 618,
//     },
//     confirmPassword: {
//       top: 632,
//       color: Color.colorGray_200,
//       left: 75,
//       textAlign: "left",
//       fontFamily: FontFamily.Arial,
//       fontWeight: "700",
//       fontSize: FontSize.size_xs,
//       position: "absolute",
//     },
//     haveAnAccount: {
//       color: Color.colorBlack,
//     },
//     login: {
//       color: Color.colorIndigo,
//     },
//     text: {
//       fontFamily: FontFamily.Arial,
//       fontWeight: "700",
//       textAlign: "left",
//       fontSize: FontSize.size_xs,
//     },
//     haveAnAccountContainer: {
//       left: 137,
//       top: 784,
//       position: "absolute",
//     },
//     createAccount: {
//       color: Color.colorBlack,
//       fontFamily: FontFamily.Arial,
//       fontWeight: "700",
//       textAlign: "left",
//       fontSize: FontSize.size_xs,
//     },
//     createButton: {
//       top: 693,
//       left: 78,
//       backgroundColor: Color.colorSandybrown,
//       flexDirection: "row",
//       justifyContent: "center",
//       paddingHorizontal: 79,
//       paddingVertical: Padding.p_5xs,
//       borderRadius: Border.br_3xs,
//       alignItems: "center",
//       overflow: "hidden",
//     },
//     logInTitle: {
//       top: 242,
//       left: 104,
//       fontSize: FontSize.size_26xl,
//       color: Color.colorGray_100,
//       display: "flex",
//       width: 194,
//       height: 62,
//       textAlign: "center",
//       fontFamily: FontFamily.Arial,
//       fontWeight: "700",
//     },
//     EBIcon: {
//       top: 47,
//       left: 98,
//       width: 190,
//       height: 173,
//       position: "absolute",
//     },
//     signUpCreateAccount: {
//       backgroundColor: "#f2f1ed",
//       flex: 1,
//       width: "100%",
//       height: 844,
//       overflow: "hidden",
//     },
//   });

//   export default styles;
import { StyleSheet } from 'react-native';
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const styles = StyleSheet.create({
    signChildLayout: {
      height: '5%',
      width: '73%',
      left: '15%',
      borderRadius: 15,
      position: "absolute",
    },
    nameTypo: {
      height: '2.5%',
      width: '19%',
      textAlign: "left",
      color: Color.colorGray_200,
      fontFamily: FontFamily.Arial,
      fontWeight: "700",
      fontSize: FontSize.size_xs,
      left: '30%',
      position: "absolute",
    },
    textTypo: {
      textAlign: "left",
      fontFamily: FontFamily.Arial,
      fontWeight: "700",
    },
    logInTitleFlexBox: {
      alignItems: "center",
      position: "absolute",
    },
    signUpCreateAccountChild: {
      top: '43%',
      paddingLeft: '10%',
      backgroundColor: '#D9D9D9'
    },
    signUpCreateAccountItem: {
      top: '50%',
      paddingLeft: '10%',
      backgroundColor: '#D9D9D9'
    },
    signUpCreateAccountInner: {
      top: '57%',
      paddingLeft: '10%',
      backgroundColor: '#D9D9D9'
    },
    // username: {
    //   top: '45%',
    //   backgroundColor: '#D9D9D9'
    // },
    // firstName: {
    //   top: '53%',
    //   backgroundColor: '#D9D9D9'
    // },
    // lastName: {
    //   top: '61%',
    //   backgroundColor: '#D9D9D9'
    // },
    rectangleTextinput: {
      top: '64%',
      backgroundColor: '#D9D9D9',
      paddingLeft: '10%'
    },
    // password: {
    //   top: '69%',
    //   backgroundColor: '#D9D9D9'
    // },
    signUpCreateAccountChild1: {
      top: '71%',
      backgroundColor: '#D9D9D9',
      paddingLeft: '10%'
    },
    // confirmPassword: {
    //   top: '75%',
    //   color: Color.colorGray_200,
    //   left: '25%',
    //   textAlign: "left",
    //   fontFamily: FontFamily.Arial,
    //   fontWeight: "700",
    //   fontSize: FontSize.size_xs,
    //   position: "absolute",
    //   borderRadius: 15,
    // },
    haveAnAccount: {
      color: Color.colorBlack,
    },
    login: {
      color: Color.colorIndigo,
    },
    // text: {
    //   fontFamily: FontFamily.Arial,
    //   fontWeight: "700",
    //   textAlign: "left",
    //   fontSize: FontSize.size_xs,
    // },
    haveAnAccountContainer: {
      left: '33%',
      top: '88%',
      position: "absolute",
    },
    // createAccount: {
    //   color: Color.colorBlack,
    //   fontFamily: FontFamily.Arial,
    //   fontWeight: "700",
    //   textAlign: "left",
    //   fontSize: FontSize.size_xs,
    // },
    createButton: {
      top: '82%',
      left: '25%',
      backgroundColor: Color.colorSandybrown,
      flexDirection: "row",
      justifyContent: "center",
      paddingHorizontal: '15%',
      paddingVertical: Padding.p_5xs,
      borderRadius: Border.br_3xs,
      alignItems: "center",
      overflow: "hidden",
    },
    logInTitle: {
      top: '33%',
      left: '25%',
      fontSize: FontSize.size_26xl,
      color: Color.colorGray_100,
      display: "flex",
      width: '54%',
      height: '7%',
      textAlign: "center",
      fontFamily: FontFamily.Arial,
      fontWeight: "700",
    },
    EBIcon: {
      top: '10%',
      left: '28%',
      width: 195,
      height: 173,
      position: "absolute",
    },
    signUpCreateAccount: {
      backgroundColor: "#f2f1ed",
      flex: 1,
      width: "100%",
      height: '100%',
      overflow: "hidden",
    },
  });

  export default styles;
