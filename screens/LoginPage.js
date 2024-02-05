import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  ImageBackground,
  Button,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginPage}>
      <TextInput
        style={[styles.usernameInput, styles.loginLayout]}
        placeholder="Username"
        mode="outlined"
        theme={{
          fonts: { regular: { fontFamily: "Arial", fontWeight: "Bold" } },
          colors: { text: "#000", background: "#d9d9d9" }
        }} />
      <Text style={[styles.username, styles.textTypo]}></Text>

      <TextInput
        style={[styles.passwordInput, styles.loginLayout]}
        placeholder="Password"
        mode="outlined"
        theme={{
          fonts: { regular: { fontFamily: "Arial", fontWeight: "Bold" } },
          colors: { text: "#000", background: "#d9d9d9" },
        }} />
      <Text style={[styles.password, styles.textTypo]}></Text>

      <Pressable
        style={styles.dontHaveAnContainer}
        onPress={() => navigation.navigate("SignUpCreateAccount")}
      >
        <Text style={[styles.text, styles.textTypo]}>
          <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text> 
          {/* not showing up on android view. correct height! */}
          <Text style={styles.signUp}>Sign Up</Text>
        </Text>
      </Pressable>
      <Pressable style={[styles.loginButton, styles.logInTitleFlexBox]}>
        <Text style={[styles.login, styles.textTypo]}>Login</Text>
      </Pressable>
      <Text style={[styles.logInTitle, styles.logInTitleFlexBox]}>
        Welcome Back
      </Text>
      <ImageBackground
        style={styles.EBIcon}
        resizeMode="cover"
        source={require("../assets/EBicon.png")}
      />
    </View>
  );
};

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
    backgroundColor: Color.colorWhitesmoke,
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

export default LoginPage;
