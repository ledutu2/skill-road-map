import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {screenMatch, optionsMatch} from './ScreenService'
import RouteKey from './RouteKey'

export const componentMatch = stackName => {
  switch (stackName) {
    case RouteKey.HomeStack:
      return HomeNavigator
    default:
      return ''
  }
}

const Stack = createNativeStackNavigator()

export const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={RouteKey.HomeScreen}
      component={screenMatch(RouteKey.HomeScreen)}
      options={{title: 'Home'}}
    />
    <Stack.Screen
      name={RouteKey.RenderPropsScreen}
      component={screenMatch(RouteKey.RenderPropsScreen)}
      options={{title: 'Render Props'}}
    />

    <Stack.Screen
      name={RouteKey.AnimationScreen}
      component={screenMatch(RouteKey.AnimationScreen)}
      options={{title: 'Animation'}}
    />

    <Stack.Screen
      name={RouteKey.CameraScreen}
      component={screenMatch(RouteKey.CameraScreen)}
      options={{title: 'Camera'}}
    />

    <Stack.Screen
      name={RouteKey.AutomationTestScreen}
      component={screenMatch(RouteKey.AutomationTestScreen)}
      options={{title: 'AutomationTest'}}
    />

    <Stack.Screen
      name={RouteKey.SecurityTestScreen}
      component={screenMatch(RouteKey.SecurityTestScreen)}
      options={{title: 'SecurityTest'}}
    />

    <Stack.Screen
      name={RouteKey.CICDScreen}
      component={screenMatch(RouteKey.CICDScreen)}
      options={{title: 'CICD'}}
    />

    <Stack.Screen
      name={RouteKey.SpeedUpYourBuildScreen}
      component={screenMatch(RouteKey.SpeedUpYourBuildScreen)}
      options={{title: 'Speed Up Your Build'}}
    />

    <Stack.Screen
      name={RouteKey.ProfilingScreen}
      component={screenMatch(RouteKey.ProfilingScreen)}
      options={{title: 'Profiling'}}
    />

    <Stack.Screen
      name={RouteKey.UnitTestScreen}
      component={screenMatch(RouteKey.UnitTestScreen)}
      options={{title: 'Unit Test'}}
    />
  </Stack.Navigator>
)

export const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={RouteKey.LoginScreen}
      component={screenMatch(RouteKey.LoginScreen)}
      options={optionsMatch}
    />
    <Stack.Screen
      name={RouteKey.SignUpScreen}
      component={screenMatch(RouteKey.SignUpScreen)}
      options={optionsMatch}
    />
  </Stack.Navigator>
)

export const MainStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={RouteKey.HomeStack}
      component={HomeNavigator}
      options={{...optionsMatch, headerShown: false}}
    />
  </Stack.Navigator>
)
