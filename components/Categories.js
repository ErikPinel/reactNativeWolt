import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from '../sanity';

const Categories = () => {
const [categories,setCategories]=useState([]);

useEffect(()=>{
  sanityClient.fetch(`
  *[_type=="category"]
  `).then(data=>setCategories(data));
},[])


  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,
    }}
    horizontal 
    showsHorizontalScrollIndicator={false}
    >
        {/* CatogryCard */}
        {categories?.map((e,i)=>(
      <CategoryCard 
      key={i}
      imgUrl={urlFor(e.image).width(200).url()}
      title={e.title}/>

        ))}
      
    </ScrollView>
  )
}

export default Categories