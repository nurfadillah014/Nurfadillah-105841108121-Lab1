import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView, Modal, Animated } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const SortBy = () => {
  const categories = ['Scarves', 'Parfum', 'StylishAttire', 'CreamBeauty'];
  const [products, setProducts] = useState([
    {
      name: 'Perfume',
      image: require('./assets/a10.png'),
      color: 'Pink',
      size: 'M',
      price: 500000,
      rating: 4,
      ratingCount: 12,
      isFavorited: false,
      isOnSale: false,
      discountPercentage: 0,
      isNew: false,
    },
    {
      name: 'Perfume',
      image: require('./assets/a1.png'),
      color: 'Pink',
      size: 'L',
      price: 250000,
      rating: 5,
      ratingCount: 18,
      isFavorited: false,
      isOnSale: true,
      discountPercentage: 10,
      isNew: false,
    },
    {
      name: 'Perfume',
      image: require('./assets/a2.png'),
      color: 'Pink',
      size: 'L',
      price: 500000,
      rating: 5,
      ratingCount: 42,
      isFavorited: false,
      isOnSale: false,
      discountPercentage: 0,
      isNew: false,
    },
    {
      name: 'Stylish Attire',
      image: require('./assets/a3.png'),
      color: 'Green',
      size: 'L',
      price: 1000000,
      rating: 3,
      ratingCount: 28,
      isFavorited: false,
      isOnSale: false,
      discountPercentage: 0,
      isNew: true,
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('Price: lowest to high');

  // Animation setup
  const animValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [animValue]);

  const renderStars = (rating, ratingCount) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <MaterialIcons
          key={i}
          name={i <= rating ? 'star' : 'star-border'}
          size={20}
          color={i <= rating ? '#FFD700' : '#B0B0B0'}
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
    newProducts[index].isFavorited = !newProducts[index].isFavorited;
    setProducts(newProducts);
  };

  const sortProductsByPrice = (ascending) => {
    const sortedProducts = [...products].sort((a, b) =>
      ascending ? a.price - b.price : b.price - a.price
    );
    setProducts(sortedProducts);
  };

  const sortProductsByOption = (option) => {
    switch (option) {
      case 'Popular':
        // Add sorting logic if needed
        break;
      case 'Newest':
        // Add sorting logic if needed
        break;
      case 'Customer Review':
        // Add sorting logic if needed
        break;
      case 'Price: lowest to high':
        sortProductsByPrice(true);
        break;
      case 'Price: highest to low':
        sortProductsByPrice(false);
        break;
      default:
        break;
    }
    setSelectedSortOption(option);
    setModalVisible(false);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.productItem}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.productImage} />
        {item.isOnSale && (
          <View style={styles.saleBadge}>
            <Text style={styles.saleText}>SALE</Text>
          </View>
        )}
        {item.isNew && (
          <View style={styles.newBadge}>
            <Text style={styles.newText}>NEW</Text>
          </View>
        )}
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.ratingContainer}>
          {renderStars(item.rating, item.ratingCount)}
        </View>
        {item.isOnSale ? (
          <View style={styles.priceContainer}>
            <Text style={styles.originalPrice}>Rp {item.price.toLocaleString('id-ID')}</Text>
            <Text style={styles.salePrice}>Rp {(item.price * (1 - item.discountPercentage / 100)).toLocaleString('id-ID')}</Text>
          </View>
        ) : (
          <Text style={styles.productPrice}>Rp {item.price.toLocaleString('id-ID')}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.loveButton} onPress={() => toggleLove(index)}>
        <FontAwesome
          name={item.isFavorited ? 'heart' : 'heart-o'}
          size={28}
          color={item.isFavorited ? 'red' : '#B0B0B0'}
        />
      </TouchableOpacity>
    </View>
  );

  // Animation style
  const animatedTextStyle = {
    transform: [
      {
        translateY: animValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -5], 
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Animated.Text style={[styles.headerTitle, animatedTextStyle]}>Women's Tops</Animated.Text>
        <MaterialIcons name="search" size={24} color="black" />
      </View>

      <ScrollView horizontal contentContainerStyle={styles.categoryContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton} onPress={() => {/* Handle category press */}}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.filterText}>{selectedSortOption}</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        </TouchableOpacity>
      </View> 

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        style={styles.productList}
      />

      {/* Modal for Sort By */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sort by</Text>
            {['Popular', 'Newest', 'Customer Review', 'Price: lowest to high', 'Price: highest to low'].map(option => (
              <TouchableOpacity key={option} onPress={() => sortProductsByOption(option)}>
                <Text style={[styles.modalOption, selectedSortOption === option && styles.selectedOption]}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  categoryContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  categoryButton: {
    backgroundColor: 'green',
    marginHorizontal: 8,
    borderRadius: 20,
    padding: 12,
  },
  categoryText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'cente r',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 4,
  },
  filterText: {
    fontSize: 16,
    color: '#333',
    marginRight: 8,
  },
  productList: {
    marginTop: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  productItem: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
    elevation: 2,
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  saleBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  saleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  newBadge: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: 'green',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  newText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productDetails: {
    padding: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  originalPrice: {
    fontSize: 14,
    color: '#777',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  salePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  loveButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  modalOption: {
    fontSize: 18,
    marginVertical: 8,
    color: '#333',
  },
  selectedOption: {
    fontWeight: 'bold',
    color: 'red',
  },
});

export default SortBy;
