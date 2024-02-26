import { StyleSheet } from 'react-native';
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const styles = StyleSheet.create({
    home: {
      backgroundColor: "#f2f1ed",
      flex: 1,
      width: "100%",
      height: 844,
      overflow: "hidden",
    },
    cardWrapper: {
      flexDirection: 'row',
      flexWrap: 'wrap', // Allow wrapping of cards to the next line
      justifyContent: 'center', // Center the cards horizontally
  
    },
    card: {
    }
  });

  export default styles;