import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


const { width, height } = Dimensions.get("screen");

const Card = ({item}) => {
    return (
        <View className="flex justify-center items-center text-center" style={styles.container}>
            <Image
                className="relative"
                style={styles.imagen}
                source={{uri: item.profilePic}}
            />
            <LinearGradient
                    className="absolute"
                    colors={["#00000000", "rgba(0, 0, 0, 0.7)"]}
                    style={styles.gradient}
            >
            </LinearGradient>
            <Text className="absolute bottom-1 text-center items-center" style={styles.dogName}>{item.name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
container: {
    width: width * 0.4,
    height: width * 0.4,
    margin: 15
},
dogName: {
    fontSize: 25,
    color: 'white',
},
imagen: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: 40,
    
},
gradient:{
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: 40
}
})
export default Card;

