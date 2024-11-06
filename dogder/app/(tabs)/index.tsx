import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons'
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router,useFocusEffect } from 'expo-router';



const index = () => {
  const[veri,setVeri]=useState({})
  const[yeni,setYeni]=useState(0)
  const[a,seta]=useState(3)
  const[bio,setBio]=useState([
    "Travel",
    "Games",
    "Friendly",
    "Treats",
    "Frisbee",
    "Eating",
    "Walking",
  ])
  const[isim,setIsım]=useState([
    "Karabaş,3",
    "Stella,8 ",
    "Boncuk,7",
    "Pamuk,11",
    "Çapkın,9",
    "Chester,16",
    "Limon,4"
  ])
  const[test,setTest]=useState("x")


  const begen=()=>{
    setYeni(yeni+1)
    

  }
  const begenme=()=>{
    setYeni(yeni+1)
  }
  const geri=()=>{
    setYeni(yeni+1)
  }

  useEffect(()=>{
    if(AsyncStorage.getItem('girisyapildi')){
      axios.get('https://dog.ceo/api/breeds/image/random').then((response)=>{
      setVeri(response.data);
      seta(Math.floor(Math.random()*7))
      })
    }else{
      router.push('./login')
    }
  },[yeni])

  useFocusEffect(()=>{
    const kontrol=async()=>{
      const girisvarmi=await AsyncStorage.getItem('girisyapildi');
      if(!girisvarmi){
          router.push('./login')
      }
  }

  kontrol();
  })


  return (
    <View style={{paddingTop:60}}>
      
      <View>
        <Text style={{fontSize:45,fontWeight:900,color:'#e24779',textAlign:'center'}}><Fontisto name="fire" size={60} color="#e24779" /> Dogder</Text>
      </View>
      <View style={{backgroundColor:'white',padding:10,margin:10}}>
         <View><Image width={350} height={400} source={{uri:veri.message}}/></View>
         <View style={{paddingTop:20}}>
            <Text style={{fontSize:30,fontWeight:600}}>{isim[a]} {test}</Text>
            <Text style={{height:70,fontSize:21}}>
              {bio[a]}
            </Text>
         </View>
      </View>  

      <View style={styles.aksiyon}>
          <View style={styles.btn}>
            <TouchableOpacity onPress={begenme}><Entypo name="cross" size={70} color="red" /></TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity onPress={geri}><Fontisto name="arrow-return-left" size={60} color="lightblue" /></TouchableOpacity>        
          </View>
          <View style={styles.btn}>
            <TouchableOpacity onPress={begen}><Ionicons name="heart" size={60} color="green" /></TouchableOpacity>
          </View>
      </View>
    
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  aksiyon:{
  
   flexDirection:'row'
  },
  btn:{
    flex:1,
    alignItems:'center'
  }
})