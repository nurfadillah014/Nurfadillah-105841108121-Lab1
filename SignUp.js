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
        <Text syle ={{
          fontSize : 20, fontWeight : 'bold', marginLeft : 20
        }}>
          Sign Up
        </Text>
     </View>

     <View style ={{
      flex : 1, flexDirection : 'column', alignItems : 'center', marginTop : 78,
     }}>
      <TextInputCostum name = "Name"/>
      <TextInputCostum name = "Email"/>
      <TextInputCostum name = "Password"/>
      <Text style ={{
        fontSize : 14, fontWeight : 'bold', marginTop : 10, marginBottom : 32, textAlign : 'right', marginLeft : 177
      }}>
        Do you have an account?
      </Text>
      <ButtonCostum text = "SIGN UP" color= 'black' borderRadius= {31}/>


     </View>

     <View style ={{
      flext : 1, alignItems : 'center', justifyContent : 'flex-start',
     }}>
      <Text style ={{
        fontWeight : 'bold', marginTop : 300
      }}>
        Or log in with a social account
      </Text>
     <View style ={{
      flex : 1,
      flexDirection : 'row', justifyContent : 'space-evenly', marginTop : 22
     }}>
      <View style ={{
        backgroundColor : '#eeeeee', borderRadius : 60, justifyContent : 'center', width : 50, height : 50, alignItems : 'center'
      }}>
        <Image source={require('./Google.png') }
        style={{ width : 40, height : 40, alignItems : 'center'
        }}/>
      </View>

      <View style ={{
        backgroundColor : '#eeeeee', borderRadius : 60, justifyContent : 'center', width : 50, height : 50, alignItems : 'center'
      }}>
        <Image source={require('./IG.png') }
        style={{ width : 40, height : 40, alignItems : 'center'
        }}/>
      </View>
      
      <View style ={{
        backgroundColor : '#eeeeee', borderRadius : 60, justifyContent : 'center', width : 50, height : 50, alignItems : 'center'
      }}>
        <Image source={require('./FB.png') }
        style={{ width : 40, height : 40, alignItems : 'center'
        }}/>
      </View>
    </View>
  </View>
</View>
  )
}

export default App
      