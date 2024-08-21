import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonCostum = ({ color, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{
        backgroundColor: color,
        width: 350,
        height: 80,
        borderRadius: 20,
        justifyContent: 'center',
      }}>
        <Text style={{
          textAlign: 'center',
          fontSize: 30,
          color: 'white',
          fontWeight: 'bold',
        }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ButtonCostum;
