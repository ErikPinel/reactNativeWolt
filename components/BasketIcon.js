import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selctBasketTotal, selectBasketItems } from '../slices/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const items=useSelector(selectBasketItems);
    const navigation=useNavigation();
    const basketTotal=useSelector(selctBasketTotal);
    if(items.length===0)return; 


  return (
    <View className='absolute bottom-10 w-full z-50'>
        <TouchableOpacity onPress={()=>navigation.navigate('Basket')}
         className="bg-[#00CCBB] mx-5 p-4
         rounded-lg flex-row items-center space-x-1">
            <Text className='text-white text-lg font-extrabold bg-[#01A296] py-1 px-2'>{items.length}</Text>
            <Text className='flex-1 font-extrabold text-lg text-center text-white'>View Basket</Text>
            <Text className='text-white text-lg font-extrabold'>${basketTotal.toFixed(2)}</Text>

        </TouchableOpacity>
    </View>
  )
}

export default BasketIcon