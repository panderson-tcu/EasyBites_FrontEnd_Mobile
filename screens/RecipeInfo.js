import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './RecipeInfoStyle'; // Import your styles
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const RecipeInfo = ({ route }) => {
  // console.log("In RecipeInfo stack screen")
  const {recipe} = route.params;
  const navigation = useNavigation();
  const [recipeInfo, setRecipeInfo] = useState({
    title: '',
    cooktime: '',
    ingredientsQuantity: '',
    estimatedCost: '',
    instructions: '',
    servings: '',
    protein: {},
    ingredients: [],
    appliances: [],
    allergens: [],
  });
  // console.log(recipe)
  // console.log(recipe.recipeId)
  // console.log("about to call useEffect")

  // let recipeId = -10;
  const recipeId = recipe.recipeId

  useEffect(() => {

    const fetchRecipeDetails = async () => {
      const token = await Clerk.session.getToken({ template: 'springBootJWT' });

      if(recipeId){
        axios.get(`https://easybites-portal.azurewebsites.net/recipes/${recipeId}`, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        } )
        .then(response => {
          // console.log(response.data.data)
          setRecipeInfo(response.data.data);
        })
        .catch(error => {
          console.error("Error fetching recipeInfo:", error);
        })
      }
    };
    fetchRecipeDetails();

  }, [recipeId]);
  
  
  // console.log("printing recipeInfo")
  // console.log(recipeInfo)

  const renderAllergenIcons = () => {
    return recipeInfo.allergens.map((allergen) => {
      switch (allergen.name) {
        case 'Shellfish':
          return (
            <View style={[styles.allergenIcon, { backgroundColor: 'rgba(231, 103, 103, 0.67)' }]}>
              <FontAwesome6 name="shrimp" size={16} color="black" />
            </View>
          );
        case 'Fish':
          return (
            <View style={[styles.allergenIcon, { backgroundColor: '#A4B2D8' }]}>
              <Ionicons name="fish-outline" size={16} color="black" />
            </View>
          );
        case 'Milk':
          return (
            <View style={[styles.allergenIcon, { backgroundColor: '#rgba(171, 64, 57, .6)' }]}>
                <MaterialCommunityIcons name="cow" size={16} color="black" />
              </View>
          );
        case 'Soy':
          return (
            <View style={[styles.allergenIcon, { backgroundColor: '#9CB99F' }]}>
                <Text style={styles.allergenText}>soy</Text>
              </View>
          );
        case 'Wheat':
            return (
              <View style={[styles.allergenIcon, { backgroundColor: '#B49782' }]}>
                <FontAwesome6 name="wheat-awn" size={16} color="black" />
              </View>
            );
        case 'Eggs':
          return (
            <View style={[styles.allergenIcon, { backgroundColor: '#E2C971' }]}>
              <MaterialCommunityIcons name="egg-outline" size={16} color="black" />
            </View>
          );
        case 'Peanuts':
          return (
            <View style={[styles.allergenIcon, { backgroundColor: '#AC9BD5' }]}>
                <MaterialCommunityIcons name="peanut-outline" size={16} color="black" />
              </View>
          );
        case 'Tree Nuts':
          return (
            <View style={[styles.allergenIcon, { backgroundColor: '#F7B27D' }]}>
                <Text style={styles.allergenText}>nut</Text>
              </View>
          );
        // Add cases for other allergens and their corresponding icons
        default:
          return null; // Render nothing if the allergen doesn't have a corresponding icon
      }
    });
  };


  // console.log(recipeInfo.servings)
  return (
    <ScrollView>
        <View style={styles.imageContainer}>
            <Image source={{uri: recipeInfo.imageUrl}} style={styles.cardImage} />
            <Pressable style={styles.iconContainerLeft}>
            <Ionicons name="chevron-back-outline" size={24} color="#FFF" onPress={() => navigation.navigate('Home')} currentPage={('RecipeInfo', { recipe })}/>
            </Pressable>
            <View style={styles.iconContainerRight}>
            <TouchableOpacity style={styles.icon}>
                <FontAwesome6 name="heart" size={24} color="#FFF"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
                <Ionicons name="add-circle-outline" size={24} color="#FFF" />
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.recipeName}>{recipeInfo.title}</Text>
          <View style={styles.allergenIconContainer}>
            {renderAllergenIcons()}
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
