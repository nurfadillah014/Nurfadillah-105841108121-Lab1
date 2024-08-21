import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Kategori1 = () => {
  const data = [
    { label: 'Parfum', image: require('./assets/a4.png') },
    { label: 'Dompet Black', image: require('./assets/a7.png') },
    { label: 'Lipstik', image: require('./assets/a8.png') },
    { label: 'Beauty', image: require('./assets/a9.png') },
  ];

  return (
    <View style={styles.container}>
      {/* Header Section with Back Arrow and Categories */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Categories</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <MaterialIcons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
        />
      </View>

      {/* Category Tabs */}
      <View style={styles.categories}>
        {['Women', 'Men', 'Kids'].map((category, index) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryItem,
              index === 0 && styles.selectedCategoryItem
            ]}
          >
            <Text style={[
              styles.categoryText,
              index === 0 && styles.selectedCategoryText
            ]}>
              {category}
            </Text>
            {index === 0 && <View style={styles.underline} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Summer Sales Section */}
      <View style={styles.salesContainer}>
        <Text style={styles.salesText}>SUMMER SALES</Text>
        <Text style={styles.salesSubText}>Up to 30% off</Text>
      </View>

      {/* Other categories */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItemList}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryLabel}>{item.label}</Text>
          </TouchableOpacity>
        )}
        style={styles.categoryList}
      />
    </View>
  );
};

// Styles for the Categories screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    margin: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  selectedCategoryItem: {
    borderBottomWidth: 3,
    borderBottomColor: 'green',
  },
  selectedCategoryText: {
    color: 'green',
  },
  underline: {
    marginTop: 4,
    height: 2,
    backgroundColor: 'green',
    width: '100%',
  },
  salesContainer: {
    backgroundColor: 'green',
    padding: 20,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  salesText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  salesSubText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 8,
  },
  categoryList: {
    marginHorizontal: 16,
  },
  categoryItemList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  categoryLabel: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
});

export default Kategori1;
