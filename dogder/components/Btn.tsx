import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Btn = (props) => {
  return (
    <View style={{width:150,alignItems:'center'}}>
      <Text style={{backgroundColor:props.renk,padding:10}}>{props.metin}</Text>
    </View>
  )
}

export default Btn

const styles = StyleSheet.create({
    btn:{
       width:200

    }
})