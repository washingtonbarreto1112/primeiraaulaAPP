import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView,} from 'react-native';
import { getCurrentTimestamp } from 'react-native/Libraries/Utilities/createPerformanceLogger';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>One Piece </Text>
      <ScrollView>
      <StatusBar style="auto" />
      <Text style={styles.personagem}>Trafalgar Law:</Text>
      <Image style={styles.img} source={require("./assets/tral.jpg")}/>
      <Text style={styles.personagem}>Yamato:</Text>
      <Image style={styles.img} source={require("./assets/yamato.jpg")}/>
      <Text style={styles.personagem}> Donquixote Rosinante (Corazón):</Text>
      <Image style={styles.img} source={require("./assets/corazon.jpg")}/>  
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: "#8ecae6",
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 40,
    marginTop: 30,
    color: "#ffb703"
  },
  img:{
    width: 300,
    height: 300,
    borderRadius: 10
  },
  personagem:{
    fontSize: 15,
  }
});
