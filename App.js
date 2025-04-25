import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ImageBackground, 
  Platform, 
  StatusBar 
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Top 80% Image Background Section */}
      <ImageBackground 
        source={{ uri: 'https://picsum.photos/600/800' }} 
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image 
            source={require('./app/assets/logo.png')} 
            style={styles.logo} 
          />
          <Text style={styles.logoText}>Set what you don’t need</Text>
        </View>
      </ImageBackground>

      {/* Bottom Bars */}
      <View style={styles.yellowBar} />
      <View style={styles.blueBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'black',
  },
  imageBackground: {
    flex: 0.8, // 80% of the screen height
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    boxShadowColor: 'yellow',

  },
  logoText: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  yellowBar: {
    flex: 0.1, // 10% of the screen height
    backgroundColor: 'yellow',
    borderTopLeftRadius: 20,
  },
  blueBar: {
    flex: 0.1, // 10% of the screen height
    backgroundColor: 'blue',
    borderTopLeftRadius: 20,
  },
});
