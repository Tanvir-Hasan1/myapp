import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground>
           source={require("../assets/welcome.jpeg")}
           style={styles.background} 
        </ImageBackground>
    );
}

export default WelcomeScreen;
const styles = StyleSheet.create({
    background:{
        flex: 1,
        
    }
})