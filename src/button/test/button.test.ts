import { render } from '@testing-library/vue'
import Button from '../src/button'

// base功能
test('should first', () => {
  const { getByRole } = render(Button)
  getByRole('button')
})

test('default slot should be 按钮', () => {
  const { getByText } = render(Button)
  getByText('按钮')
})

test(' slot should work', () => {
  const { getByText } = render(Button, {
    slots: {
      default() {
        return 'confirm'
      }
    }
  })
  getByText('confirm')
})

test(' props type should work', () => {
  const { getByRole } = render(Button, {
    props: {
      type: 'primary'
    }
  })
  const button = getByRole('button')
  expect(button.classList.contains('b-button--primary')).toBe(true)
})

test(' default type should secondary', () => {
  const { getByRole } = render(Button)
  const button = getByRole('button')
  expect(button.classList.contains('b-button--secondary')).toBe(true)
})
