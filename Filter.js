import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, PanResponder, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icon from vector-icons

const Filters = ({ navigation }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000000]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrands, setSelectedBrands] = useState([]);

  const colors = ['#000000', '#FFFFFF', '#0000FF', '#FF0000', '#8B4513', '#FFC0CB', '#808080', '#008000', '#FFFF00'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const categories = ['All', 'Women', 'Men', 'Kids'];
  const brands = ['Rabbani', 'lbyLCB', 'Heaven Lights', 'Buttonscarves', 'Bebica', 'Zoya'];

  const minPrice = 0;
  const maxPrice = 3000000;
  const rangeWidth = 320;

  const minPriceAnimation = useRef(new Animated.Value(0)).current;
  const maxPriceAnimation = useRef(new Animated.Value(rangeWidth)).current;

  const updatePriceRange = () => {
    minPriceAnimation.addListener(({ value }) => {
      const min = Math.round((value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      const max = Math.round((maxPriceAnimation._value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      if (min > max) return;
      setSelectedPriceRange([min, max]);
    });

    maxPriceAnimation.addListener(({ value }) => {
      const min = Math.round((minPriceAnimation._value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      const max = Math.round((value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      if (min > max) return;
      setSelectedPriceRange([min, max]);
    });
  };

  const panResponderMin = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newMin = Math.max(0, Math.min(rangeWidth, gestureState.moveX));
        minPriceAnimation.setValue(newMin);
      },
      onPanResponderRelease: () => {
        updatePriceRange();
      },
    })
  ).current;

  const panResponderMax = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newMax = Math.max(minPriceAnimation._value, Math.min(rangeWidth, gestureState.moveX));
        maxPriceAnimation.setValue(newMax);
      },
      onPanResponderRelease: () => {
        updatePriceRange();
      },
    })
  ).current;

  const toggleSelection = (item, setSelectedItems, selectedItems) => {
    setSelectedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const discardFilters = () => {
    setSelectedPriceRange([minPrice, maxPrice]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedCategory('All');
    setSelectedBrands([]);
  };

  const applyFilters = () => {
    console.log('Filters Applied:', {
      selectedPriceRange,
      selectedColors,
      selectedSizes,
      selectedCategory,
      selectedBrands,
    });
  };

  // Function to format numbers as IDR
  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Filter</Text>
      </View>

      <Text style={styles.sectionTitle}>Price Range</Text>
      <View style={styles.priceRangeContainer}>
        <View style={styles.priceBar}>
          <Animated.View
            style={[
              styles.priceIndicator,
              {
                left: minPriceAnimation,
                backgroundColor: '#007BFF',
              },
            ]}
            {...panResponderMin.panHandlers}
          />
          <Animated.View
            style={[
              styles.priceIndicator,
              {
                left: maxPriceAnimation,
                backgroundColor: '#007BFF',
              },
            ]}
            {...panResponderMax.panHandlers}
          />
          <View style={styles.priceRangeOverlay} />
        </View>
        <Text style={styles.priceRangeText}>
          {formatRupiah(selectedPriceRange[0])} - {formatRupiah(selectedPriceRange[1])}
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Color</Text>
      <View style={styles.colorContainer}>
        {colors.map(color => (
          <TouchableOpacity
            key={color}
            style={[
              styles.colorCircle,
              {
                backgroundColor: color,
                borderColor: selectedColors.includes(color) ? '#007BFF' : '#ddd',
              }
            ]}
            onPress={() => toggleSelection(color, setSelectedColors, selectedColors)}
          />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Size</Text>
      <View style={styles.sizeContainer}>
        {sizes.map(size => (
          <TouchableOpacity
            key={size}
            style={[
              styles.sizeButton,
              {
                backgroundColor: selectedSizes.includes(size) ? '#007BFF' : '#fff',
                borderColor: '#ddd',
              }
            ]}
            onPress={() => toggleSelection(size, setSelectedSizes, selectedSizes)}
          >
            <Text style={[
              styles.sizeText,
              {
                color: selectedSizes.includes(size) ? '#fff' : '#000',
              }
            ]}>
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Category</Text>
      <View style={styles.categoryContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              {
                backgroundColor: selectedCategory === category ? '#007BFF' : '#fff',
                borderColor: '#ddd',
              }
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[
              styles.categoryText,
              {
                color: selectedCategory === category ? '#fff' : '#000',
              }
            ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Brand</Text>
      <View style={styles.brandContainer}>
        {brands.map(brand => (
          <TouchableOpacity
            key={brand}
            style={[
              styles.brandButton,
              {
                backgroundColor: selectedBrands.includes(brand) ? '#007BFF' : '#fff',
                borderColor: '#ddd',
              }
            ]}
            onPress={() => toggleSelection(brand, setSelectedBrands, selectedBrands)}
          >
            <Text style={[
              styles.brandText,
              {
                color: selectedBrands.includes(brand) ? '#fff' : '#000',
              }
            ]}>
              {brand}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.discardButton} onPress={discardFilters}>
          <Text style={styles.buttonText}>Discard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  pageTitle: {
    fontSize: 24,
    textAlign: 'center',
    flex: 1,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: '600',
  },
  priceRangeContainer: {
    alignItems: 'center',
    flexGrow: 1,
  },
  priceBar: {
    height: 40,
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#ddd',
    borderRadius: 5,
    position: 'relative',
    justifyContent: 'center',
  },
  priceIndicator: {
    width: 25,
    height: 40,
    backgroundColor: '#007BFF',
    position: 'absolute',
    top: 0,
    borderRadius: 5,
  },
  priceRangeOverlay: {
    position: 'absolute',
    height: '100%',
    backgroundColor: '#007BFF',
    opacity: 0.1,
    borderRadius: 5,
  },
  priceRangeText: {
    fontSize: 16,
    marginTop: 10,
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 10,
    borderWidth: 3,
  },
  sizeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sizeButton: {
    padding: 10,
    margin: 8,
    borderRadius: 8,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeText: {
    fontSize: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  categoryButton: {
    padding: 10,
    margin: 8,
    borderRadius: 8,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 16,
  },
  brandContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  brandButton: {
    padding: 10,
    margin: 8,
    borderRadius: 8,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  discardButton: {
    backgroundColor: '#ff6f61', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Filters;
