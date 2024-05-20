// __tests__
import * as React from 'react'
import renderer from 'react-test-renderer'
import Button from '../src/screens/UnitTestComponent/components/Button'
it(`renders correctly`, () => {
  const tree = renderer.create(<Button>Login</Button>)
  expect(tree).toMatchSnapshot()
})
