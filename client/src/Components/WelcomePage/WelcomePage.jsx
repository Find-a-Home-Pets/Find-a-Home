import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  Animated,
} from "react-native";
import { useSelector } from "react-redux";
import GoogleImage from "../../images/Google.svg";

const { width, height } = Dimensions.get("window");

const Welcome = ({ navigation }) => {
  const [viewActive, setViewActive] = useState(1);
  const isLoggedIn = useSelector(store=>store.isLoggedIn)

  useEffect(() => {
    if(isLoggedIn)
      navigation.navigate("Home")
  }, [isLoggedIn]);

  //magia circulito expandible detectand el scroll
  const [xPos, setXPos] = useState(0);
  const handleScroll = (pos) => {
    const newXPos = pos;
    setXPos(newXPos);
  };

  /*
    funcion q maneja el desizamiento de circulitos
    fac = factor de multiplicacion
    side = 'top', 'right'  determina el flujo a seguir con los parametros y q retornar
    type = 'moving' o 'static' determina si algo debe estar fijo o moviendose junto con todo el View
  */
  const responsiveHell = (fac,side,type) => {
    const sign = type === 'moving' ? -1 : 1
    const proportion = height / width
    if(side==='top'){
      return (fac * height - height*0.46 - xPos*proportion )*sign
    }
    if(side==='right'){
      return (fac * width - width*0.41 - xPos)*sign
    }
  }

  const onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide =
        Math.round(
          nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
        ) + 1;
      //linea magia circulito
      handleScroll(nativeEvent.contentOffset.x);
      if (slide != viewActive) {
        setViewActive(slide);
      }
    }
  };
  return (
    <View style={styles.container}>
      {/* CIRCULOS DE FUEGO*/}

      {/* FIRST SLIDE 0 0 */}
      <View style={{
            ...styles.slide1,
            ...styles.bg,
            top: 0 * width + xPos,
            right: 0 * width + xPos,
            zIndex: 1,
          }}>
        
      <View
          style={{
            ...styles.slide1,
            ...styles.bg,
            top:  0- xPos,
            right:  0- xPos,
            zIndex: 2,
          }}
        >
        <Image
            style={styles.icon}
            source={require("../../images/icon1-icon3-welcome.png")}
          />
          
        <Text style={styles.text1}>Somos una</Text>
        <Text style={styles.text1}>organización sin</Text>
        <Text style={styles.text1}>fines de lucro que</Text>
        <Text style={styles.text1}>busca ayudar a las</Text>
        <Text style={styles.text1}>mascotas a</Text>
        <Text style={styles.text1}>encontrar un hogar.</Text>
        </View>
      </View>

      {/* SLIDE 2 */}
      <View
        style={{
          ...styles.slide2,
          top: responsiveHell(2,'top','moving'),
          right: responsiveHell(2,'right','moving'),
          zIndex: 2,
          overflow: "hidden",
          borderRadius: width,
        }}
      >
        <Image
          style={{
            resizeMode: "contain",
            top: 0,
            right: 0,
            width: height,
            height: height,
            overflow: "hidden",
            zIndex: 2,
          }}
          source={require("../../images/bg1-welcome.png")}
        />

       

        <View
          style={{
            ...styles.slide2,
            ...styles.bg,
            top: responsiveHell(2,'top','static'),
            right: responsiveHell(2,'right','static'),
            zIndex: 3,
          }}
        >
           <Image
          style={styles.icon}
          source={require("../../images/icon1-icon3-welcome.png")}
        />
                  <Image
            style={styles.imgbg2}
            source={require("../../images/image-bg2-welcome.png")}
          />

          <Text style={styles.text2}>Podrás adoptar a tu</Text>
          <Text style={styles.text2}>mascota soñada o</Text>
          <Text style={styles.text2}>encontrarle un</Text>
          <Text style={styles.text2}>mejor hogar a un</Text>
          <Text style={styles.text2}>gatito rescatado.</Text>
        </View>
      </View>

      {/* SLIDE 3 */}
      <View
        style={{
          ...styles.slide3,
          top: responsiveHell(3,'top','moving'),
          right: responsiveHell(3,'right','moving'),
          zIndex: 5,
          overflow: "hidden",
          borderRadius: width,
        }}
      >
        <Image
          style={{
            resizeMode: "contain",
            top: 0,
            right: 0,
            width: height,
            height: height,
            overflow: "hidden",
            zIndex: 3,
          }}
          source={require("../../images/bg2-welcome.png")}
        />

        <View
          style={{
            ...styles.slide3,
            ...styles.bg,
            top: responsiveHell(3,'top','static'),
            right: responsiveHell(3,'right','static'),
            zIndex: 7,
          }}
        >
          <Image
            style={styles.icon}
            source={require("../../images/icon2-welcome.png")}
          />
          <Text style={styles.text3}>No discriminamos</Text>
          <Text style={styles.text3}>por raza y</Text>
          <Text style={styles.text3}>priorizamos a los</Text>
          <Text style={styles.text3}>que más tiempo</Text>
          <Text style={styles.text3}>lleven sin un hogar.</Text>
        </View>
      </View>

      {/* SLIDE 4 */}
      <View
        style={{
          ...styles.slide4,
          top: responsiveHell(4,'top','moving'),
          right: responsiveHell(4,'right','moving'),
          zIndex: viewActive === 4 ? 15 : 7, //porque sino no deja hacer clicks
          overflow: "hidden",
          borderBottomLeftRadius: width,
        }}
      >
        <Image
          style={{
            resizeMode: "contain",
            top: -height / 2 - width * 0.125,
            right: 0 - width * 0.4 - height * 0.511,
            width: height,
            height: height,
            overflow: "hidden",
            zIndex: 8,
          }}
          source={require("../../images/bg3-welcome.png")}
        />

        <View
          style={{
            ...styles.slide4,
            ...styles.bg,
            top: responsiveHell(4,'top','static'),
            right: responsiveHell(4,'right','static'),
            zIndex: 15,
          }}
        >
          <Image
            style={styles.icon}
            source={require("../../images/icon1-icon3-welcome.png")}
          />

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.textSubTitlesLogin}>Login</Text>
          </TouchableOpacity>

          <Image
            style={styles.icon}
            source={require("../../images/icon1-icon3-welcome.png")}
          />
          
          <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
            <Text style={styles.textTitles}>Registrate</Text>
            <View style={styles.googleCircle}>
              {Platform.OS === "web" ? (
                <Text>WEB REGISTER</Text>
              ) : (
                
                <GoogleImage width={86} height={86} />
              
              )}
            </View>
          </TouchableOpacity>
          <View style={styles.divisionLine}></View>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.textSubTitles}>Ingresar como invitado</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* SCROLL STUFF */}
      <ScrollView
        style={{ zIndex: 14 }}
        onScroll={({ nativeEvent }) => onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        horizontal
      >
        <View
          style={{
            width,
          }}
        ></View>
        <View
          style={{
            width,
          }}
        ></View>
        <View
          style={{
            width,
          }}
        ></View>
        <View
          style={{
            width,
          }}
        ></View>
      </ScrollView>
      <View style={styles.wrapDot}>
        <Text style={viewActive === 1 ? styles.dotActive : styles.dot}>●</Text>
        <Text style={viewActive === 2 ? styles.dotActive : styles.dot}>●</Text>
        <Text style={viewActive === 3 ? styles.dotActive : styles.dot}>●</Text>
        <Text style={viewActive === 4 ? styles.dotActive : styles.dot}>●</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
  },
  bg: {
    position: "absolute",
    resizeMode: "contain",
    width,
    height,
    top: -400,
    right: -280,
  },
  icon: {
    position: "absolute",
    top: "1%",
    right: 20,
    width: "16.4%",
    resizeMode: "contain",
  },
  imgbg2: {
    position: "absolute",
    width,
    height: height * 0.3,
    bottom: 0,
  },
  slide1: {
    position: "absolute",
    width: width * 2,
    height: height * 2,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3A302E",
  },

  slide2: {
    width: width * 2,
    height: height * 2,
    position: "absolute",
    zIndex: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#AB4E68",
  },
  slide3: {
    width: width * 2,
    height: height * 2,
    position: "absolute",
    zIndex: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC733",
  },
  slide4: {
    width: width * 2,
    height: height * 2,
    position: "absolute",
    zIndex: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3A302E",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 30,
  },
  text1: {
    color: "#FFFFFF",
    fontSize: 30,
  },
  text2: {
    color: "#FFFFFF",
    fontSize: 30,
  },
  text3: {
    color: "#3A302E",
    fontSize: 30,
  },
  wrapDot: {
    position: "absolute",
    flexDirection: "row",
    alignSelf: "center",
    bottom: 0,
    marginBottom: 40,
    zIndex: 14
  },
  dotActive: {
    color: "#AB4E68",
    letterSpacing: 20,
    fontSize: 24,
  },
  dot: {
    color: "#ACACAC",
    letterSpacing: 20,
    fontSize: 24,
  },
  container: {
    backgroundColor: "#3A302E",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textTitles: {
    color: "#FFFFFF",
    textAlign: "center",
    position: "relative",
    top: 10,
    marginBottom: 15,
    marginTop: 10,
    fontWeight: "normal",
    fontSize: 35,
  },
  textSubTitles: {
    top: 20,
    color: "#8F8F8F",
    fontWeight: "normal",
    textAlign: "center",
    fontSize: 25,
  },
  textSubTitlesLogin: {
    top: 20,
    color: "#AB4E68",
    fontWeight: "normal",
    textAlign: "center",//hola que onda? 
    fontSize: 35,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    margin: 10,
  },
  googleLogo: {
    width: 50,
    height: 50,
  },
  googleCircle: {
    top: 10,
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 38,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ACACAC",
    width: 86,
    height: 86,
    borderRadius: 100,
  },
  divisionLine: {
    marginTop: 20,
    marginBottom: 20,
    height: 1,
    width: "80%",
    backgroundColor: "#ACACAC",
  },
});

export default Welcome;
