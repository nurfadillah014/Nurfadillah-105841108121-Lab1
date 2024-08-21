import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import TextInputCostum from './component/textinput/textinput';
import ButtonCostum from './component/button/button';

const SignUpPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'space-between', height: 140 }}>
        <Text style={{ fontWeight: 'bold', marginLeft: 40 }}>9:41</Text>
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 25 }}>
          Sign Up
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 80,
        }}
      >
        <TextInputCostum name="Nama" />
        <TextInputCostum name="Email" />
        <TextInputCostum name="Password" />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: 10,
              marginBottom: 30,
              textAlign: 'right',
              marginLeft: 175,
            }}
          >
            Already have an account?
          </Text>
        </TouchableOpacity>

        <ButtonCostum text="SIGN UP" color="red" borderRadius={30} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Text style={{ fontWeight: 'bold', marginTop: 100 }}>
          Or sign up with social account
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}
        >
          <View
            style={{
              backgroundColor: '#eeeeee',
              borderRadius: 10,
              justifyContent: 'center',
              width: 92,
              height: 64,
              alignItems: 'center',
            }}
          >
            <Image
              source={require('./Google.png')}
              style={{ width: 50, height: 50, alignItems: 'center' }}
            />
          </View>
          <View
            style={{
              backgroundColor: '#eeeeee',
              borderRadius: 10,
              justifyContent: 'center',
              width: 92,
              height: 64,
              alignItems: 'center',
            }}
          >
            <Image
              source={require('./FB.png')}
              style={{ width: 50, height: 50, alignItems: 'center' }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpPage;
