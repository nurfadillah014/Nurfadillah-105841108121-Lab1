import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const katalog2 = () => {
  const categories = ['Parfum', 'StylishAttire', 'Dompet', 'CreamBeaty'];

  const [products, setProducts] = useState([
    {
      name: 'Parfum Gel',
      image: require('./assets/a2.png'),
      color: 'Brown',
      size: 'M',
      originalPrice: 350000,
      price: 280000, // Adjusted for discount
      discount: 20, // Discount percentage
      rating: 5,
      ratingCount: 11,
      loved: false,
      sale: true,
    },
    {
      name: 'StylishAttire',
      image: require('./assets/a3.png'),
      color: 'Pink',
      size: 'L',
      price: 500000,
      discount: 0, // No discount
      rating: 5,
      ratingCount: 16,
      loved: false,
      sale: false,
    },
    {
      name: 'Dompet',
      image: require('./assets/a6.png'),
      color: 'Black',
      size: 'L',
      originalPrice: 900000,
      price: 630000, // Adjusted for discount
      discount: 30, // Discount percentage
      rating: 5,
      ratingCount: 41,
      loved: false,
      sale: true,
    },
    {
      name: 'CreamBeauty',
      image: require('./assets/a5.png'),
      color: 'Green',
      size: 'L',
      price: 755000,
      discount: 0, // No discount
      rating: 3,
      ratingCount: 28,
      loved: false,
      sale: false,
    },
  ]);

  const convertToRupiah = (amount) => {
    return `Rp ${amount.toLocaleString('id-ID')}`;
  };

  const renderStars = (rating, ratingCount) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <MaterialCommunityIcons
          key={i}
          name={i <= rating ? 'star' : 'star-outline'}
          size={20}
          color={i <= rating ? '#FFD700' : '#ccc'}
          style={styles.starIcon}
        />
      );
    }
    stars.push(
      <Text key="ratingCount" style={styles.ratingText}>
        ({ratingCount})
      </Text>
    );
    return stars;
  };

  const toggleLove = (index) => {
    const newProducts = [...products];
    newProducts[index].loved = !newProducts[index].loved;
    setProducts(newProducts);
  };

  const sortProductsByPrice = (ascending) => {
    const sortedProducts = [...products].sort((a, b) =>
      ascending ? a.price - b.price : b.price - a.price
    );
    setProducts(sortedProducts);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.productItem}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.productImage} />
        {item.sale && item.discount > 0 && (
          <View style={styles.saleBadge}>
            <Text style={styles.saleText}>{item.discount}% OFF</Text>
          </View>
        )}
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productColor}>Color: {item.color}</Text>
        <Text style={styles.productSize}>Size: {item.size}</Text>
        <View style={styles.ratingContainer}>
          {renderStars(item.rating, item.ratingCount)}
        </View>
        {item.sale ? (
          <View style={styles.priceContainer}>
            <Text style={styles.originalPrice}>{convertToRupiah(item.originalPrice)}</Text>
            <Text style={styles.salePrice}>{convertToRupiah(item.price)}</Text>
          </View>
        ) : (
          <Text style={styles.productPrice}>{convertToRupiah(item.price)}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.loveButton} onPress={() => toggleLove(index)}>
        <MaterialCommunityIcons
          name={item.loved ? 'heart' : 'heart-outline'}
          size={28}
          color={item.loved ? 'red' : '#ccc'}
          style={styles.loveIcon}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Women's tops</Text>
        <MaterialCommunityIcons name="magnify" size={24} color="black" style={styles.searchIcon} /> {/* Menggunakan ikon vektor */}
      </View>

      <View style={styles.categoriesAndFiltersContainer}>
        <ScrollView horizontal contentContainerStyle={styles.categoryContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton} onPress={() => {/* Handle category press */}}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton} onPress={() => sortProductsByPrice(true)}>
            <MaterialCommunityIcons name="filter-outline" size={18} color="black" />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton} onPress={() => sortProductsByPrice(true)}>
            <MaterialCommunityIcons name="arrow-up" size={18} color="black" />
            <Text style={styles.filterText}>Price: Low to High</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton} onPress={() => sortProductsByPrice(false)}>
            <MaterialCommunityIcons name="arrow-down" size={18} color="black" />
            <Text style={styles.filterText}>Price: High to Low</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        style={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  categoriesAndFiltersContainer: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  categoryButton: {
    backgroundColor: 'green',
    marginHorizontal: 10,
    borderRadius: 20,
    padding: 10,
  },
  categoryText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    fontSize: 14,
    marginLeft: 4,
  },
  productList: {
    marginTop: 8,
  },
  row: {
    justifyContent: 'space-between',
  },
  productItem: {
    flex: 1,
    margin: 8,
    position: 'relative',
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 8,
  },
  productImage: {
    width: '100%',
    height: 190,
    resizeMode: 'cover',
  },
  saleBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'red',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  saleText: {
    color: 'white',
    fontWeight: 'bold',
  },
  productDetails: {
    paddingVertical: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productColor: {
    fontSize: 14,
    color: '#777',
  },
  productSize: {
    fontSize: 14,
    color: '#777',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  starIcon: {
    marginRight: 2,
  },
  ratingText: {
    marginLeft: 4,
    color: '#777',
    fontSize: 14,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    fontSize: 14,
    color: '#777',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  salePrice: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  loveButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    padding: 6,
    borderRadius: 16,
    backgroundColor: 'white'
  },
  loveIcon: {
    alignSelf: 'center',
  },
});

export default katalog2;
