import React from 'react'
import {Text, TouchableHighlight, View} from 'react-native'

const TodoItem = ({todo, editTodoItem, deleteTodoItem}) => (
  <View className="todoItem">
    <View className="todoItemText">
      <Text>{todo.todoText}</Text>
    </View>
    <View className="todoItemControls">
      <TouchableHighlight className="bg-default" onPress={() => editTodoItem(todo)}>
        <Text>Edit</Text>
      </TouchableHighlight>
      <TouchableHighlight className="bg-danger" onPress={() => deleteTodoItem(todo)}>
        <Text>Del</Text>
      </TouchableHighlight>
    </View>
  </View>
)
export default TodoItem
