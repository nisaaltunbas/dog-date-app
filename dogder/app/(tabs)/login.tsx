import { StyleSheet, Text, TouchableOpacity, View,TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Firebase from '../../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Fontisto from '@expo/vector-icons/Fontisto';
import {router,useFocusEffect} from 'expo-router'
import { signInWithEmailAndPassword } from 'firebase/auth';




const login = () => {

  const[eposta,setEposta]=useState("")
  const[sifre,setSifre]=useState("")

  const[giris,setGiris]=useState(false)


  const girisyap=async()=>{
    try{
        const userkey = await signInWithEmailAndPassword(Firebase.auth,eposta,sifre)
        AsyncStorage.setItem("girisyapildi",userkey.user.uid)
        setGiris(true)
        setEposta("");
        setSifre("");
        router.push('./')
    }catch{
        Alert.alert("Girdiğiniz e-posta veya şifre yanlış")
        setEposta("")
        setSifre("")
    }
  }


  return (
    <View style={{paddingTop:50,flex:1,justifyContent:'center'}}>
      
        <View>
          <View style={styles.loginCard}>
            <Text style={{fontSize:45,fontWeight:900,color:'#e24779',textAlign:'center',marginTop:30,marginBottom:50}}><Fontisto name="fire" size={60} color="#e24779" /> Dogder</Text>
            <TextInput style={styles.input} placeholder='E-Posta' value={eposta} onChangeText={setEposta}/>
            <TextInput style={styles.input} placeholder='Şifre' value={sifre} onChangeText={setSifre} secureTextEntry />
            <View style={styles.loginCardBtn}>
                <TouchableOpacity onPress={girisyap} style={styles.loginBtn}>
                  <Text style={styles.loginBtnText}>Giriş</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>

    </View>
  )
}

export default login

const styles = StyleSheet.create({

  input:{
    fontSize:18,
    padding:10,
    borderBottomWidth:2,
    borderBottomColor:'grey',
    marginBottom:30,
  },
  loginCard:{ 
    padding:20,
    borderWidth:1,
    borderRadius:9,
    borderColor:'#cccccc',
    margin:20,
    backgroundColor:'white',
    
  },
  loginCardBtn:{  
    flexDirection:'column',
    paddingTop:30
  },
  loginBtn:{
    backgroundColor:'#e24779',
    padding:10,
    borderRadius:9,
  
    
  },
  loginBtnText:{
    color:'white',
    fontSize:24,
    textAlign:'center'
  },
  registerBtn:{
    backgroundColor:'ghostwhite',
    padding:10,
    borderRadius:9,
    marginTop:20
    
  },
  registerBtnText:{
    fontSize:24,
    color:'grey',
    textAlign:'center',
    
  }
})