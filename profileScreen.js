import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProfilePage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My profile</Text>
        <TouchableOpacity style={styles.searchIconContainer}>
          <Icon name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('./assets/Nurfadillah.jpg')} 
          style={styles.profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Widiyanti</Text>
          <Text style={styles.profileEmail}>widiyantitkj@mail.com</Text>
        </View>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuText}>My orders</Text>
              <Text style={styles.menuDetail}>Already have 12 orders</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuText}>Shipping addresses</Text>
              <Text style={styles.menuDetail}>3 addresses</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuText}>Payment methods</Text>
              <Text style={styles.menuDetail}>Visa **34</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuText}>Promocodes</Text>
              <Text style={styles.menuDetail}>You have special promocodes</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuText}>My reviews</Text>
              <Text style={styles.menuDetail}>Reviews for 4 items</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuText}>Settings</Text>
              <Text style={styles.menuDetail}>Notifications, password</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    paddingVertical: 30,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 30, 
  },
  searchIconContainer: {
    padding: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: 'gray',
  },
  menuContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuTextContainer: {
    flex: 1,
  },
  menuText: {
    fontSize: 20,
    fontWeight: '500',
  },
  menuDetail: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  menuIcon: {
    marginLeft: 10,
  },
});