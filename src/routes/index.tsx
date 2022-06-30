import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NonAuthStack from './NonAuthStack'
import { connect } from 'react-redux'
import { RootState } from '../redux/reducers'
import { AuthState, UserInfoState } from '../redux/types'
import AuthStack from './AuthStack'

type Iprop  = {
    authState : AuthState,
    userInfo : UserInfoState,
}

const MainStack = (props: Iprop) => {
  const { authState, userInfo } = props
  StatusBar.setBackgroundColor("#000");
  return (
    <NavigationContainer>
      {authState.token !== undefined && authState.token !== null ? <NonAuthStack /> : <AuthStack/> }
    </NavigationContainer>
  )
}

const mapStateToProps = (state: RootState) => {
    return {
        authState : state.authState,
        // userInfo : state.userInfoState,
    }
 }


export const Navigator  = connect(mapStateToProps)(MainStack)