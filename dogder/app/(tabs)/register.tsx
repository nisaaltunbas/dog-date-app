import { StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native'
import React, { useState } from 'react'
import Firebase from '../../firebaseConfig'
import Fontisto from '@expo/vector-icons/Fontisto';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {router} from 'expo-router'

const register = () => {

const[eposta,setEposta]=useState("")
const[sifre,setSifre]=useState("")

const kayitol=async()=>{
    await createUserWithEmailAndPassword(Firebase.auth,eposta,sifre);
    await setEposta("");
    await setSifre("");
    router.push('./login')
}

  return (
    <View style={{paddingTop:50,flex:1,justifyContent:'center'}}>
    <View>
      <View style={styles.registerCard}>
      <Text style={{fontSize:45,fontWeight:900,color:'#e24779',textAlign:'center',marginTop:30,marginBottom:50}}><Fontisto name="fire" size={60} color="#e24779" /> Dogder</Text>
        <TextInput style={styles.input} value={eposta} onChangeText={setEposta} placeholder='E-Posta '></TextInput>
        <TextInput style={styles.input} value={sifre} onChangeText={setSifre} placeholder='Şifre' secureTextEntry></TextInput>
        <View style={styles.registerCardBtn}>
        <TouchableOpacity onPress={kayitol} style={styles.registerBtn}>
        <Text style={styles.registerBtnText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
    </View>
  )
}

export default register

const styles = StyleSheet.create({
    input:{
        fontSize:18,
        padding:10,
        borderBottomWidth:2,
        borderBottomColor:'grey',
        marginBottom:30,
      },
      registerCard:{ 
        padding:20,
        borderWidth:1,
        borderRadius:9,
        borderColor:'#cccccc',
        margin:20,
        backgroundColor:'white',
        
      },
      registerCardBtn:{  
        flexDirection:'column',
        paddingTop:30
      },
      registerBtn:{
        backgroundColor:'#e24779',
        padding:10,
        borderRadius:9,
      
        
      },
      registerBtnText:{
        color:'white',
        fontSize:24,
        textAlign:'center'
      },
})