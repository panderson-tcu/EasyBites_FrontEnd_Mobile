import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { Card } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './RecipeCardStyling'

const RecipeCard = () => {  
    return (
      <View style={styles.cardView}>
        <Card containerStyle={styles.cardComponent}>
          <View style={styles.cardImageContainer}>
              <View style={styles.heartIcon}>
                <Ionicons name="heart-outline" size={24}></Ionicons>
              </View>
            <Card.Image style={styles.cardImage}source={require('../assets/sample-recipe.png')} />
          </View>
            <View style={styles.cardContent}>
            <Text style={styles.recipeName}>Chicken Salad</Text>
            <Text style={styles.recipePrice}>$9.98</Text>
            <View style={styles.timeContainer}>
              <Ionicons name="time-outline" size={16}></Ionicons>
              <Text style={styles.recipeTime}>25 minutes</Text>
              <View style={styles.allergenIcon}>
                <FontAwesome6 name="wheat-awn" size={16} color="black" />
              </View>
            </View>
          </View>
        </Card>
      </View>
    );
  };
  

  
  export default RecipeCard;
  