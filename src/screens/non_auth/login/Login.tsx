import { View, Text, ImageBackground, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Button, Colors } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { updateAuthState } from '../../../redux/reducers/authSlice'
import Container from '../../../components/Container'
import { IMAGES } from '../../../theme/images'
import Heading from '../../../components/Heading'
import { MyColors } from '../../../theme/colors'
import { screenHeight } from '../../../utils'
import { globalStyles } from '../../../theme/globalStyles'
import { NavigationProp } from '@react-navigation/native'


const Login = ({navigation}) => {
  const height = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.spring(height, {toValue: 0, useNativeDriver: true}).start();
  }, [])

  return (
    <Container 
      image={IMAGES.main_bg} 
      imageStyle={{
      blurRadius : 2
    }} >
      <View style={{flex: 1}} />
      <Animated.View style={[{
        height : screenHeight * 0.35,
        backgroundColor : MyColors.light,
        borderTopStartRadius: 20,
        borderTopRightRadius : 20,
        transform : [{
          translateY : height
        }],
        }, globalStyles.container, globalStyles.shadow]}>
        
        <Heading 
          center 
          textAlign={'center'}
          mt={20} 
          varient='h3' 
          color={'dark'} 
          text='Enjoy the New Experience of chatting with Global Friends.' 
        />

        <Heading 
          center 
          textAlign={'center'}
          mt={20}
          mb={20}
          varient='body' 
          color={Colors.grey600} 
          text='Connect People around the world free.' 
        />

        <Button mode='contained' style={{
          borderRadius : 50,
        }} color={Colors.blue600}
        onPress={() => {
          navigation.navigate('')
        }}
        > Get Started </Button>

      </Animated.View>
    </Container>
  )
}

export default Login