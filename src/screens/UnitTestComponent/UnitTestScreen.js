import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'

const UnitTestScreen = () => (
  <View>
    <TouchableOpacity style={styles.button}>
      <Text>Click Me</Text>
    </TouchableOpacity>
  </View>
)

export default UnitTestScreen

const styles = StyleSheet.create({
  button: {},
})
