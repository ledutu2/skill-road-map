import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
function Button({children}) {
  return (
    <TouchableOpacity style={[styles.button]}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}
export default Button

const styles = StyleSheet.create({
  button: {},
})
