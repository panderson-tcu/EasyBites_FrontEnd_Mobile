import * as React from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  ImageBackground,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const SignUpCreateAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUpCreateAccount}>
      <TextInput
        style={[styles.signUpCreateAccountChild, styles.signChildLayout]}
        placeholder="Username"
        mode="outlined"
        theme={{ colors: { background: "#d9d9d9" } }}
      />
      <TextInput
        style={[styles.signUpCreateAccountItem, styles.signChildLayout]}
        placeholder="First Name"
        mode="outlined"
        theme={{ colors: { background: "#d9d9d9" } }}
      />
      <TextInput
        style={[styles.signUpCreateAccountInner, styles.signChildLayout]}
        placeholder="Last Name"
        mode="outlined"
        theme={{ colors: { background: "#d9d9d9" } }}
      />
      <Text style={[styles.username, styles.nameTypo]}></Text>
      <Text style={[styles.firstName, styles.nameTypo]}></Text>
      <Text style={[styles.lastName, styles.nameTypo]}></Text>
      <TextInput
        style={[styles.rectangleTextinput, styles.signChildLayout]}
        placeholder="Password"
        mode="outlined"
        theme={{ colors: { background: "#d9d9d9" } }}
      />
      <Text style={[styles.password, styles.nameTypo]}></Text>
      <TextInput
        style={[styles.signUpCreateAccountChild1, styles.signChildLayout]}
        placeholder="Confirm Password"
        mode="outlined"
        theme={{ colors: { background: "#d9d9d9" } }}
      />
      <Text style={[styles.confirmPassword, styles.textTypo]}></Text>
      <Pressable
        style={styles.haveAnAccountContainer}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Text style={[styles.text, styles.textTypo]}>
          <Text style={styles.haveAnAccount}>{`Have an account? `}</Text>
          <Text style={styles.login}>Login</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.createButton, styles.logInTitleFlexBox]}
        onPress={() => navigation.navigate("Quiz")}
        >
        <Text
          style={[styles.createAccount, styles.textTypo]}
        >{`Create Account `}</Text>
      </Pressable>
      <Text style={[styles.logInTitle, styles.logInTitleFlexBox]}>Welcome</Text>
      <ImageBackground
        style={styles.EBIcon}
        resizeMode="cover"
        source={require("../assets/EBicon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signChildLayout: {
    height: 47,
    width: 296,
    left: 47,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  nameTypo: {
    height: 21,
    width: 57,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.Arial,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    left: 75,
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
    top: 353,
  },
  signUpCreateAccountItem: {
    top: 419,
  },
  signUpCreateAccountInner: {
    top: 486,
  },
  username: {
    top: 366,
  },
  firstName: {
    top: 432,
  },
  lastName: {
    top: 499,
  },
  rectangleTextinput: {
    top: 550,
  },
  password: {
    top: 563,
  },
  signUpCreateAccountChild1: {
    top: 618,
  },
  confirmPassword: {
    top: 632,
    color: Color.colorGray_200,
    left: 75,
    textAlign: "left",
    fontFamily: FontFamily.Arial,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  haveAnAccount: {
    color: Color.colorBlack,
  },
  login: {
    color: Color.colorIndigo,
  },
  text: {
    fontFamily: FontFamily.Arial,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  haveAnAccountContainer: {
    left: 137,
    top: 784,
    position: "absolute",
  },
  createAccount: {
    color: Color.colorBlack,
    fontFamily: FontFamily.Arial,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  createButton: {
    top: 693,
    left: 78,
    backgroundColor: Color.colorSandybrown,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 79,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    overflow: "hidden",
  },
  logInTitle: {
    top: 242,
    left: 104,
    fontSize: FontSize.size_26xl,
    color: Color.colorGray_100,
    display: "flex",
    width: 194,
    height: 62,
    textAlign: "center",
    fontFamily: FontFamily.Arial,
    fontWeight: "700",
  },
  EBIcon: {
    top: 47,
    left: 98,
    width: 195,
    height: 173,
    position: "absolute",
  },
  signUpCreateAccount: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SignUpCreateAccount;
