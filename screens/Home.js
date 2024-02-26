import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import RecipeCard from "../components/RecipeCard";
import styles from "./HomeStyle";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.cardWrapper}>
        <RecipeCard style={styles.card}></RecipeCard>
        <RecipeCard style={styles.card}></RecipeCard>
        <RecipeCard style={styles.card}></RecipeCard>

      </View>
    </SafeAreaView>
  );
};

export default Home;
