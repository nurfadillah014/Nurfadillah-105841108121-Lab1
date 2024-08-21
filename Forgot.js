import {Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import TextInputCostum from './component/textinput/textinput'
import ButtonCostum from './component/button/button'

const App = ({navigation}) => {
  return(
    <View style = {{flex : 1}}>
      <View style = {{
        flexbox : 1,
        justifyContent : 'flex-end',
        justifyContent : 'space-between',
        height : 140
      }}>
        <Text style ={{
          fontWeight : 'bold',
          marginLeft : 40
        }}>
          9:41
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{
          fontSize : 45,
          fontWeight : 'bold',
          marginLeft : 20
        }}>
        </Text>
        </TouchableOpacity>
        <Text style ={{
          fontSize : 30,
          fontWeight : 'bold',
          marginLeft : 25
        }}>
          Forgot Password
        </Text>
      </View>
      <View style ={{
        flex : 1,
        flexDirection : 'column',
        alignItems : 'center',
        marginTop : 80,
      }}>
        <Text style={{
          fontSize : 20,
          marginLeft : 25,
          marginRight : 25,
          marginBottom : 30
        }}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
        <TextInputCostum name = "Email"/>
        <Text style={{
          marginBottom : 50
        }}>
        </Text>
        <ButtonCostum text = "SEND" color= 'red' borderRadius= {30} />
      </View>
    </View>
  )
}
export default App;