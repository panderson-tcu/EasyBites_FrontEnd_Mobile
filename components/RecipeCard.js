import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { Card } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './RecipeCardStyling'

const RecipeCard = ({recipe, onPress}) => {
    // console.log("recipe card rendering")
    return (
      <TouchableOpacity onPress={onPress} style={styles.cardView}>
        {/* <View style={styles.cardView}> */}
        {/* <View> */}
          <Card containerStyle={styles.cardComponent}>
            <View style={styles.cardImageContainer}>
                <View style={styles.heartIcon}>
                  <Ionicons name="heart-outline" size={24}></Ionicons>
                </View>
              <Card.Image style={styles.cardImage}source={{uri: recipe.imageUrl}} />

            </View>
              <View style={styles.cardContent}>
              <Text style={styles.recipeName}>{recipe.title}</Text>
              <Text style={styles.recipePrice}>${recipe.estimatedCost}</Text>
              <View style={styles.timeContainer}>
                <Ionicons name="time-outline" size={16}></Ionicons>
                <Text style={styles.recipeTime}>{recipe.cooktime} minutes</Text>
                <View style={styles.allergenIcon}>
                  <FontAwesome6 name="wheat-awn" size={16} color="black" />
                </View>
              </View>
            </View>
          </Card>
        {/* </View> */}
      </TouchableOpacity>
      
    );
  };
  

  
  export default RecipeCard;
  