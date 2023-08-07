import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
const PreapperingOrderScreen = () => {
    const navigation=useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Delivery')
        },4000)
    },[])
  return (
    <View className='bg-[#00CCBB] flex-1 justify-center items-center'>
     <Animatable.View
     animation='fadeInUp'
     iterationCount={1}
     >
        <Image className='w-96 h-96' source={require("../assets/image_processing20190821-17803-12pij7c.gif")
        }/>
     </Animatable.View>

     <Animatable.Text 
     animation="fadeInUp" 
     iterationCount={1} 
     className='text-lg text-white font-bold text-center'
     >
        Waiting for Restaurant to accept your order!
     </Animatable.Text>

     <Progress.Bar
     className='mt-8'
     height={10} width={200} borderRadius={10}  indeterminate={true} borderWidth={1.5} color='white'/>


    </View>
  )
}

export default PreapperingOrderScreen