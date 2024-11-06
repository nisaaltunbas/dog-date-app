import { Tabs,useFocusEffect } from 'expo-router';
import React, { useState } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const[isgiris,setIsgiris]=useState("/login")
  const[iscikis,setIscikis]=useState("/cikis") 

  useFocusEffect(()=>{
    const kontrol=async()=>{
      const girisvarmi=await AsyncStorage.getItem('girisyapildi');
      if(girisvarmi){
          setIsgiris(null)
          setIscikis('/cikis')

      }else{
        setIsgiris('/login')
        setIscikis(null)
      }
      }
      kontrol();
  })


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Keşfet',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'flame' : 'flame-outline'} color={'red'} />
          ),
        }}
      />
       <Tabs.Screen
        name="kisiler"
        options={{
          title: 'Mesaj',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'chatbubble' : 'chatbubble-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          href:isgiris,
          title: 'Giriş',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'log-in' : 'log-in-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: 'Kayıt',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'log-in' : 'log-in-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cikis"
        options={{
          href:iscikis,
          title: 'Çıkış',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'exit' : 'exit-outline'} color={color} />
          ),
        }}
      />
     
    </Tabs>
  );
}
