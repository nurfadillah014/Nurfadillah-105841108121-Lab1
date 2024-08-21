import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const katalog1 = () => {
  const categoryList = ['Parfum', 'StylishAttire', 'Dompet', 'CreamBeaty'];
  const [productItems, setProductItems] = useState([
    {
      name: 'Parfum Gel',
      image: require('./assets/a2.png'),
      color: 'pink',
      price: 500000, 
      rating: 38,
      ratingCount: 12,
      isFavorited: false,
    },
    {
      name: 'StylishAttire',
      image: require('./assets/a3.png'),
      color: 'White',
      size: 'L',
      price: 1000000,
      rating: 49,
      ratingCount: 18,
      isFavorited: false,
    },
    {
      name: 'Dompet',
      image: require('./assets/a6.png'),
      color: 'Black',
      price: 750000, 
      rating: 5,
      ratingCount: 42,
      isFavorited: false,
    },
    {
      name: 'CreamBeauty',
      image: require('./assets/a5.png'),
      color: 'Pink',
      price: 300000, 
      rating: 3,
      ratingCount: 20,
      isFavorited: false,
    },
  ]);

  const renderRatingStars = (rating, count) => {
    const stars = Array.from({ length: 5 }).map((_, index) => (
      <MaterialIcons
        key={index}
        name={index < rating ? 'star' : 'star-border'}
        size={18}
        color={index < rating ? '#FFD700' : '#B0B0B0'}
      />
    ));
    return (
      <View style={styles.ratingWrapper}>
        {stars}
        <Text style={styles.ratingCount}>({count})</Text>
      </View>
    );
  };

  const toggleFavorite = (index) => {
    const updatedProducts = productItems.map((item, i) =>
      i === index ? { ...item, isFavorited: !item.isFavorited } : item
    );
    setProductItems(updatedProducts);
  };

  const sortByPrice = (ascending) => {
    const sortedItems = [...productItems].sort((a, b) =>
      ascending ? a.price - b.price : b.price - a.price
    );
    setProductItems(sortedItems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Women's tops</Text>
        <TouchableOpacity style={styles.searchIcon}>
          <MaterialIcons name="search" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal contentContainerStyle={styles.categoryList}>
        {categoryList.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton}>
            <Text style={styles.categoryLabel}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.filterSection}>
        <TouchableOpacity style={styles.filterButton} onPress={() => sortByPrice(true)}>
          <MaterialIcons name="filter-list" size={18} color="#000" />
          <Text style={styles.filterLabel}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => sortByPrice(true)}>
          <MaterialIcons name="arrow-upward" size={18} color="#000" />
          <Text style={styles.filterLabel}>Price: Low to High</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => sortByPrice(false)}>
          <MaterialIcons name="arrow-downward" size={18} color="#000" />
          <Text style={styles.filterLabel}>Price: High to Low</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={productItems}
        renderItem={({ item, index }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{item.name}</Text>
              <Text style={styles.productDetail}>Color: {item.color}</Text>
              {item.size && <Text style={styles.productDetail}>Size: {item.size}</Text>}
              {renderRatingStars(item.rating, item.ratingCount)}
              <Text style={styles.productPrice}>Rp{item.price.toLocaleString('id-ID')}</Text>
            </View>
            <TouchableOpacity onPress={() => toggleFavorite(index)} style={styles.favoriteButton}>
              <FontAwesome
                name={item.isFavorited ? 'heart' : 'heart-o'}
                size={28}
                color={item.isFavorited ? 'red' : '#B0B0B0'}
              />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => String(index)}
        style={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#FFF',
    marginBottom: 50,
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  headerText: {
    fontSize: 34,
    fontWeight: '700',
  },
  searchIcon: {
    padding: 8,
  },
  categoryList: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'green',
    marginHorizontal: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  categoryLabel: {
    fontSize: 18,
    color: '#FFF',
  },
  filterSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
  },
  filterLabel: {
    fontSize: 14,
    marginLeft: 4,
  },
  productList: {
    marginTop: 8,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  productImage: {
    width: 120, 
    height: 120, 
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  productDetail: {
    fontSize: 14,
    color: '#777',
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  starIcon: {
    width: 18,
    height: 18,
  },
  ratingCount: {
    fontSize: 14,
    marginLeft: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '500',
  },
  favoriteButton: {
    padding: 8,
  },
  favoriteIcon: {
    width: 28,
    height: 28,
  },
});

export default katalog1;
