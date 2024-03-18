import { StyleSheet } from 'react-native';
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const styles = StyleSheet.create({
    cardView: {
      borderWidth: 2, // Border width
      borderColor: '#9B8E73', // Border color
      borderRadius: 10, // Border radius
      width: '45%',
      padding: 0,
      // flexShrink: 2,
      marginHorizontal: '2.5%',
      marginBottom: '5%',

    },
    cardComponent: {
      margin: 0,
      borderRadius: 10, // Border radius
      backgroundColor: Color.colorWhitesmoke,
      padding: 10,
    },
    actionIcon: {
      backgroundColor: '#B7A6DE',
      alignSelf: 'flex-end',
      borderRadius: 5,
      padding: 3,
      position: 'absolute', // Position the icon absolutely within the container
      top: 5, // Adjust top positioning as needed
      right: 5, // Adjust right positioning as needed
      zIndex: 1,
    },
    cardImageContainer: {
      flexDirection: 'row',
      position: 'relative',
    },
    cardImage: {
      width: '93%',
      aspectRatio: 6 / 5,
    },
    cardContent: {
      padding: 10,
    },
    recipeName: {
      fontSize: 18,
    },
    recipePrice: {
      fontSize: 16,
    },
    timeContainer: {
      flexDirection: 'row',
      alignItems: 'center', // Align items vertically within the container
    },
    recipeTime: {
      fontSize: 16,
    },
    allergenIcon: {
      backgroundColor: '#F7B27D',
      alignSelf: 'flex-end',
      padding: '4%',
      borderRadius: 15,
    },
    allergenText: {
      fontSize: 10,
    }
  });

  export default styles;