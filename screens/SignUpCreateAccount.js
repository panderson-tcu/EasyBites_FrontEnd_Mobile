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
        theme={{ colors: { background: "#f2f1ed" } }}
      />
      <TextInput
        style={[styles.signUpCreateAccountItem, styles.signChildLayout]}
        placeholder="First Name"
        mode="outlined"
        theme={{ colors: { background: "#f2f1ed" } }}
      />
      <TextInput
        style={[styles.signUpCreateAccountInner, styles.signChildLayout]}
        placeholder="Last Name"
        mode="outlined"
        theme={{ colors: { background: "#f2f1ed" } }}
      />
      <Text style={[styles.username, styles.nameTypo]}></Text>
      <Text style={[styles.firstName, styles.nameTypo]}></Text>
      <Text style={[styles.lastName, styles.nameTypo]}></Text>
      <TextInput
        style={[styles.rectangleTextinput, styles.signChildLayout]}
        placeholder="Password"
        mode="outlined"
        theme={{ colors: { background: "#f2f1ed" } }}
      />
      <Text style={[styles.password, styles.nameTypo]}></Text>
      <TextInput
        style={[styles.signUpCreateAccountChild1, styles.signChildLayout]}
        placeholder="Confirm Password"
        mode="outlined"
        theme={{ colors: { background: "#f2f1ed" } }}
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




/**
 * below this line is the Clerk documentation for Sign up. Will be used for
 * reference in the future but should be kept commented out.
 */


// import * as React from "react";
// import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
// import { useSignUp } from "@clerk/clerk-expo";
 
// export default function SignUpScreen() {
//   const { isLoaded, signUp, setActive } = useSignUp();
 
//   const [firstName, setFirstName] = React.useState("");
//   const [lastName, setLastName] = React.useState("");
//   const [emailAddress, setEmailAddress] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [pendingVerification, setPendingVerification] = React.useState(false);
//   const [code, setCode] = React.useState("");
 
//   // start the sign up process.
//   const onSignUpPress = async () => {
//     if (!isLoaded) {
//       return;
//     }
 
//     try {
//       await signUp.create({
//         firstName,
//         lastName,
//         emailAddress,
//         password,
//       });
 
//       // send the email.
//       await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
 
//       // change the UI to our pending section.
//       setPendingVerification(true);
//     } catch (err) {
//       console.error(JSON.stringify(err, null, 2));
//     }
//   };
 
//   // This verifies the user using email code that is delivered.
//   const onPressVerify = async () => {
//     if (!isLoaded) {
//       return;
//     }
 
//     try {
//       const completeSignUp = await signUp.attemptEmailAddressVerification({
//         code,
//       });
 
//       await setActive({ session: completeSignUp.createdSessionId });
//     } catch (err) {
//       console.error(JSON.stringify(err, null, 2));
//     }
//   };
 
//   return (
//     <SafeAreaView>
//       <View>
//         {!pendingVerification && (
//           <View>
//           <View>
//               <TextInput
//                 autoCapitalize="none"
//                 value={firstName}
//                 placeholder="First Name..."
//                 onChangeText={(firstName) => setFirstName(firstName)}
//               />
//             </View>
//             <View>
//               <TextInput
//                 autoCapitalize="none"
//                 value={lastName}
//                 placeholder="Last Name..."
//                 onChangeText={(lastName) => setLastName(lastName)}
//               />
//             </View>
//             <View>
//               <TextInput
//                 autoCapitalize="none"
//                 value={emailAddress}
//                 placeholder="Email..."
//                 onChangeText={(email) => setEmailAddress(email)}
//               />
//             </View>
  
//             <View>
//               <TextInput
//                 value={password}
//                 placeholder="Password..."
//                 placeholderTextColor="#000"
//                 secureTextEntry={true}
//                 onChangeText={(password) => setPassword(password)}
//               />
//             </View>
  
//             <TouchableOpacity onPress={onSignUpPress}>
//               <Text>Sign up</Text>
//             </TouchableOpacity>
//           </View>
          
//         )}
//         {pendingVerification && (
//           <View>
//             <View>
//               <TextInput
//                 value={code}
//                 placeholder="Code..."
//                 onChangeText={(code) => setCode(code)}
//               />
//             </View>
//             <TouchableOpacity onPress={onPressVerify}>
//               <Text>Verify Email</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// }
