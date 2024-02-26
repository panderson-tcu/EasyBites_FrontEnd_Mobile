import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { 
View,
Text,
StyleSheet,
SafeAreaView,
ScrollView
} from "react-native";

export default function ShoppingCart({navigation}) {
    return (
        <View style={styles.container}>
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>Shopping Cart Screen!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f1ed',
        alignIems: 'center',
        justifyContent: 'center',
        marginleft: 30,
        marginTop: 5,
    }
})
