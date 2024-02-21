const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./screens/LoginPage";
import SignUpCreateAccount from "./screens/SignUpCreateAccount";
import Quiz from "./screens/Quiz";
import Quiz1 from "./screens/Quiz1";
// navigation needed for app stack. run the below in app directory:
// npm install @react-navigation/native @react-navigation/native-stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import Home from "./screens/Home";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);


  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="LoginPage"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpCreateAccount"
              component={SignUpCreateAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Quiz"
              component={Quiz}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="Quiz1"
              component={Quiz1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
