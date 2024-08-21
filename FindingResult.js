import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const FindingResults = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={80} color="#007BFF" style={styles.searchIcon} />
      <Text style={styles.text}>Finding similar results...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6F0FF', // Light blue background for a softer look
  },
  searchIcon: {
    marginBottom: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: '600', // Semi-bold for better emphasis
    color: '#333', // Darker color for better readability
  },
});

export default FindingResults;
