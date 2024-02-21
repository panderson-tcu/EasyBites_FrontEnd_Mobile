import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { 
View,
Text,
StyleSheet,
SafeAreaView,
ScrollView
} from "react-native";

export default function Favorites({navigation}) {
    return (
        <View style={styles.container}>
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>Favorites Screen!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d9d9d9',
        alignIems: 'center',
        justifyContent: 'center',
        marginleft: 30,
        marginTop: 5,
    }
})
