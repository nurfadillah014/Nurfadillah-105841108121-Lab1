import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import backgroundImage from './assets/a3.png'; // Replace with the path to your local image

// ButtonCostum component
const ButtonCostum = ({ text, color, borderRadius, style }) => {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        { backgroundColor: color, borderRadius: borderRadius },
        style // Meneruskan props style ke sini
      ]}
    >
      <Text style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    height: 40,
  },
  headerText: {
    fontSize: 24,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 24,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
});

// App component
const App = () => {
  return (
    <ImageBackground 
      source={backgroundImage} // Use the imported image here
      style={styles.backgroundImage}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{'<'}</Text>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.title}>Visual Search</Text>
          </View>
        </View>

        <View style={{
          flex: 1,
          backgroundColor: 'rgba(128, 128, 128, 0.7)', // Semi-transparent gray background
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
        }}>
          <Text style={styles.description}>
            Search for an outfit by taking a photo or uploading an image
          </Text>
          <ButtonCostum 
            text="TAKE A PHOTO" 
            color='gray' 
            borderRadius={70} 
            style={{ marginBottom: 10 }} // Margin bottom untuk memberikan jarak
          />
          <ButtonCostum 
            text="UPLOAD AN IMAGE" 
            color='green' 
            borderRadius={70} 
            style={{ marginTop: 10 }} // Margin top sebagai tambahan jarak jika diperlukan
          />
        </View>
      </View>
    </ImageBackground>
  );
}

export default App;