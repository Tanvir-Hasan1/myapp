import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.Icon1}>

            </View>
            <View style={styles.Icon2}>

            </View>
            
            <Image style={styles.image} source={require("../assets/image.jpg")}/>
        </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    Icon1:{
        height: 50,
        width: 50,
        backgroundColor: "#fc56f6",
        position: "absolute",
        top: 30,
        left: 30,

    },
    Icon2:{
        height: 50,
        width: 50,
        backgroundColor: "#0c56f6",
        position: "absolute",
        top: 30,
        right: 30,

    },
    container:{
        flex: 1,
        backgroundColor: "#000",
    },
    image:{
        height: "100%",
        width: "100%",
        resizeMode: "contain",
        
    }
})