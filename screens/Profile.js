import * as React from "react";
import { 
View,
Text,
StyleSheet,
SafeAreaView,
Image,
TouchableOpacity,
Pressable
} from "react-native";
// import EditProfile from "./screens/EditProfile";
import { Color } from "../GlobalStyles";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Switch } from "@rneui/base";

const profile_picture = <Ionicons name="person-circle-outline" size={150} color="#7B886B" />;


export default function Profile({navigation}) {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.profileTop}>
                    <View style={styles.profilePictureContainer}></View>
                        {profile_picture}
                    <Text style={styles.profileName}>Jane Doe</Text>
                </View>

                <Text style={styles.buttonSection}>Account Settings</Text>
                <TouchableOpacity style={styles.profileBottom} activeOpacity={0.5}>
                    <View style={styles.buttonArea}>
                        <Text style={styles.buttonName}>Edit Profile</Text>
                        <MaterialIcons name="arrow-forward-ios" size={20} color="Color.colorGray_200" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.profileBottom} activeOpacity={0.5}>
                    <View style={styles.buttonArea}>
                        <Text style={styles.buttonName}>Change password</Text>
                        <MaterialIcons name="arrow-forward-ios" size={20} color="Color.colorGray_200" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.profileBottom} activeOpacity={0.5}>
                    <View style={styles.buttonArea}>
                        <Text style={styles.buttonName}>Recipe preferences</Text>
                        <MaterialIcons name="arrow-forward-ios" size={20} color="Color.colorGray_200" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.profileBottom} activeOpacity={0.9}>
                    <View style={styles.buttonArea}>
                        <Text style={styles.buttonName}>Push Notifications</Text>
                        <Switch 
                            trackColor={{false: '#EFEBE7', true: '#7B886B'}}
                            style={styles.switch}/>
                    </View>
                </TouchableOpacity>

                <View style={styles.space}></View>
                <Text style={styles.buttonSection}>More</Text>
                <TouchableOpacity style={styles.profileBottom} activeOpacity={0.5}>
                    <View style={styles.buttonArea}>
                        <Text style={styles.buttonName}>About Us</Text>
                        <MaterialIcons name="arrow-forward-ios" size={20} color="Color.colorGray_200" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.profileBottom} activeOpacity={0.5}>
                    <View style={styles.buttonArea}>
                        <Text style={styles.buttonName}>Privacy policy</Text>
                        <MaterialIcons name="arrow-forward-ios" size={20} color="Color.colorGray_200" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.profileBottom} activeOpacity={0.5}>
                    <View style={styles.buttonArea}>
                        <Text style={styles.buttonName}>Terms and conditions</Text>
                        <MaterialIcons name="arrow-forward-ios" size={20} color="Color.colorGray_200" />
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f1ed',
        paddingVertical: 24,
    },
    safeArea: {
        flex: 1,
        backgroundColor: Color.colorWhitesmoke,
    },
    profileTop: {
        height: 250,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileName: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: "600",
        color: Color.colorGray_200,
        textAlign: 'center',

    },
    profilePictureContainer: {
        position: 'relative',
    },
    profileBottom: {
        backgroundColor: Color.colorWhitesmoke, 
        // padding: 10,
    },
    buttonArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        paddingVertical: 10,
    },
    buttonSection: {
        marginTop: 10,
        flexDirection: 'row',
        fontSize: 15,
        marginLeft: 10,
        color: Color.colorGray_200
    },
    buttonName: {
        width: 270,
        fontSize: 20,
        fontWeight: "600",
        color: Color.colorGray_200,
        backgroundColor: Color.colorWhitesmoke,
        marginRight: 30,
        paddingLeft: 20,
    },
    space: {
        width: 400,
        marginTop: 5,
        height: 30,
        backgroundColor: Color.colorWhitesmoke,

    },
    switch: {
        transform: [{scale: 0.7}],
    }

})
