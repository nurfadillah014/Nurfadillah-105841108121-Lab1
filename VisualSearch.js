import {Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import ButtonCostum from './Component/Button/Button'

const App = () => {
  return(
    <View style = {{flex : 1}}>
      <View style = {{
        flexbox : 1,
        flexDirection : 'row',
        alignItems : 'center',
        marginTop : 50,
        height : 50
      }}>
        <Text style={{
          alignItems : 'flex-start',
          fontSize : 30,
          marginLeft : 20,
          fontWeight : 'bold'
        }}>{'<'}</Text>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{
            fontSize: 24,
            fontWeight: 'bold',
          }}>Visual Search</Text>
        </View>
      </View>

      <View style ={{
        flex : 1,
        backgroundColor : 'gray',
        alignItems : 'center',
        justifyContent : 'center',
      }}>
        <Text style ={{
          fontSize : 50,
          marginLeft : 30,
          marginRight : 30,
          marginBottom : 30,
        }}>Search for an outfit by taking a photo or uploading an image</Text>
        <ButtonCostum text = "TAKE A PHOTO" color= 'red' borderRadius= {30} style={{}}/>
        <ButtonCostum text = "UPLOAD AN IMAGE" color= 'green' borderRadius= {30} />
        

      </View>

    </View>
  )
}
export default App