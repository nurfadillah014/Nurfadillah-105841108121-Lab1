import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Impor Gambar
import image1 from './assets/a1.png';
import image2 from './assets/a2.png';
import image3 from './assets/a3.png';
import image4 from './assets/a4.png';
import image5 from './assets/a5.png';
import image6 from './assets/a6.png';
import image7 from './assets/a7.png';

const image = { uri: "https://www.dior.com/en_id/beauty?gad_source=1&gclid=EAIaIQobChMIwuimv5mFiAMV5KZmAh0jVSj6EAAYASAAEgJTc_D_BwE" };
const { height } = Dimensions.get('window'); // Dapatkan tinggi layar

const imageData = [
  { id: '1', uri: image1, name: 'Parfum Milk', price: 'Rp 300.000' },
  { id: '2', uri: image2, name: 'Parfum Gel', price: 'Rp 500.000' },
  { id: '3', uri: image3, name: 'StylishAttire', price: 'Rp 1.000.000' },
  { id: '4', uri: image4, name: 'Parfum', price: 'Rp 450.000' },
  { id: '5', uri: image5, name: 'CreamBeauty', price: 'Rp 300.000' },
  { id: '6', uri: image6, name: 'Dompet', price: 'Rp 750.000' },
  { id: '7', uri: image7, name: 'Dompet Black', price: 'Rp 600.000' },
];

function HomeScreen({ navigation }) {
  const [loaded, error] = useFonts({
    'Metropolis-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
    'Metropolis-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={image} style={[styles.headerImage, { height: height * 0.6 }]} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Muslim Fashion</Text>
          <Text style={styles.saleText}>Sale</Text>
          <TouchableOpacity style={styles.checkButton} onPress={() => console.log('visualTakePhoto')}>
            <Text style={styles.checkButtonText}>Check</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.newSection}>
        <Text style={styles.newSectionTitle}>New</Text>
        <Text style={styles.newSectionSubtitle}>You've never seen it before!</Text>
        <ScrollView horizontal>
          {imageData.map((item) => (
            <View key={item.id} style={styles.productContainer}>
              <View style={styles.imageWrapper}>
                <Image source={item.uri} style={styles.productImage} />
                <View style={styles.newLabel}>
                  <Text style={styles.newLabelText}>New</Text>
                </View>
              </View>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
  },
  headerTextContainer: {
    position: 'absolute',
    bottom: 22,
    left: 22,
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Metropolis-SemiBold',
  },
  saleText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Metropolis-SemiBold',
    marginTop: -10,
    marginBottom: 10,
  },
  checkButton: {
    marginTop: 12,
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 30, // Mengurangi padding untuk membuat tombol lebih pendek
    borderRadius: 50,
  },
  checkButtonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Metropolis-SemiBold',
  },
  newSection: {
    padding: 21,
  },
  newSectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Metropolis-SemiBold',
  },
  newSectionSubtitle: {
    fontSize: 15,
    color: 'gray',
    marginBottom: 15,
  },
  productContainer: {
    marginRight: 11,
  },
  imageWrapper: {
    position: 'relative',
  },
  productImage: {
    width: 160,
    height: 175,
    overflow: 'hidden',
  },
  newLabel: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'black', 
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  newLabelText: {
    color: 'white',
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
});
