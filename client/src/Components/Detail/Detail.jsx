import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {LinearGradient} from "expo-linear-gradient"
import { FlatList } from "react-native-gesture-handler";


export default function Detail({route, navigation}){
  const {profilePic, name , createdAt, gallery}= route.params
  const dateOf = createdAt.slice(0,10)
  const today = new Date().toISOString().slice(0,10)
  const day1 = new Date(today); 
  const day2 = new Date(dateOf);
  const difference= Math.abs(day2-day1);
  const days = difference/(1000 * 3600 * 24)
  
  return(
    <View style={styles.wrapper}>
      <ImageBackground 
      style={{ width: '100%', height: 350, backgroundImage: 'linear-gradient'}}
      source={{uri: profilePic}}
      >
        <LinearGradient colors={['#00000000', '#ffffffdf']} style={{height : '100%', width : '100%'}}>
          <View style={styles.wrapper}>
              <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Image 
                style={styles.logo}
                source={require("../../images/FindAHome.png")}
                />
              </TouchableOpacity>
              <Text style={styles.title}>{name.toUpperCase()}</Text>
              <View style={styles.banderin}>
                <Text style={{fontWeight: 'bold', textAlign:'right', marginRight: 10}}>{days} dias</Text>
                <Text className='font-bold' style={{textAlign:'right', marginRight: 10}}>buscando hogar</Text>
              </View>
          </View>
        </LinearGradient> 
      </ImageBackground>
      <View style={styles.photos}>
      {gallery? <FlatList 
      keyExtractor={(name) => name}
      data={gallery}
      renderItem={({item}) => (
        <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: item,
        }}
      />
      )}
      ></FlatList> : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    flex:5,
    justifyContent: 'space-between'
  },
  title:{
    textAlign: 'center',
    fontSize: 40,
    color:'#f5c936',
    position: 'absolute',
    top: '40%',
    marginLeft: 15
  },
  logo:{ 
    width: 50,
    height: 50,
    position: 'absolute',
    top: 40 ,
    left: 10,
  },
  banderin:{
    backgroundColor: '#f5c936',
    width: 130,
    heigth: 50,
    position: "absolute",
    top: 40,
    right: 0
  },
  photos:{
    flex:1, 
    flexDirection: 'row',
  }
  


})

