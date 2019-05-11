import React, { useEffect, useRef } from 'react'
import { StyleSheet, Image } from 'react-native';
import Animation from 'lottie-react-native';
import anim from './assets/animations/bloodsugar_0.1.5.json';
import Logo from './assets/images/logo/Logo.png'

const SplashScreen = () => {
  const animationRef = useRef(null)

  useEffect(() => {
    animationRef.current && animationRef.current.play()
  })

  return (
    <>
      <Image
        style={styles.img}
        source={Logo}
      />
      {/* <Animation
        ref={animationRef}
        style={styles.anim}
        loop={true}
        source={anim}
      /> */}
    </>
  )
}

const styles = StyleSheet.create({
  anim: {
    width: 120,
    height: 120,
    alignSelf: 'center'
  },
  img: {
    alignSelf: 'center'
  }
});

export default SplashScreen
