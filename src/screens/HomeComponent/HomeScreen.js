import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {ScreenContainer} from '../../components'
import {Colors} from '../../utilities/colors'
import RouteKey from '../../navigation/RouteKey'
import {useNavigation} from '@react-navigation/native'

const Item = ({title, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.songContainer}>
    <Text style={styles.songTitle}>{title}</Text>
    <Text style={styles.songDuration}>{'>'}</Text>
  </TouchableOpacity>
)

const SkillRoadMaps = [
  {
    id: 0,
    title: 'Render Props',
    screen: RouteKey.RenderPropsScreen,
  },
  {
    id: 1,
    title: 'Animation',
    screen: RouteKey.AnimationScreen,
  },
  {
    id: 2,
    title: 'Camera',
    screen: RouteKey.CameraScreen,
  },
  {
    id: 3,
    title: 'Automation Test',
    screen: RouteKey.AutomationTestScreen,
  },
  {
    id: 4,
    title: 'Security Test',
    screen: RouteKey.SecurityTestScreen,
  },
  {
    id: 5,
    title: 'CI/CD',
    screen: RouteKey.CICDScreen,
  },
  {
    id: 6,
    title: 'Speed Up Your Build',
    screen: RouteKey.SpeedUpYourBuildScreen,
  },
  {
    id: 7,
    title: 'Profiling',
    screen: RouteKey.ProfilingScreen,
  },
  {
    id: 8,
    title: 'Unit Test',
    screen: RouteKey.UnitTestScreen,
  },
]

const HomeScreen = () => {
  const navigation = useNavigation()
  const handleSkillPress = item => {
    navigation.navigate(item.screen)
  }

  return (
    <ScreenContainer>
      {SkillRoadMaps.map((item, index) => (
        <Item key={index} title={item.title} onPress={() => handleSkillPress(item)} />
      ))}
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.seccond,
  },
  songContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  songArtist: {
    fontSize: 12,
  },
  songDuration: {
    fontSize: 12,
    fontWeight: 'bold',
  },
})

export default HomeScreen
