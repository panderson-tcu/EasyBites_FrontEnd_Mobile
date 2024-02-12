import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quiz0}>
      <RecipeCard></RecipeCard>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default Home;
