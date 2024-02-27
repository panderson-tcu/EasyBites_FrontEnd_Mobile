import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './RecipeInfoStyle'; // Import your styles

const RecipeInfo = () => {
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
          <Text style={styles.recipeName}>Chickpea Salad</Text>
          <View style={styles.allergenIcon}>
            <FontAwesome6 name="wheat-awn" size={16} color="black" />
          </View>
          <View style={styles.recipeInfoRow}>
            <Ionicons name="time-outline" size={16} style={styles.icon}></Ionicons>
            <Text style={styles.recipeInfoItem}>25 mins</Text>
            <Ionicons name="people-outline" size={18} style={styles.icon}></Ionicons>
            <Text style={styles.recipeInfoItem}> 4</Text>
            <FontAwesome6 name="dollar-sign" size={16} color="black" style={styles.icon}/>
            <Text style={styles.recipeInfoItem}>6.71</Text>
          </View>
            <View style={styles.cardView}>
            <Text style={styles.Title}>Ingredients</Text>
            <Text style={styles.recipeIngredients}>1 can Chickpeas (aka Garbanzo Beans) {"\n"} {"\n"} 
                1/2 cup diced Celery (about 2 stalks) {"\n"} {"\n"} 
                1/3 cup diced Pickles (slices will be easiest){"\n"} {"\n"} 
                1/4 cup diced Onion (about 1/4 onion){"\n"} {"\n"} 
                1 1/2 Tbsp Fresh Dill, chopped finely (optional){"\n"} {"\n"} 
                1/4 cup Greek Yogurt{"\n"} {"\n"} 
                Juice of 1 Lemon (about 1.5-2 Tbsp){"\n"} {"\n"} 
                1/2 tsp Salt{"\n"} {"\n"} 
                1/2 tsp Pepper{"\n"} {"\n"} 
                1/2 tsp Garlic Powder{"\n"} {"\n"} 
                1 Tbsp Nutritional Yeast (optional)</Text>
            </View>
            {/* <View style={styles.cardView}>
                <Text style={styles.Title}>Appliances</Text>
                <Image source={require('../assets/largemixing.png')} style={styles.applicanceImage} />
            </View> */}
            <View style={styles.bottomCardView}>
            <Text style={styles.Title}>Directions</Text>
            <Text style={styles.recipeDirections}>Drain and rinse chickpeas and place in a large bowl.{"\n"} 
                Mash until part chunky and part smooth, until desired texture.{"\n"} 
                To dice celery, slice in half lengthwise, and then slice in half lengthwise again, then dice.{"\n"} 
                Add the rest of the ingredients and stir thoroughly.{"\n"} 
                Let sit in fridge for 1 hour if possible to let flavors blend. Add more seasoning if desired.</Text>
            </View>
        </View>
    </ScrollView>
  );
};

export default RecipeInfo;
