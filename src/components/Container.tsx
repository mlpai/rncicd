import { View, Text, StyleProp, StyleSheet, ImageBackground, ImageSourcePropType } from 'react-native'
import React, { ReactElement } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

type ImageStyle = {
  blurRadius : number,
}

type Iprop = {
    children?: ReactElement | ReactElement[],
    style? : StyleProp<object>,
    image? : ImageSourcePropType | undefined
    imageStyle? : ImageStyle | undefined
}


const Container = (props : Iprop) => {
  const { children, style, image, imageStyle } = props
  return (
    <SafeAreaView style={[styles.container, style]} >
      <ImageBackground source={image} 
      blurRadius={imageStyle?.blurRadius}
      resizeMode={'cover'}
      style={{
        height: '100%',
        width: '100%',
      }} >
        {children}
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  }
})

export default Container