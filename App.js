import * as React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { ClerkProvider } from "@clerk/clerk-expo";
import Constants from "expo-constants";

// Your existing React Navigation imports and setup
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./screens/LoginPage";
import SignUpCreateAccount from "./screens/SignUpCreateAccount";
import Quiz from "./screens/Quiz";
import Quiz1 from "./screens/Quiz1";

const Stack = createNativeStackNavigator();

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
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
      {/* ClerkProvider setup */}
      <ClerkProvider publishableKey={Constants.expoConfig.extra.clerkPublishableKey}>
        <SafeAreaView style={styles.container}>
          <Text>Hello world!</Text>
        </SafeAreaView>
      </ClerkProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
