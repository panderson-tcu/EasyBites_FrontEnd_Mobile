import * as React from "react";
//import { Pressable } from 'react-native';
// Screens
import LoginPage from "./screens/LoginPage";
import SignUpCreateAccount from "./screens/SignUpCreateAccount";
import Quiz from "./screens/Quiz";
import Quiz1 from "./screens/Quiz1";
import Home from "./screens/Home";
import ShoppingCart from "./screens/ShoppingCart";
import Favorites from "./screens/Favorites";
import Profile from "./screens/Profile";
// navigation needed for app stack. run the below in app directory:
// npm install @react-navigation/native @react-navigation/native-stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

// Clerk imports
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { ClerkProvider } from "@clerk/clerk-expo";
import Constants from "expo-constants"



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const screenOptions = {
    headerShown: false,
            tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    elevation: 0,
                    height: 70,
                    backgroundColor: '#7B886B',
                    shadowColor: '#EFEBE7',
                    shadowOpacity: 12,
                    shadowRadius: 10,
                    paddingBottom: 10,
                    padding: 10
                }
};


function MyTabs() {
  return (
    <Tab.Navigator screenOptions={ screenOptions }>
        <Tab.Screen 
            name="HomeScreen" 
            component={Home}
            options={{
                tabBarIcon: ({focused}) => {
                    return ( // ternary operator for focused! black focused, cream/white when not
                    <Ionicons name="home-outline" size={40} color={focused ? "#000000": "#EFEBE7"} />
                    )
                }
            }}  /> 
        <Tab.Screen     
            name="Favorites" 
            component={Favorites}
            options={{
                tabBarIcon: ({focused}) => {
                    return ( 
                    <Ionicons name="heart-outline" size={40} color={focused ? "#000000": "#EFEBE7"} />
                    )
                }
            }} />
        <Tab.Screen 
            name="ShoppingCart" 
            component={ShoppingCart}
            options={{
                tabBarIcon: ({focused}) => {
                    return ( 
                    <Ionicons name="cart-outline" size={40} color={focused ? "#000000": "#EFEBE7"} />
                    )
                }
            }} />
        <Tab.Screen 
            name="Profile" 
            component={Profile}
            options={{
                tabBarIcon: ({focused}) => {
                    return ( 
                    <Ionicons name="person-circle-outline" size={40} color={focused ? "#000000": "#EFEBE7"} />
                    )
                }
            }} />
      </Tab.Navigator>
  );

}

function App () {
  return ( 
    <ClerkProvider publishableKey={Constants.expoConfig.extra.clerkPublishableKey}>
      <NavigationContainer>
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
            component={MyTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ClerkProvider>
  );
};

// Default expo App function
// export default function App() {
//   return (
//     <ClerkProvider publishableKey={Constants.expoConfig.extra.clerkPublishableKey}>
//       <SafeAreaView style={styles.container}>
//         <Text>Hello world!</Text>
//       </SafeAreaView>
//     </ClerkProvider>
//   );
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;

