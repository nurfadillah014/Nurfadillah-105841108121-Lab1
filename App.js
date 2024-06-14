import { StyleSheet, Text, View, TextInput } from "react-native"
import React from "react"

const App =() => {
  const TextInputCostum = ({ name, color }) =>{
    return (
     <TextInput
     placeholder={`Masukkan ${name}`}
     style={{
      height : 60, 
      width : 300,
      borderColor : 'gray',
      borderWidth : 1,
      color : color,
      padding : 10,
      margin : 10,
      borderRadius : 10,
      paddingLeft : 10,
      }}
    />
  )
}
  return (
  <View style = {{
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  }}>
    <TextInputCostum name = "name" color = "black"></TextInputCostum>
    <TextInputCostum name = "Email" color ="red"></TextInputCostum> 
    <TextInputCostum name = "password" color = "black"></TextInputCostum>
    </View>
  )
}
export default App