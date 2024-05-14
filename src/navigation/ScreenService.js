import RouteKey from './RouteKey'
import {LoginScreen, SignUpScreen} from '../screens'
// Screen Import
import HomeScreen from '../screens/HomeComponent/HomeScreen'
import {colors} from '../themes'
import {TrackDetail} from '../screens/TrackDetail'
import RenderPropsScreen from '../screens/HomeComponent/RenderPropsScreen'
import AnimationScreen from '../screens/HomeComponent/AnimationScreen'
import CameraScreen from '../screens/HomeComponent/CameraScreen'
import AutomationTestScreen from '../screens/HomeComponent/AutomationTestScreen'
import SecurityTestScreen from '../screens/HomeComponent/SecurityTestScreen'
import CICDScreen from '../screens/HomeComponent/CICDScreen'
import SpeedUpYourBuildScreen from '../screens/HomeComponent/SpeedUpYourBuildScreen'
import ProfilingScreen from '../screens/HomeComponent/ProfilingScreen'
import UnitTestScreen from '../screens/UnitTestComponent/UnitTestScreen'

export const screenMatch = screen => {
  switch (screen) {
    // Screen Match
    case RouteKey.LoginScreen:
      return LoginScreen
    case RouteKey.SignUpScreen:
      return SignUpScreen
    case RouteKey.HomeScreen:
      return HomeScreen
    case RouteKey.TrackDetailScreen:
      return TrackDetail
    case RouteKey.RenderPropsScreen:
      return RenderPropsScreen
    case RouteKey.AnimationScreen:
      return AnimationScreen
    case RouteKey.CameraScreen:
      return CameraScreen
    case RouteKey.AutomationTestScreen:
      return AutomationTestScreen
    case RouteKey.SecurityTestScreen:
      return SecurityTestScreen
    case RouteKey.CICDScreen:
      return CICDScreen
    case RouteKey.SpeedUpYourBuildScreen:
      return SpeedUpYourBuildScreen
    case RouteKey.ProfilingScreen:
      return ProfilingScreen
    case RouteKey.UnitTestScreen:
      return UnitTestScreen
    default:
      return ''
  }
}

export const optionsMatch = ({route}) => {
  const name = route?.name
  let headerShown = true
  let headerBackVisible = true
  let headerTintColor = colors.black
  let headerTransparent = false
  let headerBackTitleVisible = false
  let gestureEnabled = true
  let animation = 'default'
  let title = ''
  let headerLeft = null
  switch (name) {
    case RouteKey.HomeScreen:
    case RouteKey.HomeStack:
      headerLeft = null
      break
    default:
      break
  }
  return {
    headerShown,
    title: title,
    headerTitleAlign: 'center',
    headerBackVisible,
    headerTintColor,
    headerTransparent,
    animation,
    gestureEnabled,
    headerBackTitleVisible,
    headerLeft,
  }
}
