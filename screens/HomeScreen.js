import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect,useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClinet from '../sanity'

const HomeScreen = () => {
    const navigation =useNavigation();
    const [featuredCategories,setFeaturedCategories]=useState([])

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    },[]);

    useEffect(()=>{
        sanityClinet.fetch(`
        *[_type=="featured"]{
            ...,
            Restaurants[]->{
              ...,
              Dishes[]-> 
            }
          }`).then(data=>{setFeaturedCategories(data)})
    },[]);

  return (
    <SafeAreaView className="bg-white pt-5 " >
    

    {/* Header */}
    <View className='flex-row pb-3 items-center mx-3 space-x-1  '>
        <Image
        source={{
            uri:'https://links.papareact.com/wru'
        }}
        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
    

    <View className='flex-1'>
        <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
        <Text className='font-bold text-xl'>Current Location
        <ChevronDownIcon size={20} color='#00CCBB'/>
        </Text>
    </View>

    <UserIcon size={35} color='#00CCBB'/>
    </View>

    {/* Search */}
    <View className='flex-row items-center space-x-2  pb-2 mx-3'>
        <View className='flex-row  flex-1 space-x-2 bg-gray-200 p-3'>
            <MagnifyingGlassIcon size={20} color={'gray'} />
            <TextInput  placeholder="Restaurants and cuisines"
            keyboardType='default'
            />
        </View>

        <AdjustmentsVerticalIcon color='#00CCBB'/>
    </View>

    {/*Body*/}
    <ScrollView className='bg-gray-100'
    contentContainerStyle={{
        paddingBottom:100 
    }}
    >
        {/* Categories */}
        <Categories/>

        {/* Featured Rows */}
        {featuredCategories?.map((category,index)=>(
               <FeaturedRow
               key={index}
               id={category._id}
               title={category.title}
               description={category.short_description}
               />
        ))}

     
     
    </ScrollView>

    
    </SafeAreaView>
  )
}

export default HomeScreen