import React, { useState, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import SplashScreen from './SplashScreen'
import AppNavigator from './navigation/AppNavigator'
import { color } from './assets/styles/basicStyle'


const App = () => {
  const [isAnimation, setAnimation] = useState(true)

  useEffect(() => {
    const timeOut = setTimeout(() => { setAnimation(false) }, 1000)
    return () => {clearTimeout(timeOut)}
  })

  return (
    <View style={styles.container}>
      {isAnimation ?
        <SplashScreen />
        :
        <>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </>
      }
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.THEME,
    justifyContent: 'center'
  },
});

export default App