import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window'); // Get window width

const VisualTakePhoto = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Search by taking a photo</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/a11.webp')} 
          style={styles.image}
        />
      </View>
      <View style={styles.cameraContainer}>
        <TouchableOpacity style={styles.cameraButton}>
          <MaterialIcons
            name="camera-alt"
            size={36} 
            color="#FFF"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 50,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#',
  },
  imageContainer: {
    flex: 1,
    marginBottom: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
  },
  image: { 
    width: width - 32,
    height: width * 1.5, 
    resizeMode: 'cover', 
  },
  cameraContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  cameraButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'green', 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5, 
  },
});

export default VisualTakePhoto;