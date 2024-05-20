/* eslint-disable react/react-in-jsx-scope */
import {fireEvent, render} from '@testing-library/react-native'
import TodoItem from '../src/screens/UnitTestComponent/components/TodoItem'

it('delete and edit a todo', () => {
  const mockEditTodoItemFn = jest.fn()
  const mockDeleteTodoItemFn = jest.fn()
  const view = render(
    <TodoItem
      todo={{todoText: 'go to church'}}
      editTodoItem={mockEditTodoItemFn}
      deleteTodoItem={mockDeleteTodoItemFn}
    />,
  )
  const screen = view
  fireEvent.press(screen.getByText('Edit'))
  fireEvent.press(screen.getByText('Del'))
  expect(mockEditTodoItemFn).toHaveBeenCalledWith({todoText: 'go to church'})
  expect(mockDeleteTodoItemFn).toHaveBeenCalledWith({todoText: 'go to church'})
})
