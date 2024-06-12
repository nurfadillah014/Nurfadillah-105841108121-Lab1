// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
//  const App = () => {
//    return(
//      <View style = {{
//        flex:1,
//      }}>
//        <View style = {{
//          flex: 1,flexDirection : 'row',
//          backgroundColor : 'white'
//        }}>
//        <View style = {{
//          flex:1,
//          backgroundColor : 'yellow'
//        }}></View>
//        <View style = {{
//          flex:1,
//          backgroundColor : 'green'
//        }}></View>
//        </View>
//        <View style = {{
//          flex:1,
//          backgroundColor : 'red'
//        }}></View>
//        <View style = {{
//          flex: 1,
//          backgroundColor : 'blue'
//        }}></View>
//        </View>
  
//    )
// }

// export default App



import { StyleSheet,Text, View, Image } from 'react-native'
import React from 'react';

const App = () => {
  return (
    <View style={{flex : 1}}>
      <View style={{

        flex: 1,
        alignItems: 'flex-end', //BARIS
        justifyContent: 'center', //KOLOM
        flexDirection: 'row',
        marginBottom: 100,
        justifyContent: 'space-evenly'



      }}>
        <View style ={{
          backgroundColor: 'red', width: 180, height: 80,
          justifyContent: 'center',
          borderRadius: 10,


        }}>

          <Text style= {{
            fontSize: 30, color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>

            Login
             </Text>
       </View>

       <View style ={{
        backgroundColor: 'blue', width: 180, height: 80,
        justifyContent: 'center',
        borderRadius: 10,

       }}>

        <Text style= {{
          fontSize: 30, color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>

          Register 
           </Text>
     </View>
    </View>
    </View>
  );
}
export default App




// import { StyleSheet, Text, View, Image} from 'react-native'
// import React from 'react'

// const App = () => {
//   return(
//     <View style={{flex : 1}}>
//       <View style={{
//         flex : 1,
//         alignItems : 'center',
//         justifyContent : 'center',

//       }}>
//         <Text style= {{
//           fontSize : 50,
//           fontWeight: 'bold'

//         }}>Bag Bird</Text>
//     </View>


//     <View style={{
//     flex : 1,
//     alignItems : 'center',
//     justifyContent : 'center',

//     }}>
//     <Image source={require('./TokoPedia.png')} />
//     </View>

//     <View style={{
//     flex : 1,
//     alignItems : 'center',
//     justifyContent : 'center',
//     flexDirection : 'row',
//     justifyContent : 'space-evenly'

//     }}>

//       <View style={{
//         backgroundColor : 'green',
//         width : 120,
//         height : 80,
//         borderRadius : 20,
//         justifyContent : 'center'

//       }}>
//         <Text style={{
//           textAlign : 'center',
//           fontSize : 30,
//           color : 'white',
//           fontWeight : 'bold'
//         }}>Login
//         </Text>
//       </View>


//       </View style={{
//         backgroundColor : 'blue',
//         width : 120,
//         height : 80,
//         borderRadius : 20,
//         justifyContent : 'center'

//       }}>
//          <Text style={{
//           textAlign : 'center',
//           fontSize : 30,
//           color : 'white',
//           fontWeight : 'bold'
//          }}>Sign Up
//          </Text>
//       </View>


//     </View>

//   </View>

//   )
// }
// export default App


