import * as React from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  ImageBackground,
  View,
} from "react-native";
import styles from './SignUpCreateAccountStyle';

const SignUpCreateAccount = ({navigation}) => {

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


export default SignUpCreateAccount;
