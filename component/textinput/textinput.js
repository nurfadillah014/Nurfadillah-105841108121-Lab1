import { TextInput, Text, View } from "react-native"
import React from "react"

const TextInputCostum = ({name}) =>{
    return(
        <View>
            <TextInput placeholder ={`Masukkan ${name}`}
            style ={{
                height : 64, width : 343, borderColor : 'gray', borderWidth : 1, margin : 3, fontSize : 20, borderRadius : 5, paddingHorizontal : 10
            }}/>
        </View>
    )
}

export default TextInputCostum