import { View, Text, ScrollView} from 'react-native'
import React from 'react';
import CategoryCard from './CategoryCard';

/*import CategoryCard from "react-native-category-card";*/


const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle ={{
        paddingHorizontal: 15,
        paddingTop: 10,
        
    }} 
    horizontal
    showsHorizontalScrollIndicator = {false}   
    >



    <CategoryCard imgUrl="https://links.papareact.com/gn7"
     title="teszt"/>
    <CategoryCard imgUrl="https://links.papareact.com/gn7"
     title="teszt"/>
    <CategoryCard imgUrl="https://links.papareact.com/gn7" 
    title="teszt"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" 
    title="teszt"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" 
    title="teszt"/>
    
 
    </ScrollView>
  )
}

export default Categories