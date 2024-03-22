import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView, Image } from "react-native";
import ListItem from "../components/ListItem"; 
import styles from "./ShoppingCartStyle";
import axios from 'axios';

const ShoppingCart = () => {
  const [krogerToken, setKrogerToken] = useState(null); 

  useEffect(() => {
    const fetchKrogerToken = async () => {
      try {
        const user = 'easybites-c2a707875eab46789923efb8c484d6d5585439769308217340';
        const pwd = 'V3FB6l8vIrwhjiz4XwtYKVij-_YEsuuiMFlymoVb';
        const formData = new URLSearchParams();
        formData.append('grant_type', 'client_credentials');
        formData.append('scope', 'product.compact');
        
        const response = await axios.post('https://api.kroger.com/v1/connect/oauth2/token', formData,  
          {
            headers: {
              Authorization: 'Basic ' + btoa(`${user}:${pwd}`),
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          }
        );
        setKrogerToken(response.data.access_token);
      } catch (error) {
        console.error('Error:', error.response.data);
      }
    };

    fetchKrogerToken();
  }, []);

  const allRecipes = [
    {
      recipeId: 3,
      title: "Beef Pad See Ew",
      cooktime: 60,
      estimatedCost: 24.44,
      ingredients: [
        {
          upcValue: "0001111085605"
        },
        {
          upcValue: "0007096900006"
        },
        {
          upcValue: "0000000004068"
        },
        {
          upcValue: "0027157800000"
        },
        {
          upcValue: "0001111085585"
        },
        {
          upcValue: "0001341202172"
        },
        {
          upcValue: "0001111066955"
        },
        {
          upcValue: "0001111002452"
        }
      ],
    },
    {
      recipeId: 155,
      title: "Shrimp Tacos",
      cooktime: 30,
      estimatedCost: 16.73,
      ingredients: [
        {
          upcValue: "0001111085605"
        },
        {
          upcValue: "0007096900006"
        },
        {
          upcValue: "0000000004068"
        },
        {
          upcValue: "0027157800000"
        },
        {
          upcValue: "0001111085585"
        },
        {
          upcValue: "0001341202172"
        },
        {
          upcValue: "0001111066955"
        },
        {
          upcValue: "0001111002452"
        }
      ],
  },
  {
      recipeId: 105,
      title: "Crispy Potatoes with Eggs",
      cooktime: 30,
      imageUrl: "https://easybitesblobstorage.blob.core.windows.net/recipephotos/105-crispy-potatoes-with-eggs.png",
      estimatedCost: 1.2,
      ingredients: [
        {
          upcValue: "0001111085605"
        },
        {
          upcValue: "0007096900006"
        },
        {
          upcValue: "0000000004068"
        },
        {
          upcValue: "0027157800000"
        },
        {
          upcValue: "0001111085585"
        },
        {
          upcValue: "0001341202172"
        },
        {
          upcValue: "0001111066955"
        },
        {
          upcValue: "0001111002452"
        }
      ],
  },
  {
      recipeId: 106,
      title: "Honey Soy Chicken",
      cooktime: 30,
      estimatedCost: 9.66,
      ingredients: [
        {
          upcValue: "0001111085605"
        },
        {
          upcValue: "0007096900006"
        },
        {
          upcValue: "0000000004068"
        },
        {
          upcValue: "0027157800000"
        },
        {
          upcValue: "0001111085585"
        },
        {
          upcValue: "0001341202172"
        },
        {
          upcValue: "0001111066955"
        },
        {
          upcValue: "0001111002452"
        }
      ],
  },
  {
      recipeId: 107,
      title: "Buffalo Chickpea Wrap",
      cooktime: 20,
      imageUrl: "https://easybitesblobstorage.blob.core.windows.net/recipephotos/107-buffalo-chickpea-wrap.png",
      estimatedCost: 3.31,
      ingredients: [
        {
          upcValue: "0001111085605"
        },
        {
          upcValue: "0007096900006"
        },
        {
          upcValue: "0000000004068"
        },
        {
          upcValue: "0027157800000"
        },
        {
          upcValue: "0001111085585"
        },
        {
          upcValue: "0001341202172"
        },
        {
          upcValue: "0001111066955"
        },
        {
          upcValue: "0001111002452"
        }
      ],
  },
  ];

  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.headerWrap}>
        <Image
          style={styles.EBLogo}
          source={require("../assets/Small-EB-Logo.png")}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          {allRecipes.map((recipe, index) => (
            <ListItem key={index} recipe={recipe} krogerToken={krogerToken} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShoppingCart;