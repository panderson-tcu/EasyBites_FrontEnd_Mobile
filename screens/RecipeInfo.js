import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './RecipeInfoStyle'; // Import your styles
import axios from 'axios';


const RecipeInfo = ({ route }) => {
  console.log("In RecipeInfo stack screen")
  const {recipe} = route.params;
  const [recipeInfo, setRecipeInfo] = useState();
  console.log(recipe)
  console.log(recipe.recipeId)
  console.log("about to call useEffect")

  const recipeId = recipe.recipeId

  useEffect(() => {
    console.log("guess what")

    const fetchRecipeDetails = async () => {
      console.log("chicken butt")
      if(recipeId){
        axios.get(`http://localhost/recipes/${recipeId}`)
        .then(response => {
          console.log("pizza butt")
          setRecipeInfo(response.data.data);
        })
        .catch(error => {
          console.error("Error fetching recipeInfo:", error);
        })
      }
    };
    fetchRecipeDetails();

  }, [recipeId]);
  

  console.log(recipeInfo)

  // console.log(recipeInfo.servings)
  return (
    <ScrollView>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/chickpeasalad.png')} style={styles.cardImage} />
            <TouchableOpacity style={styles.iconContainerLeft}>
            <Ionicons name="chevron-back-outline" size={24} color="#FFF" />
            </TouchableOpacity>
            <View style={styles.iconContainerRight}>
            <TouchableOpacity style={styles.icon}>
                <FontAwesome6 name="heart" size={24} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
                <Ionicons name="add-circle-outline" size={24} color="#FFF" />
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.recipeName}>{recipeInfo.title}</Text>
          <View style={styles.allergenIcon}>
            <FontAwesome6 name="wheat-awn" size={16} color="black" />
          </View>
          <View style={styles.recipeInfoRow}>
            <Ionicons name="time-outline" size={16} style={styles.icon}></Ionicons>
            <Text style={styles.recipeInfoItem}>{recipeInfo.cooktime} mins</Text>
            <Ionicons name="people-outline" size={18} style={styles.icon}></Ionicons>
            <Text style={styles.recipeInfoItem}>{recipeInfo.servings}</Text>
            <FontAwesome6 name="dollar-sign" size={16} color="black" style={styles.icon}/>
            <Text style={styles.recipeInfoItem}>{recipeInfo.estimatedCost}</Text>
          </View>
            <View style={styles.cardView}>
              <Text style={styles.Title}>Ingredients</Text>
              <Text style={styles.recipeIngredients}>{recipeInfo.ingredientsQuantity}</Text>
            </View>
            <View style={styles.bottomCardView}>
              <Text style={styles.Title}>Directions</Text>
              <Text style={styles.recipeDirections}>{recipeInfo.instructions}</Text>
            </View>
        </View>
    </ScrollView>
  );
};

export default RecipeInfo;
