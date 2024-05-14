import {StyleSheet, Text, TextInput, View} from 'react-native'
import React, {useState} from 'react'

const Title = ({render}) => render()

const Input = ({children}) => {
  const [text, setText] = useState('')

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={setText} value={text} />
      </View>
      {children?.(text)}
    </View>
  )
}

const RenderPropsScreen = () => (
  <View style={styles.container}>
    <Title render={() => <Text style={styles.h1}>✨ First render prop! ✨</Text>} />
    <Title render={() => <Text style={styles.h2}>🔥 Second render prop! 🔥</Text>} />
    <Title render={() => <Text style={styles.h3}>🚀 Third render prop! 🚀</Text>} />
    <Input>{text => <Text style={styles.h1}>Input text: {text}</Text>}</Input>
    <Input>{text => <Text style={styles.h3}>Input text: {text}</Text>}</Input>
  </View>
)

export default RenderPropsScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
  },
})
