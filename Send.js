import { Text, View, Image } from 'react-native'
import React from 'react'
import TextInputCostum from './component/textinput/textinput'
import ButtonCostum from './component/button/button'

const App =() => {
  return(
     <View style = {{flex : 1}}>
      <View style = {{
        flexbox : 1, justifyContent : 'flex-end', justifyContent : 'space-between', height : 141
      }}>
        <Text style ={{
          fontWeight : 'bold', marginLeft : 41
        }}>
          14:12
        </Text>
        <Text style ={{
          fontSize : 20, fontWeight : 'bold', marginLeft : 20
        }}>
          {'<'}
        </Text>
        <Text style ={{
          fontSize : 30, fontWeight : 'bold', marginLeft : 25
        }}>
          Forgot Password
        </Text>
     </View>

     <View style ={{
      flex : 1, flexDirection : 'column', alignItems : 'center', marginTop : 80,
     }}>
      <Text style ={{
          fontSize : 20, marginLeft : 25, marginRight : 25, marginBottom : 30
        }}>Enter your email address. You will get a link to set a new password via email.
        </Text>
      <TextInputCostum name = "Email"/>
      <Text style={{
        marginBottom : 50
      }}>
      </Text>
      <ButtonCostum text = "SEND" color= 'black' borde= {31} />
      
     </View>

</View>
  )
}

export default App
      