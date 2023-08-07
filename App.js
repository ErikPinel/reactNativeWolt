

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import 'react-native-url-polyfill/auto'
import { NativeWindStyleSheet } from "nativewind";
import RestaurantScreen from './screens/RestaurantScreen';
import { store } from './store'
import { Provider } from 'react-redux'
import BasketScreen from './screens/BasketScreen';
import PreapperingOrderScreen from './screens/PreapperingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';


const Stack = createNativeStackNavigator();


NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Basket" component={BasketScreen}
         options={{presentation:'modal',headerShown:false}} />
          <Stack.Screen name="PreapperingOrderScreen" component={PreapperingOrderScreen}
        options={{presentation:'fullScreenModal',headerShown:false}}/>

<Stack.Screen name="Delivery" component={DeliveryScreen}
         options={{presentation:'modal',headerShown:false}} />
        </Stack.Navigator>

       

        </Provider>
    </NavigationContainer>
  );
}


