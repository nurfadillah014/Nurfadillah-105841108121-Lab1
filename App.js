import { useFonts} from 'expo-font'
import { View, Text } from 'react-native';

export default function App() {
  const [dapatFont] = useFonts({
    'MetroBlack': require('./assets/fonts/Metropolis-Black.otf'),
    'MetroBold': require('././assets/fonts/Metropolis-Bold.otf'),
    'MetroLight': require('././assets/fonts/Metropolis-Light.otf'),
    'MetroMedium': require('././assets/fonts/Metropolis-Medium.otf'),
    'MetroSemiBold': require('././assets/fonts/Metropolis-SemiBold.otf'),
  });

  if (!dapatFont) {
    return <Text> font tidak ditemukan...</Text>
  }

  return (
    <View style={{
      flext:1,
      justifyContent : "center",
      alignItems : "center",
    }}>
      <Text style = {{fontFamily : 'Metroblack'}}>font metropolis black</Text>
      <Text style = {{fontFamily : 'MetroBold'}}>font metropolis bold</Text>
      <Text style = {{fontFamily : 'MetroLight'}}>font metropolis Light</Text>
      <Text style = {{fontFamily : 'MetroMedium'}}>font metropolis Medium</Text>
      <Text style = {{fontFamily : 'MetroSemiBold'}}>font metropolis SemiBold</Text>
    </View>
  )
}