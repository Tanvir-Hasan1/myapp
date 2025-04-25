import React from 'react';
import { Image, ImageBackground, Platform, StyleSheet, Text, View, StatusBar } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            source={require("../assets/welcome.jpeg")}
            style={styles.background} 
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
                <Text>What we need here</Text>
            </View>

            <View style={styles.login}></View>
            <View style={styles.signup}></View>
           
        </ImageBackground>
    );
}

export default WelcomeScreen;
const styles = StyleSheet.create({
    background:{
        flex: 1, 
        justifyContent: "flex-end",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    login:{
        backgroundColor: "#fc56f6",
        width: "100%",
        height: 70,
    },
    signup:{
        backgroundColor: "#4ecdc4",
        width: "100%",
        height: 70,
    },
    logo:{
        
        width: 200,
        height: 200,
    },
    logoContainer:{
        alignItems: "center", 
        position: "absolute",
        top: 70,
        
    }
})

