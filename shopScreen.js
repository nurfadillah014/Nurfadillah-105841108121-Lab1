import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Convert prices from dollars to rupiah (1 USD = 15,000 IDR)
const dollarToRupiah = (dollar) => (parseFloat(dollar.replace('$', '')) * 15000).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

const saleProducts = [
    {
        id: '8',
        name: 'Ginny Dress',
        oldPrice: dollarToRupiah('60$'),
        newPrice: dollarToRupiah('50$'),
        imageUrl: require('./assets/a10.png'),
        rating: 4.5,
        discount: 17,
    },
    {
        id: '9',
        name: 'Lilian Dress',
        oldPrice: dollarToRupiah('70$'),
        newPrice: dollarToRupiah('60$'),
        imageUrl: require('./assets/a1.png'),
        rating: 4.0,
        discount: 14,
    },
    {
        id: '10',
        name: 'Liansi Dress',
        oldPrice: dollarToRupiah('80$'),
        newPrice: dollarToRupiah('70$'),
        imageUrl: require('./assets/a2.png'),
        rating: 4.7,
        discount: 12,
    },
    {
        id: '11',
        name: 'Selena Dress',
        oldPrice: dollarToRupiah('90$'),
        newPrice: dollarToRupiah('80$'),
        imageUrl: require('./assets/a3.png'),
        rating: 5.0,
        discount: 11,
    },
    {
        id: '12',
        name: 'Zulaikha Dress',
        oldPrice: dollarToRupiah('100$'),
        newPrice: dollarToRupiah('90$'),
        imageUrl: require('./assets/a4.png'),
        rating: 4.3,
        discount: 10,
    },
    {
        id: '13',
        name: 'Aurora Dress',
        oldPrice: dollarToRupiah('110$'),
        newPrice: dollarToRupiah('100$'),
        imageUrl: require('./assets/a5.png'),
        rating: 4.6,
        discount: 9,
    },
    {
        id: '14',
        name: 'Qiana Dress',
        oldPrice: dollarToRupiah('120$'),
        newPrice: dollarToRupiah('110$'),
        imageUrl: require('./assets/a6.png'),
        rating: 4.9,
        discount: 8,
    },
];

const newProducts = [
    {
        id: '1',
        name: 'Ginny Dress',
        price: dollarToRupiah('30$'),
        imageUrl: require('./assets/a7.png'),
    },
    {
        id: '2',
        name: 'Qiana Dress',
        price: dollarToRupiah('35$'),
        imageUrl: require('./assets/a8.png'),
    },
    {
        id: '3',
        name: 'Qiansi Dress',
        price: dollarToRupiah('40$'),
        imageUrl: require('./assets/a9.png'),
    },
    {
        id: '4',
        name: 'Qianli Dress',
        price: dollarToRupiah('45$'),
        imageUrl: require('./assets/a10.png'),
    },
    {
        id: '5',
        name: 'Louisa Blouse',
        price: dollarToRupiah('50$'),
        imageUrl: require('./assets/a11.webp'),
    },
    {
        id: '6',
        name: 'Levana Vest',
        price: dollarToRupiah('55$'),
        imageUrl: require('./assets/a2.png'),
    },
    {
        id: '7',
        name: 'Gemma Coat',
        price: dollarToRupiah('60$'),
        imageUrl: require('./assets/a3.png'),
    },
];

export default function ShopScreen() {
    const navigation = useNavigation();
    const [favorites, setFavorites] = useState({});
    const { height } = Dimensions.get('window'); // Get screen height

    const toggleFavorite = (id) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [id]: !prevFavorites[id],
        }));
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('catalog1')} style={styles.backButton}>
                    <Text style={styles.backArrow}>Catalog</Text>
                </TouchableOpacity>
                <Image
                    source={{ uri: 'https://zaskiasungkar.com/cdn/shop/files/ZALIKA2_1_d945a756-7ced-4f8d-add9-be2b547f4192.jpg?v=1707888334&width=1000' }}
                    style={[styles.headerImage, { height: height * 0.6 }]} // Use calculated height
                />
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>Muslimah Dress</Text>
                </View>
            </View>

            {/* Sale Section */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Sale</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('catalog1')} style={styles.viewAll}>
                        <Text style={styles.viewAllText}>View all</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.sectionSubtitle}>Super summer sale</Text>
                <ScrollView horizontal>
                    {saleProducts.map((product) => (
                        <View key={product.id} style={styles.productContainer}>
                            <View style={styles.imageContainer}>
                                <Image source={product.imageUrl} style={styles.productImage} />
                                <TouchableOpacity onPress={() => toggleFavorite(product.id)} style={styles.favoriteIcon}>
                                    <Text style={styles.favoriteText}>
                                        {favorites[product.id] ? '♥' : '♡'}
                                    </Text>
                                </TouchableOpacity>
                                <View style={styles.discountContainer}>
                                    <Text style={styles.discountText}>{product.discount}% OFF</Text>
                                </View>
                            </View>
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productOldPrice}>{product.oldPrice}</Text>
                            <Text style={styles.productNewPrice}>{product.newPrice}</Text>
                            <View style={styles.ratingContainer}>
                                {[...Array(5)].map((_, index) => (
                                    <Text key={index} style={styles.star}>
                                        {index < product.rating ? '★' : '☆'}
                                    </Text>
                                ))}
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

            {/* New Section */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>New</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('catalog1')} style={styles.viewAll}>
                        <Text style={styles.viewAllText}>View all</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.sectionSubtitle}>You've never seen it before!</Text>
                <ScrollView horizontal>
                    {newProducts.map((product) => (
                        <View key={product.id} style={styles.productContainer}>
                            <Image source={product.imageUrl} style={styles.productImage} />
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productPrice}>{product.price}</Text>
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
        backgroundColor: '#fff',
    },
    header: {
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
    },
    backArrow: {
        fontSize: 24,
        color: '#fff',
    },
    headerImage: {
        width: '100%',
    },
    headerTextContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    headerText: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
    },
    section: {
        padding: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    viewAll: {
        // Add styling for the "View all" button
    },
    viewAllText: {
        fontSize: 16,
        color: 'black',
    },
    sectionSubtitle: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 10,
    },
    productContainer: {
        marginRight: 10,
    },
    imageContainer: {
        position: 'relative',
    },
    productImage: {
        width: 150,
        height: 150,
    },
    favoriteIcon: {
        position: 'absolute',
        bottom: 6,
        right: 5,
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 5,
        zIndex: 1,
    },
    favoriteText: {
        fontSize: 20,
        color: 'red',
    },
    discountContainer: {
        position: 'absolute',
        top: 5,
        left: 5,
        backgroundColor: 'red',
        color: 'white',
        padding: 5,
        borderRadius: 10,
    },
    discountText: {
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold',
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    productOldPrice: {
        fontSize: 16,
        color: 'gray',
        textDecorationLine: 'line-through',
    },
    productNewPrice: {
        fontSize: 16,
        color: 'red',
    },
    productPrice: {
        fontSize: 16,
        color: 'gray',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    star: {
        color: '#FFD700',
        fontSize: 16,
    },
});