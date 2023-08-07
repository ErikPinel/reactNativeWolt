import { View, Text, ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity'

const FeaturedRow = ({id,description,title}) => {
    const [restaurants,setRestaurants]=useState([])
    useEffect(()=>{
        sanityClient.fetch(`
        *[_type == "featured" && _id == $id]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->,
              
                type->{
                    title
                }
                

              },
            }[0]
        `,{id:`${id}`}
        ).then(data=>setRestaurants(data?.restaurants))
    },[])
    console.log(restaurants[0]?.type)
  return (
    <View>
      <View className='items-center flex-row justify-between mt-4 px-4'>
       <Text className='font-bold text-lg'>{title}</Text>
       <ArrowRightIcon color='#00CCBB'/>
      </View>

    <Text className='text-xs text-gray-500 px-4'>{description}</Text>

    <ScrollView
    horizontal
    contentContainerStyle={{
        paddingHorizontal:15,
    }}
    showsHorizontalScrollIndicator={false}
    className='pt-4'
    >

    {/* RestaurantCard */}
    
    {
        restaurants?.map((e,i)=>(
            <RestaurantCard
            key={i}
            imgUrl={e.image}
            title={e.name}
            rating={e.rating}
            genre={e.type.title}
            address={e.address}
            short_description={e.short_description}
            dishes={e.dishes}
            long={e.long}
            lat={e.lat}
          />
        ))
    }
   
      
    

    </ScrollView>

    </View>
  )
}

export default FeaturedRow