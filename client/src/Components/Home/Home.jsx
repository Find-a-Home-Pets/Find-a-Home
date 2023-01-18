import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App({ navigation }) {
  const dogs = [
    { id: 1, name: "yoshi", age: 2, rescued: "2 days ago" , profilePic: 'https://resizer.glanacion.com/resizer/5QeUzKF3eQwZWQVTbjU7sL2nmgc=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/FHNNVHNWPNHJXBGQMNPDEULCPU.jpg', createdAt: "2023-01-17T22:58:33.462Z"},
    { id: 2, name: "doge", age: 1, rescued: "1 day ago" , profilePic:'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/article/main-picture/617a613c7592b284460012.jpg', createdAt: "2023-01-17T22:58:33.462Z"},
    { id: 3, name: "cheems", age: 3, rescued: "3 days ago" , profilePic:'https://www.latercera.com/resizer/gnJjKC7qAZDFZLjJDzc0kdlgXWI=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/PDW3FDGMEBGVXHM77NEEDMY7KU.jpg',createdAt: "2023-01-17T22:58:33.462Z"},
    { id: 4, name: "cheems samurai", age: 4, rescued: "4 days ago", profilePic:'https://www.consumer.es/app/uploads/2019/07/img_perro-rescatado.jpg',createdAt: "2023-01-17T22:58:33.462Z"},
    { id: 5, name: "firulais", age: 5, rescued: "5 days ago", profilePic: 'https://www.hogarmania.com/archivos/202004/chequeo-veterinario-en-gatos-recogidos-de-la-calle-1280x720x80xX.jpg', createdAt: "2023-01-17T22:58:33.462Z"},
    { id: 6, name: "cachupin", age: 3, rescued: "4 days ago",profilePic: 'https://images.theconversation.com/files/465530/original/file-20220526-24-59vyo6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C5194%2C3452&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip',createdAt: "2023-01-17T22:58:33.462Z" },
    { id: 7, name: "Telmo", age: 5, rescued: "1400 days ago", profilePic: 'https://www.bunko.pet/__export/1630188561615/sites/debate/img/2021/08/28/gato_calle_crop1630188454704.jpeg_976912859.jpeg', createdAt: "2023-01-17T22:58:33.462Z"},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Find a Home App</Text>
      </View>
      <View style={styles.body}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={dogs}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=> navigation.navigate('Detail', item)}>
            <View>
              <Text style={styles.dogName}>{item.name}</Text>
              <Image
                style={{ width: 100, height: 100, marginHorizontal: 80 }}
                source={{
                  uri: item.profilePic,
                }}
              />
              <Text style={styles.dogAge}>{item.age}</Text>
              <Text style={styles.dogRescued}>{item.rescued}</Text>
            </View>
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffa",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  header: {
    backgroundColor: "yellow",
    padding: 20,
  },
  body: {
    backgroundColor: "yellow",
    padding: 10,
  },
  dogName: {
    marginTop: 24,
    padding: 15,
    backgroundColor: "pink",
    fontSize: 18,
    marginHorizontal: 80,
  },
  dogAge: {
    marginTop: 1,
    padding: 4,
    backgroundColor: "orange",
    fontSize: 15,
    marginHorizontal: 80,
  },
  dogRescued: {
    marginTop: 1,
    padding: 4,
    backgroundColor: "red",
    marginHorizontal: 80,
  },
});
