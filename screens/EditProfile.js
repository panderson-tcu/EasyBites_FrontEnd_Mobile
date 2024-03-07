import * as React from "react";
import { 
View,
Text,
StyleSheet,
SafeAreaView,
} from "react-native";

export default function EditProfile({navigation}) {
    return (
        <View style={styles.container}>
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>Edit Profile Screen!</Text>
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
