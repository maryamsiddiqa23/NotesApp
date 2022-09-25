import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { backgroundColor } from '../../res/drawables'

const Splash = (props) => {
  setTimeout(() => {
    props.navigation.replace('Login')
  }, 3000)

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/sp1.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    height: 300,
    width: 300,
  },
})

export default Splash
