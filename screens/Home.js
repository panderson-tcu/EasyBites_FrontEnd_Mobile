import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { 
View,
Text,
Pressable,
StyleSheet,
SafeAreaView,
ScrollView
} from "react-native";

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen!</Text>
            <StatusBar style="auto" />
            <Pressable
                style={styles.haveAnAccountContainer}
                onPress={() => navigation.navigate("LoginPage")}>
          <Text style={styles.haveAnAccount}>{`Back to login page `}</Text>
      </Pressable>
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
