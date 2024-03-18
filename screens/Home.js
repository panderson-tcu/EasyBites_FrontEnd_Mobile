import React, {useState, useEffect} from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import RecipeCard from "../components/RecipeCard";
import FilterPopup from '../components/FilterPopup';
import styles from "./HomeStyle";
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import { useAuth } from "@clerk/clerk-expo";


const Home = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const navigation = useNavigation();
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState(null);

  console.log(`Hello, ${userId} your current active session is ${sessionId}`)
  const session = clerkClient.sessions.getToken(sessionId, template);

  console.log("entering Home page")
  useEffect(() => {
    console.log("retrieving all recipes from backend")
    // axios.get("https://easybites-portal.azurewebsites.net/recipes/approved")
    axios.get("http:/localhost/recipes/approved")
      .then(response => {
        setRecipes(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching recipes:", error);
      })
  }, []);

  const allRecipes = [
        {
            recipeId: 3,
            title: "Taco Bowl",
            cooktime: 35,
            imageUrl: "https://easybitesblobstorage.blob.core.windows.net/recipephotos/207-taco-bowl.png",
            estimatedCost: 15.04,
            protein: {
                proteinId: 1001,
                proteinName: "Beef"
            },
            allergens: [
                {
                    allergenId: 2008,
                    name: "None"
                }
            ],
        },
        {
            recipeId: 154,
            title: "Beef Tacos",
            cooktime: 20,
            imageUrl: "https://easybitesblobstorage.blob.core.windows.net/recipephotos/154-beef-tacos.png",
            estimatedCost: 13.73,
            protein: {
                proteinId: 1001,
                proteinName: "Beef"
            },
            allergens: [
                {
                    allergenId: 2008,
                    name: "None"
                }
            ],
        },
        {
            recipeId: 155,
            title: "Shrimp Tacos",
            cooktime: 30,
            imageUrl: "https://easybitesblobstorage.blob.core.windows.net/recipephotos/155-shrimp-tacos.png",
            estimatedCost: 16.73,
            protein: {
                proteinId: 1004,
                proteinName: "Seafood"
            },
            allergens: [
                {
                    allergenId: 2006,
                    name: "Shellfish"
                }
            ],
        },
        {
            recipeId: 153,
            title: "Chicken Tacos",
            cooktime: 30,
            imageUrl: "https://easybitesblobstorage.blob.core.windows.net/recipephotos/153-chicken-tacos.png",
            estimatedCost: 13.33,
            protein: {
                proteinId: 1000,
                proteinName: "Chicken"
            },
            allergens: [
                {
                  allergenId: 2008,
                  name: "None"
                }
            ],
        },
        {
            recipeId: 105,
            title: "Crispy Potatoes with Eggs",
            cooktime: 30,
            imageUrl: "https://easybitesblobstorage.blob.core.windows.net/recipephotos/105-crispy-potatoes-with-eggs.png",
            estimatedCost: 1.2,
            protein: {
                proteinId: 1005,
                proteinName: "None"
            },
            allergens: [
                {
                  allergenId: 2001,
                  name: "Eggs"
                }
            ],
        },
        {
            recipeId: 106,
            title: "Honey Soy Chicken",
            cooktime: 30,
            imageUrl: "https://easybitesblobstorage.blob.core.windows.net/recipephotos/106-honey-soy-chicken.png",
            estimatedCost: 9.66,
            protein: {
                proteinId: 1000,
                proteinName: "Chicken"
            },
            allergens: [
                {
                  allergenId: 2000,
                  name: "Milk"
                },
                {
                  allergenId: 2004,
                  name: "Soy"
                }
            ],
        },
        {
            recipeId: 107,
            title: "Buffalo Chickpea Wrap",
            cooktime: 20,
            imageUrl: "https://easybitesblobstorage.blob.core.windows.net/recipephotos/107-buffalo-chickpea-wrap.png",
            estimatedCost: 3.31,
            protein: {
                proteinId: 1005,
                proteinName: "None"
            },
            allergens: [
                {
                  allergenId: 2005,
                  name: "Wheat"
                }
            ],
        },
        {
            recipeId: 205,
            title: "Burger in a Bowl",
            cooktime: 20,
            imageUrl: "https://easybitesblobstorage.blob.core.windows.net/recipephotos/205-burger-in-a-bowl.png",
            estimatedCost: 15.45,
            protein: {
                proteinId: 1001,
                proteinName: "Beef"
            },
            allergens: [
                {
                  allergenId: 2008,
                  name: "None"
                }
            ],
        },
        {
            recipeId: 206,
            title: "Spicy Turkey Pasta",
            cooktime: 30,
            imageUrl: "https://easybitesblobstorage.blob.core.windows.net/recipephotos/206-spicy-turkey-pasta.png",
            estimatedCost: 18.22,
            protein: {
                proteinId: 1006,
                proteinName: "Turkey"
            },
            allergens: [
                {
                  allergenId: 2008,
                  name: "None"
                }
            ],
        },
        {
            recipeId: 203,
            title: "Chicken Burrito Bowl",
            cooktime: 45,
            imageUrl: "https://easybitesblobstorage.blob.core.windows.net/recipephotos/203-chicken-burrito-bowl.png",
            estimatedCost: 12.15,
            protein: {
                proteinId: 1000,
                proteinName: "Chicken"
            },
            allergens: [
                {
                  allergenId: 2008,
                  name: "None"
                }
            ],
        },
        {
            recipeId: 208,
            title: "Mediteranean Chicken Bowl",
            cooktime: 60,
            imageUrl: "https://easybitesblobstorage.blob.core.windows.net/recipephotos/208-mediteranean-chicken-bowl.png",
            estimatedCost: 9.2,
            protein: {
                proteinId: 1000,
                proteinName: "Chicken"
            },
            allergens: [
                {
                  allergenId: 2008,
                  name: "None"
                }
            ],
        },
        {
            recipeId: 209,
            title: "Turkey Taco Bowl",
            cooktime: 30,
            imageUrl: "https://easybitesblobstorage.blob.core.windows.net/recipephotos/209-turkey-taco-bowl.png",
            estimatedCost: 13.05,
            protein: {
                "proteinId": 1006,
                "proteinName": "Turkey"
            },
            allergens: [
                {
                  allergenId: 2008,
                  name: "None"
                }
            ],
        },
        {
            recipeId: 212,
            title: "Green Chile Chicken Enchiladas",
            cooktime: 45,
            imageUrl: "https://easybitesblobstorage.blob.core.windows.net/recipephotos/212-green-chile-chicken-enchiladas.png",
            estimatedCost: 7.41,
            protein: {
                proteinId: 1000,
                proteinName: "Chicken"
            },
            allergens: [
                {
                  allergenId: 2000,
                  name: "Milk"
                }
            ],
        },
        
        {
            recipeId: 216,
            title: "General Tso's Chicken Bowl",
            cooktime: 30,
            imageUrl: "https://easybitesblobstorage.blob.core.windows.net/recipephotos/216-general-tso-chicken-bowl.png",
            ingredientsQuantity: "1 lb Chicken Thighs\n1 Bag Frozen Broccoli\n6 Tbsp Corn Starch\nWhite Rice\n1/2 cup General Tso's Sauce\nCooking oil",
            estimatedCost: 9.26,
            protein: {
                proteinId: 1000,
                proteinName: "Chicken"
            },
            allergens: [
                {
                  allergenId: 2005,
                  name: "Wheat"
                },
                {
                  allergenId: 2004,
                  name: "Soy"
                }
            ],
        },
        {
            recipeId: 217,
            title: "Orange Chicken Bowl",
            cooktime: 30,
            imageUrl: "https://easybitesblobstorage.blob.core.windows.net/recipephotos/217-orange-chicken-bowl.png",
            estimatedCost: 9.2,
            protein: {
                proteinId: 1000,
                proteinName: "Chicken"
            },
            allergens: [
                {
                  allergenId: 2004,
                  name: "Soy"
                },
                {
                  allergenId: 2005,
                  name: "Wheat"
                }
            ],
        },
        {
            recipeId: 210,
            title: "Chicken Adobo",
            cooktime: 60,
            imageUrl: "https://easybitesblobstorage.blob.core.windows.net/recipephotos/210-chicken-adobo.png",
            estimatedCost: 8.29,
            protein: {
                proteinId: 1000,
                proteinName: "Chicken"
            },
            allergens: [
                {
                  allergenId: 2004,
                  name: "Soy"
                }
            ],
        },
        {
            recipeId: 218,
            title: "Tuna Poke Bowl",
            cooktime: 45,
            imageUrl: "https://easybitesblobstorage.blob.core.windows.net/recipephotos/218-tuna-poke-bowl.png",
            estimatedCost: 7.5,
            protein: {
                proteinId: 1004,
                proteinName: "Seafood"
            },
            allergens: [
                {
                    allergenId: 2004,
                    name: "Soy"
                },
                {
                    allergenId: 2007,
                    name: "Fish"
                }
            ],
        }
    ]

    // const handleSearch = (query) => {
    //   setSearchQuery(query);
    // };
    // const filteredRecipes = allRecipes.filter((recipe) =>
    //   recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    const filteredRecipes = recipes.filter(recipe => {
      // Apply search query filter
      const includesSearchQuery = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
  
      // Apply additional filters if appliedFilters exist
      if (appliedFilters) {
        const { maxPrice, maxCookTime, selectedProtein } = appliedFilters;
        const meetsPriceCriteria = recipe.estimatedCost <= maxPrice || maxPrice === '';
        const meetsCookTimeCriteria = recipe.cooktime <= maxCookTime || maxCookTime === '';
        const meetsProteinCriteria = selectedProtein === '' || recipe.protein.proteinName === selectedProtein;
        return includesSearchQuery && meetsPriceCriteria && meetsCookTimeCriteria && meetsProteinCriteria;
      }
  
      return includesSearchQuery;
    });
  
    const handleApplyFilters = (filters) => {
      setAppliedFilters(filters);
      setFilterVisible(false);
    };

  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.headerWrap}>
        <Image
          style={styles.EBLogo}
          source={require("../assets/Small-EB-Logo.png")}/>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          mode="outlined"
          theme={{
            fonts: { regular: { fontFamily: "Arial", fontWeight: "Bold" } },
            colors: { text: "#000", background: "#f2f1ed" }
          }} 
          onChangeText={setSearchQuery}
          />
        <Ionicons name="filter-outline" size={24} style={styles.filterIcon} onPress={() => setFilterVisible(true)} />        
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.cardWrapper}>
          {filteredRecipes.map((recipe) => (
                        <RecipeCard style={styles.card} key={recipe.recipeId} recipe={recipe} onPress={() => navigation.navigate('RecipeInfo', { recipe })} currentPage={'Home'}>
                        </RecipeCard>
                    ))}
        </View>
      </ScrollView>
      <FilterPopup visible={filterVisible} onClose={() => setFilterVisible(false)} onApply={handleApplyFilters} />
    </SafeAreaView>
  );
};

export default Home;
