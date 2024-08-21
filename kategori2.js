import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Kategori2 = ({ navigation }) => {
  const categories = [
    { key: 'Dompet' }, { key: 'Scarves' }, { key: 'Blouse' },
    { key: 'Parfum' }, { key: 'Skirt' }, { key: 'Outerwear' },
    { key: 'Pants' }, { key: 'One Set' }, { key: 'Lipstik' }
  ];

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backWrapper}>
          <MaterialIcons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Categories</Text>
        <TouchableOpacity style={styles.searchIconWrapper}>
          <MaterialIcons name="search" size={26} color="#333" />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.buttonAll}>
        <Text style={styles.buttonAllText}>VIEW ALL ITEMS</Text>
      </TouchableOpacity>
      
      <FlatList 
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{item.key}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 20,
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingTop: 20,
  },
  backWrapper: {
    padding: 10,
    marginRight: 10,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  searchIconWrapper: {
    padding: 10,
    marginLeft: 10,
  },
  buttonAll: {
    backgroundColor: 'green',
    paddingVertical: 14,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonAllText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },
  listItem: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    borderRadius: 6,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
});

export default Kategori2;
