import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const VisualCrop = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Crop the Item</Text>
      </View>
      <ImageBackground
        source={require('./assets/a1.png')} // Replace with your image path
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <View style={styles.cropArea}>
            <View style={[styles.corner, styles.cornerTopLeft]} />
            <View style={[styles.corner, styles.cornerTopRight]} />
            <View style={[styles.corner, styles.cornerBottomLeft]} />
            <View style={[styles.corner, styles.cornerBottomRight]} />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchButton}>
          <MaterialIcons
            name="search"
            size={36}
            color="#FFFFFF"
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
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    alignItems: 'center',
    marginTop: 50,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  imageBackground: {
    width: '90%',
    height: 400, // Adjusted height for better visibility
    borderWidth: 2,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adjusted overlay opacity
    justifyContent: 'center',
    alignItems: 'center',
  },
  cropArea: {
    position: 'relative',
    width: 250,
    height: 250,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 10,
  },
  corner: {
    width: 30,
    height: 30,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'transparent',
    position: 'absolute',
  },
  cornerTopLeft: {
    top: -15,
    left: -15,
    borderLeftWidth: 2,
    borderTopWidth: 2,
  },
  cornerTopRight: {
    top: -15,
    right: -15,
    borderRightWidth: 2,
    borderTopWidth: 2,
  },
  cornerBottomLeft: {
    bottom: -15,
    left: -15,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
  },
  cornerBottomRight: {
    bottom: -15,
    right: -15,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },
  searchContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  searchButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
});

export default VisualCrop;
