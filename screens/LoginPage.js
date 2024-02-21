import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  Text,
  ImageBackground,
  Button,
  TextInput,
} from "react-native";
import styles from './LoginPageStyle';

const LoginPage = ({navigation}) => {

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
      <Pressable 
        style={[styles.loginButton, styles.logInTitleFlexBox]}
        onPress={() => navigation.navigate("Home")}
        >
        <Text 
          style={[styles.login, styles.textTypo]}
        >{`Login`}</Text>
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



export default LoginPage;
