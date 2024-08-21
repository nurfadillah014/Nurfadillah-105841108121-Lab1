const TextInputCostum = ({ name, onChangeText }) => {
    return (
      <View>
        <TextInput 
          placeholder={`Masukkan ${name}`}
          style={{
            height: 64, 
            width: 343, 
            borderColor: 'gray', 
            borderWidth: 1, 
            margin: 3, 
            fontSize: 20, 
            borderRadius: 5, 
            paddingHorizontal: 10
          }}
          onChangeText={onChangeText}
        />
      </View>
    )
  }
  